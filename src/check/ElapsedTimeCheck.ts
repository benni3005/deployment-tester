import * as chalk from "chalk";
import IElapsedTimeResponse from "../http/response/IElapsedTimeResponse";
import ICheck from "./ICheck";

export default class ElapsedTimeCheck implements ICheck {

  public check(response: IElapsedTimeResponse): boolean {
    if (response.elapsedTime < 200) {
      console.log(chalk.green(`  Elapsed time was ${response.elapsedTime}`));
      return true;
    }

    console.log(chalk.red(`  Elapsed time was ${response.elapsedTime}`));
    return false;
  }
}
