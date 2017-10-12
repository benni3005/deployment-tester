import * as chalk from "chalk";
import * as request from "request-promise-native";

interface IResponse {
  readonly statusCode: number;
  readonly elapsedTime: number;
}

function coloredStatusPrefix(response: IResponse): string {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return chalk.bgGreen.white(" + ");
  }
  return chalk.bgRed.white(" - ");
}

function coloredStatusCode(response: IResponse): string {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return chalk.bold.green(response.statusCode.toString());
  }
  return chalk.bold.red(response.statusCode.toString());
}

function coloredResponseTime(response: IResponse): string {
  if (response.elapsedTime < 200) {
    return chalk.bold.green(response.elapsedTime.toString());
  }
  return chalk.bold.red(response.elapsedTime.toString());
}

function log(uri: string, response: IResponse) {
  const dim = chalk.dim("::");
  const statusPrefix = coloredStatusPrefix(response);
  const statusCode = coloredStatusCode(response);
  const responseTime = coloredResponseTime(response);

  console.log(`${statusPrefix} ${uri} ${dim} Status ${statusCode} ${dim} ${responseTime} ms taken`);
}

const uris: string[] = [
  "https://www.google.com/",
  "https://www.npmjs.com/",
  "https://github.com/",
  "https://code2flow.com/app",
  "https://www.myinstants.com/",
  "https://stackoverflow.com/bfesb<y",
  "https://www.gitignore.io/api/phpstorm%2Cnetbeans",
];

uris.forEach((uri) => {

  const options = {
    method: "GET",
    resolveWithFullResponse: true,
    time: true,
    uri,
  };

  request(options)
    .then((response) => {
      log(uri, response);
    })
    .catch((error) => {
      log(uri, error.response);
    });
});
