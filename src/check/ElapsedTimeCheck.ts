import * as chalk from "chalk";
import IHttpResponse from "../http/IHttpResponse";
import ICheck from "./ICheck";

export default class ElapsedTimeCheck implements ICheck {

  public check(response: IHttpResponse): boolean {
    if (response.elapsedTime < 200) {
      console.log(chalk.green(`  Elapsed time was ${response.elapsedTime}`));
      return true;
    }

    console.log(chalk.red(`  Elapsed time was ${response.elapsedTime}`));
    return false;
  }
}
