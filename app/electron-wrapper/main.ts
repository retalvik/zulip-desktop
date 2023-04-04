import {MainCall, MainMessage, RendererMessage} from "../common/typed-ipc";
import {OpenDialogOptions} from "./renderer";
import {NativeImage} from "./common";

export function getCurrentWindow() {
  return browserWindow;
}


export function getCurrentWebContents() {
  return webContents;
}


export function initialize() {

}


export function enable(webContents: WebContents) {

}


export const net = {

  request(param: {session: Session; url: string, method?: string}) :ClientRequest {
    return new ClientRequest();
  },
};


export class IpcMainEvent implements Event{
  readonly AT_TARGET: number = 0;
  readonly BUBBLING_PHASE: number = 0;
  readonly CAPTURING_PHASE: number = 0;
  readonly NONE: number= 0;
  readonly bubbles: boolean = false;
  cancelBubble: boolean = false;
  readonly cancelable: boolean = false;
  readonly composed: boolean = false;
  readonly currentTarget: EventTarget | null =  null;
  readonly defaultPrevented: boolean = false;
  readonly eventPhase: number = 0;
  readonly isTrusted: boolean = true;
  returnValue: any = null;
  readonly srcElement: EventTarget | null = null;
  readonly target: EventTarget | null = null;
  readonly timeStamp: DOMHighResTimeStamp = 0;
  readonly type: string = "";
  sender: any;

  composedPath(): EventTarget[] {
    return [];
  }

  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void {
  }

  preventDefault(): void {
  }

  stopImmediatePropagation(): void {
  }

  stopPropagation(): void {
  }

}

export class Item {
  getFilename() {
    return "";
  }

  setSaveDialogOptions(showDialogOptions: SaveDialogOptions) {

  }

  setSavePath(setFilePath?: string) {
    return "./";
  }

  cancel() {

  }

  isPaused() {
    return false;
  }

  removeListener(updated: string, updatedListener: (_event: Event, state: string) => void) {

  }

  on(updated: string, updatedListener: (_event: Event, state: string) => void) {

  }

  once(done: string, param2: (_event: Event, state :string) => Promise<void>) {

  }

  getSavePath(): string {
    return "./";
  }
}

export class WebContents {
  id: number = 1;
  session = {

    once(willDownload: string, param2: (_event: Event, item :Item) => Promise<void>) {

    },
    addWordToSpellCheckerDictionary(misspelledWord: any) {

    },
  };

  // on(willNavigate: string, param2: ((event :any) => void) |
  //         (() => void) |
  //         ((_event: any, title: string) => void) |
  //         ((_event: any, _errorCode: any, errorDescription: any) => void))

  on(willNavigate: string, param2:
        ((title: string | "", _event?: any,  _errorCode?: any, errorDescription?: any) => void))
  {

  }

  send<Channel>(channel: Channel, ...param2: any) {

  }

  sendToFrame<Channel>(frameId: number | [number, number], channel: Channel, ...param3: any) {

  }

  setWindowOpenHandler(param: (details: any) => {action: string}) {

  }

  once(didFrameFinishLoad: string, param2: () => Promise<void>) {

  }

  downloadURL(url: string) {

  }

  getURL() {
    return "http://localhost:3000";
  }

  async insertText(suggestion: string) {

  }

  showDefinitionForSelection() {

  }

  cut() {

  }

  copy() {

  }

  paste() {

  }

  copyImageAt(x: any, y: any) {

  }

  async executeJavaScript(s: string) {
    return undefined;
  }

  fromId(webContentsId: number) {
    return webContents;
  }

  setAudioMuted(b: boolean) {

  }

  addListener(contextMenu1: string, param2: (event :any, menuParameters :any) => void) {

  }

  insertCSS(preloadCss: any) {
    return Promise.resolve(undefined);
  }

  setZoomFactor(zoomFactor: number) {

  }

  openDevTools() {

  }

  canGoBack() {
    return false;
  }

  goBack() {

  }

  canGoForward() {
    return false;
  }

  goForward() {

  }

  reload() {

  }

  async loadURL(href: string) {

  }
}
export const webContents = new WebContents();

export class BrowserWindow {
  webContents: WebContents;
  autoHideMenuBar: boolean = false;
  isPackaged: boolean = false;
  badgeCount: number= 0;
  name = "ruzlip";
  dock = {
    setBadge: (text: string) => {
      console.error("BrowserWindow.dock.setBadge() is not implemented", text);
    },
    bounce: () => {
      console.error("BrowserWindow.dock.bounce() is not implemented");
    }
  };
  constructor(param: {
      minHeight: number;
      webPreferences: {
        sandbox: boolean; webviewTag: boolean; preload: any
      };
      icon: string;
      x: number;
      width: number;
      show: boolean;
      y: number;
      minWidth: number;
      title: string;
      height: number})
  {
    console.error("BrowserWindow{} is not implemented", param);
    this.webContents = new WebContents();
  }

  on(focus: string, param2: ((event :Event) => void) |
                            (() => void) |
                            ((event: Event, webContents: WebContents, url: string) => void) |
                            ((event: Event, webContents: WebContents, urlString: string, error: string) => void) |
                            ((_event: Event, contents: WebContents) => void))
  {
    console.error("BrowserWindow.on() is not implemented", focus, param2);
  }
  isVisible() {
    console.error("BrowserWindow.isVisible() is not implemented");
    return true;
  }

  isMinimized() {
    console.error("BrowserWindow.isMinimized() is not implemented");
    return false;
  }

  show() {
    console.error("BrowserWindow.show() is not implemented");
  }

  hide() {
    console.error("BrowserWindow.hide() is not implemented");
  }



  loadURL(mainUrl: string) {
    console.error("BrowserWindow.loadURL() is not implemented", mainUrl);
    return Promise.resolve(undefined);
  }

  getPath(userData: string) {
    console.error("BrowserWindow.getPath() is not implemented", userData);
    return './';
  }

  quit() {
    console.error("BrowserWindow.quit() is not implemented");
  }

  setTitle(title: string) {
    console.error("BrowserWindow.setTitle() is not implemented", title);
  }

  requestSingleInstanceLock() {
    console.error("BrowserWindow.requestSingleInstanceLock() is not implemented");
    return true;
  }

  async whenReady() {
    console.error("BrowserWindow.whenReady() is not implemented");
    return Promise.resolve(undefined);
  }

  setAppUserModelId(zulipElectron: string) {
    console.error("BrowserWindow.setAppUserModelId() is not implemented", zulipElectron);
  }

  restore() {
    console.error("BrowserWindow.restore() is not implemented");
  }

  getVersion() {
    return "0.0.0";
  }

  setMenuBarVisibility(b: boolean) {
    console.error("BrowserWindow.setMenuBarVisibility() is not implemented", b);
  }

  reload() {
    console.error("BrowserWindow.reload() is not implemented");
  }

  relaunch() {
    console.error("BrowserWindow.relaunch() is not implemented");
  }

  exit() {
    console.error("BrowserWindow.exit() is not implemented");
  }

  setLoginItemSettings(param: {openAsHidden: boolean; openAtLogin: any}) {
    console.error("BrowserWindow.setLoginItemSettings() is not implemented", param);
  }

  setOverlayIcon(param :any, s: string) {
    console.error("BrowserWindow.setOverlayIcon() is not implemented", param, s);
  }

  isFocused() {
    console.error("BrowserWindow.isFocused() is not implemented");
    return true;
  }

  flashFrame(configItem: any) {
    console.error("BrowserWindow.flashFrame() is not implemented", configItem);
  }

  static getAllWindows() {
    console.error("BrowserWindow.getAllWindows() is not implemented");
    return [browserWindow];
  }
}
export const browserWindow = new BrowserWindow({
  title: "ruzlip",
  icon: "",
  x: 0,
  y: 0,
  width: 800,
  minWidth: 800,
  height: 600,
  minHeight: 600,
  show: true,
  webPreferences: {sandbox: true, webviewTag: true, preload: ""},
});
export const remote = {

  getCurrentWindow() {
    return browserWindow;
  },
}

export const app = new BrowserWindow({
  minHeight: 600,
  webPreferences: {sandbox: false, webviewTag: true, preload: ""},
  icon: "",
  x: 0,
  width: 800,
  show: false,
  y: 0,
  minWidth: 800,
  title: "ruzlip",
  height: 600,
});

type MessageBoxOptions1 = { type: string; buttons: string[]; defaultId: number; message: string; }
type MessageBoxOptions2 = {detail: string; message: string, type?: string, buttons?: string[], defaultId?: number, cancelId?: number}
type MessageBoxOptions3 = { message: string; buttons: string[]; };
export const dialog = {
  showErrorBox(certificateError: string, s: string) {

  },
  showMessageBox(param: MessageBoxOptions1 | MessageBoxOptions2 | MessageBoxOptions3) {
    return {response:0}
  },
  showOpenDialog(showDialogOptions: OpenDialogOptions) {
    return {
      filePaths: [],
      canceled: false,
    }
  },
}

export const session = {
  availableSpellCheckerLanguages: [],
  fromPartition(persistWebviewsession: string) {
    return this;
  },
  setUserAgent(s: string) {

  },
  getUserAgent() {
    return "";
  },
  setSpellCheckerLanguages(output: string[]) {

  },
  setSpellCheckerEnabled(enable: boolean) {

  },
  setPermissionRequestHandler(param: (webContents: any, permission: any, callback: any, details: any) => void) {

  },
  setProxy(param: any | {mode: string}) {

  },
}

export const powerMonitor = {
  getSystemIdleState(idleThresholdSeconds: number): "active" | "idle" | "locked" {
    return "active";
  }

}

export class IpcMainInvokeEvent {
}

export const ipcMain: {
  on(
    channel: "forward-message",
    listener: <Channel extends keyof RendererMessage>(
      event: IpcMainEvent,
      channel: Channel,
      ...args: Parameters<RendererMessage[Channel]>
    ) => void,
  ): void;
  on<Channel extends keyof MainMessage>(
    channel: Channel,
    listener: any,
  ): void;
  once<Channel extends keyof MainMessage>(
    channel: Channel,
    listener: any,
  ): void;
  removeListener<Channel extends keyof MainMessage>(
    channel: Channel,
    listener: any,
  ): void;
  removeAllListeners(channel?: keyof MainMessage): void;
  handle<Channel extends keyof MainCall>(
    channel: Channel,
    handler: any,
  ): void;
  handleOnce<Channel extends keyof MainCall>(
    channel: Channel,
    handler: any,
  ): void;
  removeHandler(channel: keyof MainCall): void;
} = {
  on<Channel extends keyof MainMessage>(channel :"forward-message"|Channel, listener: any): void {
  },


  once: function <Channel extends keyof MainMessage>(channel: Channel, listener: any): void {
    console.error("ipcMain.once() is not implemented", channel, listener);
  },
  removeListener: function <Channel extends keyof MainMessage>(channel: Channel, listener: any): void {
    console.error("ipcMain.removeListener() is not implemented", channel, listener);
  },
  removeAllListeners: function(channel?: keyof MainMessage | undefined): void {
    console.error("ipcMain.removeAllListeners() is not implemented", channel);
  },
  handle: function <Channel extends keyof MainCall>(channel: Channel, handler: any): void {
    console.error("ipcMain.handle() is not implemented", channel, handler);
  },
  handleOnce: function <Channel extends keyof MainCall>(channel: Channel, handler: any): void {
    console.error("ipcMain.handleOnce() is not implemented", channel, handler);
  },
  removeHandler: function(channel: keyof MainCall): void {
    console.error("ipcMain.removeHandler() is not implemented", channel);
  }
}

export class HandlerDetails {
  url: URL = new URL("https://localhost:3000");
}

export class SaveDialogOptions {
}

export class Notification {
  title = "";
  body = "";
  silent? = true; // We'll play our own sound - ding.ogg

  constructor({ title, body, silent }: { title: string; body: string, silent?: boolean }) {
    this.title = title;
    this.body = body;
    this.silent = silent;
  }

  on(click: string, param2: () => void) {

  }

  show() {

  }
}

export class Session {
}

export class MenuItemConstructorOptions {
  label? = "";
  accelerator? = "Alt+Z";
  enabled? = true;
  type? = "normal";
  visible? = true;
  role? = "";
  checked? = false;
  submenu?: MenuItemConstructorOptions[] = [];
  click?(_item?: any, focusedWindow?: any): void {
    console.error("MenuItemConstructorOptions.click() is not implemented", _item, focusedWindow);
  }
}

export class Menu {
  static buildFromTemplate(tpl: MenuItemConstructorOptions[]) {
    return new Menu();
  }

  static setApplicationMenu(menu: Menu) {

  }

  popup(p?: {window: BrowserWindow}) {

  }
}

export class IncomingMessage {
  statusCode = 200;
}

export class ClientRequest {
  on(response: string, resolve :any) {

  }

  end() {

  }
}

export class ContextMenuParams {
  selectionText: string = "";
  linkURL: string = "";
  isEditable: boolean = true;
  misspelledWord = [];
  editFlags = {
    canUndo: true,
    canRedo: true,
    canCut: true,
    canCopy: true,
  };
  linkText: string = "";
  mediaType: string = "image";
  x: number = 0;
  y: number = 0;
  srcURL: string = "";
  dictionarySuggestions: string[] = [];
}

export class Tray {
  constructor(s: string) {

  }

  setContextMenu(contextMenu: Menu) {

  }

  on(click: string, param2: () => void) {

  }

  destroy() {

  }

  isDestroyed() {
    return false;
  }

  setImage(s: NativeImage | string) {

  }

  setToolTip(noUnreadMessages: string) {

  }
}
