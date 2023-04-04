import {MainCall, MainMessage, RendererMessage} from "../common/typed-ipc";
import {DndSettings} from "../common/dnd-util";
import {MenuItemConstructorOptions as MainMenuItem, ContextMenuParams as MainContextMenu} from "./main";


export const contextBridge = {
  exposeInMainWorld: (name: string, obj: any) => {
  }
};
export const webFrame = {
  setZoomFactor: (factor: number) => {

  },
  executeJavaScript<Channel extends keyof MainMessage>(s: ReturnType<MainMessage[Channel]>) {
    return Promise.resolve(undefined);
  },
};

export class OpenDialogOptions {

}

export class MenuItemConstructorOptions extends MainMenuItem{}
export class ContextMenuParams extends MainContextMenu {}
