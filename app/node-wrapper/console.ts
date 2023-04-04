export default {}

type Level = "log" | "debug" | "info" | "warn" | "error";
export class Console {
  [index: string]: (...args: unknown[]) => void;

  constructor(fileStream: string) {
    this["log"] = (...args: unknown[]) => console.log(...args);
    this["debug"] = (...args: unknown[]) => console.debug(...args);
    this["info"] = (...args: unknown[]) => console.info(...args);
    this["warn"] = (...args: unknown[]) => console.error(...args);
    this["error"] = (...args: unknown[]) => console.error(...args);
  }

}
