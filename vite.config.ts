/* eslint-disable @typescript-eslint/naming-convention */

import {defineConfig} from "vite";

export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
  },
  root: "app",

  resolve: {
    alias: {

      fs: "./node-wrapper/fs.ts",
      path: "./node-wrapper/path.ts",
      os: "./node-wrapper/os.ts",
      process: "./node-wrapper/null.ts",
      "node:console": "./node-wrapper/console.ts",
      "node:fs": "./node-wrapper/fs.ts",
      "node:os": "./node-wrapper/os.ts",
      "node:path": "./node-wrapper/path.ts",
      "node:process": "./node-wrapper/process.ts",
      "node:stream": "./node-wrapper/stream.ts",
      "node:util": "./node-wrapper/util.ts",
      "node:events": "./node-wrapper/events.ts",
      "node:buffer": "./node-wrapper/buffer.ts",
      "node:crypto": "./node-wrapper/crypto.ts",
      "node:url": "./node-wrapper/url.ts",
      "node-json-db/dist/lib/Errors": "./node-wrapper/json-db.ts",
      "node-json-db": "./node-wrapper/json-db.ts",
      "i18n": "./node-wrapper/i18n.ts",

      "electron/common": "./electron-wrapper/common.ts",
      "electron/main": "./electron-wrapper/main.ts",
      "electron/renderer": "./electron-wrapper/renderer.ts",
      "electron-window-state": "./electron-wrapper/window-state.ts",
      "electron-updater": "./electron-wrapper/updater.ts",
      "electron-log": "./electron-wrapper/log.ts",
      "events": "./electron-wrapper/events.ts",
      "@electron/remote": "./electron-wrapper/main.ts",
      "@electron/remote/main": "./electron-wrapper/main.ts",
      "@sentry/electron": "./electron-wrapper/sentry.ts",
      "@sentry/electron/main": "./electron-wrapper/sentry.ts",
      "zulip:remote": "./electron-wrapper/main.ts",

      "adm-zip": "./node-wrapper/adm-zip.ts",
      "backoff": "./node-wrapper/backoff.ts",
    }
  },
});
