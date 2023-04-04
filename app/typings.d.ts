declare namespace NodeJS {
  export class ReadableStream {

  }

  export type Timeout = number | undefined;
}

declare namespace Electron {
  // https://github.com/electron/typescript-definitions/issues/170
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface IncomingMessage extends NodeJS.ReadableStream {}

  export class WebviewTag extends Element{
      getWebContentsId(): number;
  }
}

// declare module "zulip:remote" {
//   export const {
//     app,
//     dialog,
//   }: typeof import("electron/main") | typeof import("@electron/remote");
// }
