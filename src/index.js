'use strict';

const chalk = require('chalk');
const request = require('request-promise-native');

const uris = [
  'https://www.google.com/',
  'https://www.npmjs.com/',
  'https://github.com/',
  'https://code2flow.com/app',
  'https://www.myinstants.com/',
  'https://stackoverflow.com/bfesb<y'
];

uris.forEach((uri) => {

  let options = {
    method: 'GET',
    uri: uri,
    resolveWithFullResponse: true,
    time: true
  };

  request(options)
    .then((response) => {
      const elapsedTime = (response.elapsedTime <= 200) ? chalk.bold.green(response.elapsedTime) : chalk.bold.red(response.elapsedTime);
      console.log(chalk`{bgGreen.white  + } %s {dim ::} Status {bold.green %d} {dim ::} %s ms taken`, options.uri, response.statusCode, elapsedTime);
    })
    .catch((error) => {
      const elapsedTime = (error.response.elapsedTime <= 200) ? chalk.bold.green(error.response.elapsedTime) : chalk.bold.red(error.response.elapsedTime);
      console.log(chalk`{bgRed.white  - } %s {dim ::} Status {bold.red %d} {dim ::} %s ms taken`, options.uri, error.statusCode, elapsedTime);
    });
});


