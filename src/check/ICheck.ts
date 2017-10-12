import IHttpResponse from "../http/IHttpResponse";

export default interface ICheck {
  check(response: IHttpResponse): boolean;
}
