import * as chalk from 'chalk';
import * as request from 'request-promise-native';

interface iResponse {
  readonly statusCode: number;
  readonly elapsedTime: number;
}

function coloredStatusPrefix(response: iResponse): string {
  return (response.statusCode >= 200 && response.statusCode < 300) ? chalk.bgGreen.white(' + ') : chalk.bgRed.white(' - ');
}

function coloredStatusCode(response: iResponse): string {
  return (response.statusCode >= 200 && response.statusCode < 300) ? chalk.bold.green(response.statusCode.toString()) : chalk.bold.red(response.statusCode.toString());
}

function coloredResponseTime(response: iResponse): string {
  return (response.elapsedTime <= 200) ? chalk.bold.green(response.elapsedTime.toString()) : chalk.bold.red(response.elapsedTime.toString());
}

function log(uri: string, response: iResponse) {
  const statusPrefix = coloredStatusPrefix(response);
  const statusCode = coloredStatusCode(response);
  const responseTime = coloredResponseTime(response);

  console.log(`${statusPrefix} ${uri} ${chalk.dim('::')} Status ${statusCode} ${chalk.dim('::')} ${responseTime} ms taken`);
}

const uris: string[] = [
  'https://www.google.com/',
  'https://www.npmjs.com/',
  'https://github.com/',
  'https://code2flow.com/app',
  'https://www.myinstants.com/',
  'https://stackoverflow.com/bfesb<y'
];

uris.forEach(uri => {

  const options = {
    method: 'GET',
    uri: uri,
    resolveWithFullResponse: true,
    time: true
  };

  request(options)
    .then(response => {
      log(uri, response);
    })
    .catch(error => {
      log(uri, error.response);
    });
});
