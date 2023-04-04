export const shell = {

  openExternal(href: string) {

  },
  openPath(file: any) {

  },
  showItemInFolder(filePath: string) {

  },
}

export class clipboard {
  static readText() {
    return "";
  }

  static write(param: {bookmark: any; text: string}) {

  }

  static writeText(url: string) {

  }
}

export class Image {
}

export const nativeImage = {
  createFromDataURL(data: string): NativeImage {
    return new NativeImage();
  },
  createFromPath(s: string): NativeImage {
    return new NativeImage();
  },
  createFromBuffer(pngData: void, param2: {scaleFactor: number}): NativeImage {
    return new NativeImage();
  },
}

export class NativeImage {
  toPNG() {

  }
}
