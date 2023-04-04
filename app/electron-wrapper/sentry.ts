export function init(param: {beforeSend: (event? :string) => string | null | undefined; ignoreErrors: string[]; dsn: string} | {} ) {

}

export function captureException(error :any) {
  console.error("Sentry.captureException() is not implemented yet.", error);
};
