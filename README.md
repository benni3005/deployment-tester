# URL Checker

**This is under development and some kind of testing stage for experimenting with Node. Don't use it right now!**

## Ideas

In the end it should become a small, but powerful library for checking URLs for certain things like:

* HTTP status code
* Response time
* Content type
* Matching selectors
* Matching strings
* …

Besides the checks some other features should be available, too:

* Automatic configuration by using a YAML file in the project root, e.g. `.url-checker.yml`.
* Throttling requests, so they won't get fired at nearly the same time (for slower servers).
* Configuration of various environments having different base URIs.

## Why develop this package?

Its main purpose for myself will be to use it in an automated deployment pipeline. When certain things after a
deployment don't work anymore this can let the pipeline fail and the chance for finding a bug is far greater than when
it is discovered some time later (as no one can tell anymore when it happened for the first time).

Of course this tool won't make us better developers, that don't write buggy code anymore, but at least some basic things
can be avoided in the future with this tool. At least I hope so.

## Development

1. Fork this repository.
2. Execute `npm install` or `yarn install`, whatever suits you best.
3. Ensure the gulp CLI is globally installed (`npm install -g gulp-cli`).
4. Run `gulp` to test and compile the project or run `gulp watch` to automatically do that when changing things.
5. Send pull requests :wink:

## License

url-checker is licensed under the [ISC license](https://opensource.org/licenses/ISC).
