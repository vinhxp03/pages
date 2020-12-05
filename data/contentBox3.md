# MDINFO{"header": "[Part 3] So sánh PHP và Javascript","description": "Tản mạn về String, có gì hay và có gì để nói ...","time": "2020-12-05 10:00 AM"}
# [Part 3] So sánh PHP và Javascript

Tản mạn về String, có gì hay và có gì để nói ...

### Join array elements with a string

Trong PHP:
```php
$fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
$commaSeparated = implode(',', $fruits);
/** Ouput: Banana,Orange,Apple,Mango */
```

Trong Javascript:
```js
let fruits = ['Banana', 'Orange', 'Apple', 'Mango']
let commaSeparated = fruits.join()
/** Output: Banana,Orange,Apple,Mango */
```

### Make a string's first character lowercase/uppercase

Trong PHP:
```php
// Lowercase
$string = 'Hello World';
$result = lcfirst($string);
/** Output: hello World */

// Uppercase
$string = 'hello world';
$result = ucfirst($string);
/** Output: Hello world */
```

Trong Javascript:
```js
// Lowercase
let string = 'Hello World';
let result = string.charAt(0).toLowerCase() + string.slice(1);
/** Output: hello World */

// Uppercase
let string = 'hello world';
let result = string.charAt(0).toUpperCase() + string.slice(1);
/** Output: Hello world */
```

### Strip whitespace (or other characters) of a string

**trim** will strip these characters:

- " " (ASCII 32 (0x20)), an ordinary space.
- "\t" (ASCII 9 (0x09)), a tab.
- "\n" (ASCII 10 (0x0A)), a new line (line feed).
- "\r" (ASCII 13 (0x0D)), a carriage return.
- "\0" (ASCII 0 (0x00)), the NUL-byte.
- "\x0B" (ASCII 11 (0x0B)), a vertical tab.

Trong PHP:
```php
trim ( string $str [, string $character_mask = " \t\n\r\0\x0B" ] ) : string
ltrim ( string $str [, string $character_mask ] ) : string
rtrim ( string $str [, string $character_mask ] ) : string
```

Trong Javascript:
```js
str.trim()
str.trimStart()
str.trimLeft()
str.trimEnd()
str.trimRight()
```

### Find the position of a substring in a string

Trong PHP:
```php
$string = 'Hello world, welcome to the universe';
$result = strpos($string, 'welcome');
/** Output: 13 */
```

Trong Javascript:
```js
let string = 'Hello world, welcome to the universe'
let result = string.indexOf('welcome')
/** Output: 13 */

// Determines whether one string may be found
result = string.includes('welcome')
/** Output: true */
```

### Reverse a string

Trong PHP:
```php
$string = 'Hello world';
$result = strrev($string);
/** Output: dlrow olleH */
```

Trong Javascript:
```js
let string = 'Hello world'
let result = string.split('').reverse().join('')
/** Output: dlrow olleH */

// Using For Loop
let newString = '';
for (let i = string.length - 1; i >= 0; i--) {
  newString += string[i];
}
/** Output: dlrow olleH */

// Using Recursion
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)
}

let result = reverseString('Hello world')
/** Output: dlrow olleH */
```

### Return part of a string

Trong PHP:
```php
// substr ( string $string , int $start [, int $length ] ) : string|false

$string = 'Hello world';
$result = substr($string, 1);
/** Output: ello world */
$result = substr($string, 1, 3);
/** Output: ell */
$result = substr($string, -1);
/** Output: d */
$result = substr($string, -3);
/** Output: rld */
```

Trong Javascript:
```js
// str.substr(start[, length])

let string = 'Hello world'
let result = string.substr(1)
/** Output: ello world */
result = string.substr(1, 3)
/** Output: ell */
result = string.substr(-1)
/** Output: d */
result = string.substr(-3)
/** Output: rld */
result = string.substr(-5, 4)
/** Output: worl */

// Using str.substring(indexStart[, indexEnd])

result = string.substring(1)
/** Output: ello world */
result = string.substring(1, 4)
/** Output: ell */
result = string.substring(string.length - 1)
/** Output: d */
result = string.substring(string.length - 3)
/** Output: rld */
result = string.substring(string.length - 5, string.length - 1)
/** Output: worl */

// Using str.slice(beginIndex[, endIndex])

result = string.slice(1)
/** Output: ello world */
result = string.slice(1, 4)
/** Output: ell */
result = string.slice(-1)
/** Output: d */
result = string.slice(-3)
/** Output: rld */
result = string.slice(-5, -1)
/** Output: worl */
```

### Concatenate Strings
Trong PHP:
```php
$string1 = 'Hello';
$string2 = 'world';
$result = "{$string1} - {$string2}";
/** Output: Hello - world */
```

Trong Javascript:
```js
let string1 = 'Hello';
let string2 = 'world';
let result = `${string1} - ${string2}` 
/** Output: Hello - world */

// Using join
result = [string1, string2].join(' - ')

// Using concat
result = string1.concat(' - ', string2)
```