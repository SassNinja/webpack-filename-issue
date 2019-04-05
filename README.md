# webpack filename issue

This repo is supposed to provide an example webpack setup to demonnstrate an issue when `output.filename` is a function.
The expected behavior is no difference compared to `output.filename` being a string.

Check it out by running

- `npm install`
- `node webpack --production`

Related issue [9007](https://github.com/webpack/webpack/issues/9007)