import * as chalk from "chalk";
import * as request from "request-promise-native";
import ElapsedTimeCheck from "./check/ElapsedTimeCheck";
import ICheck from "./check/ICheck";
import StatusCodeCheck from "./check/StatusCodeCheck";
import IHttpResponse from "./http/IHttpResponse";

const checks: ICheck[] = [
  new ElapsedTimeCheck(),
  new StatusCodeCheck(),
];

const uris: string[] = [
  "https://www.google.com/",
  "https://www.npmjs.com/",
  "https://github.com/",
  "https://code2flow.com/app",
  "https://www.myinstants.com/",
  "https://stackoverflow.com/bfesb<y",
  "https://www.gitignore.io/api/phpstorm%2Cnetbeans",
];

function checkResponse(uri: string, response: IHttpResponse) {
  console.log(chalk.bold(uri));

  checks.forEach((check) => {
    check.check(response);
  });
}

uris.forEach((uri) => {

  const options = {
    followRedirect: false,
    method: "GET",
    resolveWithFullResponse: true,
    time: true,
    uri,
  };

  request(options)
    .then((response) => {
      checkResponse(uri, response);
    })
    .catch((error) => {
      checkResponse(uri, error.response);
    });
});
