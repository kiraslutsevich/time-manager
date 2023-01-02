export type ResponseType<P = null, M extends object = Record<string, never>> = {
  message: string;
  payload: P;
  meta: M;
};

enum ErrorTypeENUM {
  validation = 'validation',
  notAcceptable = 'notAcceptable',
  authorization = 'authorization',
  access = 'access',
  notFound = 'notFound',
  internal = 'internal',
}

export type ErrorResponseType<D = null> = {
  type: ErrorTypeENUM;
  statusCode: number;
  code: string;
  data: D;
};
