import * as chalk from "chalk";
import IStatusCodeResponse from "../http/response/IStatusCodeResponse";
import ICheck from "./ICheck";

export default class StatusCodeCheck implements ICheck {

  public check(response: IStatusCodeResponse): boolean {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(chalk.green(`  Status code was ${response.statusCode}`));
      return true;
    }

    console.log(chalk.red(`  Status code was ${response.statusCode}`));
    return false;
  }
}
