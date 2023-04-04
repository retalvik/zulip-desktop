
const domains :unknown[] = [
  {
    "icon": "../renderer/img/icon.png",
    "url": "https://chat.zulip.org",
    "alias": "Zulip Community"
  },
  {
    "icon": "../renderer/img/icon.png",
    "url": "https://mopidy.zulipchat.com",
    "alias": "Mopidy"
  },
]
export class JsonDB {
  constructor(settingsJsonPath: string, b: boolean, b2: boolean) {

  }

  reload() {
    console.warn("JsonDB.reload() do nothing");
  }
  getObject<T>(s: string) {
    console.error("JsonDB.getObject() not implemented", s);
    switch (s) {
      case "/appLanguage":
        return "en" as unknown as T;
      case "/domains":
        return domains as unknown as T;
      case "/domains[0]":
        return domains[0] as unknown as T;
      case "/domains[1]":
        return domains[1] as unknown as T;
      case "/lastActiveTab":
        return 0 as unknown as T;
      case "/dndPreviousSettings":
        return {
          "showNotification": true,
          "silent": false
        } as unknown as T;
      default:
        return true as unknown as T;
    }

  }

  exists(s: string) {
    return false;
  }

  push(s: string, value: any, b: boolean) {

  }

  save() {

  }

  delete(s: string) {
    console.error("JsonDB.delete() not implemented", s);
  }
}

export class DataError implements Error{
  message: string="";
  name: string="";
}
