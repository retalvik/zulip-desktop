//TODO retalvik: restore backoff dep
export class Backoff {
  initialDelay = 5000;
  maxDelay = 300_000;
  backoff(): void {

  }
  on(ready: string, param2: () => Promise<void>): void {

  }

  reset() {

  }
}

export function fibonacci(param: {initialDelay :number, maxDelay:number}): Backoff {
  return new Backoff();
}
