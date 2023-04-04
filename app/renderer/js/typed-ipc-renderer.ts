import type {
  MainCall,
  MainMessage,
  RendererMessage,
} from "../../common/typed-ipc.js";

type RendererListener<Channel extends keyof RendererMessage> =
  RendererMessage[Channel] extends (...args: infer Args) => void
    ? (event: Event, ...args: Args) => void
    : never;

class IpcRender {
  invoke<Channel extends keyof MainCall>(
    channel: Channel,
    ...args: Parameters<MainCall[Channel]>
  ): ReturnType<MainCall[Channel]> {
    console.error("IpcRender.invoke() Not implemented", channel.toString(), ...args);
    throw new Error("IpcRender.invoke() Not implemented" + channel.toString());
  }

  send<Channel extends keyof MainMessage>(
    channel: Channel,
    ...args: any
  ): void {
    console.error("IpcRender.send() Not implemented", channel.toString(), ...args);
  }

  on<Channel extends keyof RendererMessage>(
    channel: Channel,
    listener: RendererListener<Channel>,
  ): void {

    console.error("IpcRender.on() Not implemented", channel.toString());
  }

  removeListener<Channel extends keyof RendererMessage>(
    channel: Channel,
    listener: RendererListener<Channel>,
  ): void {
    console.error("IpcRender.removeListener() Not implemented", channel.toString(), listener);
  }

  removeAllListeners<Channel extends keyof RendererMessage>(
    channel: Channel,
  ): void {
    console.error("IpcRender.removeAllListeners() Not implemented", channel.toString());
  }
  //TS2345: Argument of type '(_event: Event, state: boolean) => void' is not assignable to parameter of type '(elementName: string, state?: boolean | undefined) => void'.

  off<Channel extends keyof RendererMessage>(toggleSidebar: string, handleToggle:
    ((elementName: string, state?: boolean) => void) |
    ((_event: Event, state: boolean) => void) |
    ((_event: Event, _state: boolean, newSettings: any) => void))
  {
    console.error("IpcRender.off() Not implemented", toggleSidebar, handleToggle);
  }

  sendSync(param: string): any {
    console.error("IpcRender.sendSync() Not implemented", param);
    return { };
  }

  sendTo<Channel extends keyof RendererMessage>(id: number, channel: Channel, ...param3: any) {
    console.error("IpcRender.sendTo() Not implemented", id, channel, param3);
  }
}
export const ipcRenderer = new IpcRender();
