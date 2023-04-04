class HMAC {
  update(key: Uint8Array) {

  }

  digest() {

  }
}

class AES {
  setAuthTag(authTag: void) {

  }

  update(ciphertext: void, undefined: undefined, utf8: string) {

  }

  final(utf8: string): string {
    return "";
  }
}

export default {

  randomBytes(number: number) :Uint8Array {
    return new Uint8Array(number);
  },

  createHmac(sha256: string, clipboardSigKey: Uint8Array): HMAC {
    return new HMAC();
  },

  timingSafeEqual(sig: Uint8Array, digest: void) {
    return true;
  },
  createDecipheriv(aes256Gcm: string, key: Uint8Array, iv: void, param4: {authTagLength: number}): AES {
    return new AES();
  },
}
