export type Response<T> = {
  resultObj: T;
  statusCode: number;
  message: string;
};
