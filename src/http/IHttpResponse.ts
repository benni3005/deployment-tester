import IElapsedTimeResponse from "./response/IElapsedTimeResponse";
import IStatusCodeResponse from "./response/IStatusCodeResponse";

export default interface IHttpResponse extends IElapsedTimeResponse, IStatusCodeResponse {
}
