import {BrowserWindow} from "./main";

export default function windowStateKeeper(p: {path: string; defaultHeight: number; defaultWidth: number}) :WindowState {
  return {
    unmanage(): void {
    },
    x: 0,
    y: 0,
    width: p.defaultWidth,
    height: p.defaultHeight,
    saveState() {
    },
    track(win: any) {
    },
    path: p.path,
    manage(win: BrowserWindow) {}
  }
}

export type WindowState = {
  path : string;
  x: number;
  y: number;
  width: number;
  height: number;
  saveState() :void;
  track(win: any) :void;
  manage(win: BrowserWindow): void;
  unmanage(): void;
}
