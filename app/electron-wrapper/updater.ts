export default {

}

export class UpdateDownloadedEvent {
  version = "0.0.0";
}

export class UpdateInfo {
  version = "0.0.0";
}

export const autoUpdater = {
  logger: {
    transports: {
      file: {
        fileName: "",
        level: "info",
      }
    }
  }, allowPrerelease: false,

  removeAllListeners(event?: string) {

  },
  on(updateNotAvailable: string, param2:any) {

  },
  quitAndInstall() {

  },
  async checkForUpdates() {

  },
}
