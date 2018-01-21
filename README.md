# Polyfill Loading Utility

For too long have we bundled polyfills into our production code, catering only to the 1%.

Why should the humble Chrome, or Firefox user suffer the injustice of an aditional 50kb?

This is a solution that rewards excelence.

Users who maintain their machines will shave *ms* off their load times, because this utility tested their environment, and only polyfilled what needed to be polyfilled.

Really though, this is a client side utility that is built on top of polyfill.io
PRs are welcome as I have been expanding the polyfills list as I require them.

## Usage

    polyfills.load([...list_of_polyfills], callback, error)

### Within Webpack and Babel
![https://i.imgur.com/pWYRIhw.png](https://i.imgur.com/pWYRIhw.png)


### Within normal browser environment
![https://i.imgur.com/nirX9IV.png](https://i.imgur.com/nirX9IV.png)

Seems to work all the way down to IE9
Feel free to suggest any adjustments to improve compatibility
