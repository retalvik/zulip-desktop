export default {
  type: "renderer",
  env: {
    VITE_DEV_SERVER_URL: "http://localhost:3000",
    APPIMAGE: false,
    GDK_BACKEND: "x11" as string | undefined,


  },
  platform: 'linux' as 'win32'|'darwin'|'linux',


  nextTick(param: () => Promise<void>) {

  },
  on(uncaughtException: string, param2: (error :any) => void) {

  },
}
