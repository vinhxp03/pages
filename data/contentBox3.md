# MDINFO{"header": "Live demo","description": "Changes are automatically rendered as you type","time": "2020/11/01 12:00 PM"}
# Live demo
---

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the **HTML**, no `dangerouslySetInnerHTML` is used! Yay!

## Table of Contents

## HTML block below

> This blockquote will change based on the HTML settings above.

## How about some code?

```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

```js
// JS
function writeMsg($name = 'Vinh') {
  echo "Hello world! " . $name;
}

writeMsg();
```

```php
// PHP
function writeMsg($name = 'Vinh') {
  echo "Hello world! " . $name;
}

writeMsg();
```

Pretty neat, eh?

## Tables?

| Feature   | Support |
| :-------: | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](https://github.com/remarkjs/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
