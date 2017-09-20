# Page Checker

**This is under development and some kind of testing stage for experimenting with Node. Don't use it right now!**

In the end it should become a small, but powerful library for checking pages of a website for certain things like:

* HTTP status code
* Response time
* Matching selectors
* Matching strings
* Sent XHR request
* …

Its main purpose for myself will be to use it in an automated deployment pipeline. When certain things after a
deployment don't work anymore this can let the pipeline fail and the chance for finding a bug is far greater than when
it is discovered some time later (as no one can tell anymore when it happened for the first time).

Of course this tool won't make us better developers, that don't write buggy code anymore, but at least some basic things
can be avoided in the future with this tool. At least I hope so.
