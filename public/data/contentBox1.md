# MDINFO{"header": "[Part 1] So sánh PHP và Javascript","description": "Tản mạn về Object","time": "2020-11-23 10:00 AM"}
# [Part 1] So sánh PHP và Javascript

Tản mạn về Object

### Khởi tạo

Trong PHP:
```php
$obj = (object) [];
// or $obj = new stdClass();

$obj->first = 1;
$obj->second = 2;

/** Ouput: $obj
stdClass Object
(
    [first] => 1
    [second] => 2
)
*/
```

Trong Javascript:
```js
let obj = {}

obj.first = 1
obj.second = 2

/** Output: obj
{first: 1, second: 2}
*/
```

### Merge

Trong PHP:
```php
$a = (object) ["first" => 1, "second" => 2];
$b = (object) ["third" => 3, "fourth" => 4, "second" => 0];

$result = (object) array_merge((array) $a, (array) $b);

/** Ouput: $result
stdClass Object
(
    [first] => 1
    [second] => 0
    [third] => 3
    [fourth] => 4
)
*/
```

Trong Javascript:
```js
let a = {"first": 1, "second": 2}
let b = {"third": 1, "fourth": 2, "second": 0}

// ES5
let result = Object.assign(a, b)

/** Output: 
** a
{first: 1, second: 0, third: 1, fourth: 2}

** result
{first: 1, second: 0, third: 1, fourth: 2}
*/

// ES6
let result = {...a, ...b}

/** Output: 
** a
{"first": 1, "second": 2}

** result
{first: 1, second: 0, third: 1, fourth: 2}
*/
```