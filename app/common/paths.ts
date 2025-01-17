import path from "node:path";
import process from "node:process";
import url from "node:url";

export const bundlePath = "http://localhost:3000/app/renderer/js/";

export const publicPath = import.meta.env.DEV
  ? path.join(bundlePath, "../public")
  : bundlePath;

export const bundleUrl = import.meta.env.DEV
  ? process.env.VITE_DEV_SERVER_URL
  : url.pathToFileURL(path.__dirname).href + "/";

export const publicUrl = bundleUrl;
