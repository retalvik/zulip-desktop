#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::collections::HashSet;
use std::sync::Mutex;
use tauri::Manager;
use once_cell::sync::Lazy;
use url;

static DOMAIN_WINDOW_LABELS :Lazy<Mutex<HashSet<String>>> = Lazy::new(|| {
  Mutex::new(HashSet::new())
});


fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![
      toogle_domain_on_main_view,
      toggle_browserbench_window,
      toggle_html5test_window,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
async fn toogle_domain_on_main_view(handle: tauri::AppHandle, url: String) {
  println!("load_on_main_view: {}", url);
  let window = handle.get_window(url.as_str()).unwrap_or_else(|| {
    return create_child_window(handle, url.as_str());
  });
  //create_child_window(handle.clone()).await;
  //https://github.com/tauri-apps/tauri/discussions/5377#discussioncomment-3833989
  // handle.get_window("child").unwrap().eval("window.location.replace(url)").unwrap();
  window.show().unwrap();
}

// if not <iframe> then use this
// https://github.com/tauri-apps/tauri/issues/2975
fn create_child_window(handle: tauri::AppHandle, url :&str) -> tauri::Window {
  let uri = url::Url::parse(url).unwrap();
  let label = uri.host_str().unwrap().replace(".", "_");
  let child = handle.get_window(label.as_str());
  if child.is_some() {
    return child.unwrap();
  }

  let main = handle.get_window("main").unwrap();
  let scale_factor = main.scale_factor().unwrap();

  let main_phyiscal_pos = main.outer_position().unwrap();
  let main_pos = main_phyiscal_pos.to_logical::<i32>(scale_factor);

  let main_phyiscal_size = main.outer_size().unwrap();
  let main_size = main_phyiscal_size.to_logical::<i32>(scale_factor);

  let margin_left = 26.0 * scale_factor;

  let child = tauri::WindowBuilder::new(
        &handle,
        label, /* the unique window label */
        tauri::WindowUrl::External(url.parse().unwrap())
      )
      .decorations(false)
      .resizable(false)
      .skip_taskbar(true)
      .position(
        main_pos.x as f64 + margin_left,
        main_pos.y as f64,
      )
      .inner_size(
        main_size.width as f64 - margin_left,
        main_size.height as f64,
      );

  #[cfg(target_os = "macos")]
  let child = child.parent_window(main.ns_window().unwrap());
  #[cfg(windows)]
  let child = child.parent_window(main.hwnd().unwrap());
  #[cfg(target_os = "linux")]
  let child = child.always_on_top(true);
  //TODO retalvik: equivalent for linux?
  // let child = child.parent_window(main.xlib_window().unwrap());

  DOMAIN_WINDOW_LABELS.lock().unwrap().insert("child".to_string());
  return child.build().unwrap();
}

#[tauri::command]
async fn toggle_browserbench_window(handle: tauri::AppHandle) {
  toogle_window("browserbench", "https://browserbench.org/", handle);
}

#[tauri::command]
async fn toggle_html5test_window(handle: tauri::AppHandle) {
  toogle_window("html5test", "https://html5test.com/", handle);
}

fn toogle_window(label :&str, url: &str, handle: tauri::AppHandle) {
  let bench_window = handle.get_window(label).unwrap_or_else(|| {
      let window = tauri::WindowBuilder::new(
          &handle,
          label, /* the unique window label */
          tauri::WindowUrl::External(url.parse().unwrap())
        )
        .title(label)
        .min_inner_size(1000.0, 800.0)
        .build().unwrap();
      window.hide().unwrap();
      return window;
    });

  if bench_window.is_visible().unwrap_or_default() {
    bench_window.hide().unwrap();
  } else {
    bench_window.show().unwrap();
  }
}
