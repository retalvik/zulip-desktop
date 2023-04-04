export default {
  promises: {
    async readFile(file: string, param2: string): Promise<string>{
      return Promise.resolve("");
    },
    async writeFile(file: string, toWrite: string) {

    },
    rmdir(getAppPath: string, param2: {recursive: boolean}) {

    },
  },
  createWriteStream(file: string, param2?: {flags: string}): string{
    return "";
  },
  readFileSync(settingsJsonPath: string, utf8: string): string {
    console.error("readFileSync", settingsJsonPath, utf8)
    if (settingsJsonPath.indexOf("icon") > -1) {
      return `iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsSAAALEgHS3X78AAAG
IUlEQVRogc2aa2xURRTHf2fu3S3divVRSASiKEmNxRiQgiQaJUaiHwgoUlRQrCZ+MILPUFMfkKrY
RIJW0RiUKFYpEdT4KL4StZ8UwdiCkahBg6bKh4JoS7fd7u4cP2zfa7tzu7foP5lsu3vOmf+598zM
mTkjhIClb+s0qyxAmYdhJsp0hElArFckjtImwmFVDmLZazy+eOd6ac23bxmr4qIGLYn4rEJYAcwG
TEATFmhGaUimqG9cIUfHwiOwA4t36BTP5yGU22TgCecFhbgo23qEJxuXy+9BdJ0dKNup0QssaxGq
FYqC03Qi04lSawwbdy2XHked3FjyhpZFfLarMis/im4QoSWZYuV7N8vBnLK5BJZt16UI24CJYZAL
gBMYbn3rRnlnNKFRHajYrqsR6lC8cLk5QkiL5Z6dN8sLI4uMgIrXdTWiz0keM1UYUEQF1ozkxL+S
u6E+tRRjdv5nT344hDTWLn9zlZ8VTlkOVLySKDN+ZA8nP+ZzocOmZP6u24cO7CEOVKzXqH+ufq1y
cmaboBBoSRXKJYOnWH+wgH8ua4FZormNFUag/GwoLsyP1N9d8M1v0JV0Ep/lxW0V8ETfF/1voOJF
nRop0J9wWF3PKobqq+HMonDG97FOpfYTOPK3k3g8mZDSXXdmVuz+/CUatQ+JEhOFXO2OS8MjDxlb
d1yau9/eFotGqe7TNQA3bdESUal0MXB6IZRODo17P0onZ2w7OYFW3rRFS/od8MSuQomhkKsVRUAk
/KVBRCiK5O4fBSxFnthV/Q4YZIXj66OtHbp6HEZ5QMR7lLZ25zDCICsAZOXLOs23+qsGyOcXz4br
54b7Ft7ep7zf7C4vYFNGzvG9NAsAE4RO47dgrXLVhXDKBJAA2YZnYHAEqsLH+5XGbwPnLMZLs8AX
tZcEIdCHD5szzTOQCczcEGDDDTC5ONOfVeXNL+HT7wZ+DwIR5vlGTRk69pi21l12zowB8smUsvVz
2Hcoj2xRdKYvqtPz4O8MI7CkPPN3PKE8/xH8EGjzmA2B6b4okxwjwBlRHy4rg88PDHw3ZwZMPUM4
fkKp+wBaj4WSp0/ysYS4pkKsAFYvgs/2Z6Y7yAzaReVw5E/l2Q/gWEdom4yYLyHGzxkT4e7Fgio0
H9J+B+bMgO6E8EKj0pkId4fki9JJCLn/1JIM+dMnClt2W7ADRItjUPeukkyFvL1T4r4obeTpQOk0
uHOREJsg/H5UaT40ED4ATS2Zz3HYm7b5onJY0fPGaqG8FCqvFiJ+ht7uPYoGmFrzgSCHfVS/F+XK
sRi48mJYdoVgetfxtr+UAz+D7/qoFawy9mVI9HvfWLNXCfbIRODay4WF5UMz05JiqFsdLFBOdEFT
s/Lp3uCOqOpeP2lpigiWAMncNfNhYbkwPKsWEfyA5xinnQJLLhM8sXz0VSBVm1KvyWx9UFpFtdk1
jY14sHBuNvl8IAJXzRUinns6LarNWx+U1kwqptLgqlhyKhQWhD+fFBYIJae6O6AqDdAbNukuU48S
d9kNdXeDjkPypKp0d+fuv7fF012mvt+Bl2rkqFFedfG8vQN+ybuuko1fWjO2nXZjyqsv1WQKIv0D
N2kTtaJ0uhjYsVs53h7eWzjeruzYra7h05m0ido+3SHBfPfj6YcZdGg0GiYUwEXnw8Q8Sx0dnXDg
R+hOOKs88tyj3oa+f4aczB1JmY1TfLsMh0JGohv27Q/EdVQ4TQtCyx8ps3FUvTXrE2We5+9B/2eH
u0JHOp2av7mmYMjhbtbitbmm4KCouVUg7TgjjHsTSJPWyuHkM36NgHvXpe8SdHOgI4fxgKKKrKl7
zHMvcPTh/nU9d4F5Fv6zQkca5J6nRyAPDmPnvnWp64zyGie/4NGBUrnpieyqzGA4hUfVI3qBxW4H
nR0Ot1yQFk2nVm6qzY75LElXkxXrNXpO0q4V0Wp0fArdQKeitb9G/I27akIsdA9GVZVOwbPVoLdp
SBV7EeLAtqT0PPnMhtj4XDUYjgceaC8xBUW3GGtXgszWgJc9RHoveyANqR5Tv2nTSbrs8W+oqopP
E4kuAOYBM4HpMOy6DbQhHFY4KMrXql7TU0/lf93mH2/p6zaHR90RAAAAAElFTkSuQmCC`;
    }
    return "{}";
  },
  existsSync(settingsJsonPath: string) {
    return true;
  },
  unlinkSync(settingsJsonPath: string) {

  },
  mkdirSync(zulipDir: string) {

  },
  copyFileSync(path: string, s: string) {

  },
  mkdtempSync(s: string) : string {
    return "/tmp/ruzlip";

  },
  writeFileSync(file: string, html: string) {

  },
  rmdirSync(dir: string) {

  },
}
