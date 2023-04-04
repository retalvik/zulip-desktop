export default {
  __dirname: "./",
  join(...args: string[]) {
    return args.join("/");
  },
  resolve(enterpriseFile: string) {
    return "./file.json";
  },
  extname(filePath: string) {
    return "json";
  },
  basename(filePath: string, fileExtension?: string) {
    return "./"
  },
}
