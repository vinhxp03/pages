# MDINFO{"header": "[Part 2] So sánh PHP và Javascript","description": "Tản mạn về Array, có gì hay và có gì để nói ...","time": "2020-11-28 10:00 PM"}
# [Part 2] So sánh PHP và Javascript

Tản mạn về Array, có gì hay và có gì để nói ...

### Split an array into chunks

Trong PHP:
```php
$arr = ['a', 'b', 'c', 'd'];

$result = array_chunk($arr, 3);

/** Ouput: $result
Array
(
  [0] => Array
    (
      [0] => a
      [1] => b
      [2] => c
    )

  [1] => Array
    (
      [0] => d
    )
)
*/
```

Trong Javascript:
```js
let arr = ['a', 'b', 'c', 'd']
let length = arr.length

let size = 3,
    index = 0,
    resIndex = 0,
    result = []

while (index < length) {
    result[resIndex++] = arr.slice(index, (index += size))
}

/** Output: result
[ [ 'a', 'b', 'c' ], [ 'd' ] ]
*/
```

### Return the values from a single column in the input array

Trong PHP:
```php
$arr = [
  [
    'id' => 2135,
    'name' => 'John'
  ],
  [
    'id' => 3245,
    'name' => 'Sally'
  ]
];

$result = array_column($arr, 'name');

/** Ouput: $result
Array
(
  [0] => John
  [1] => Sally
)
*/
```

Trong Javascript (Array of object):
```js
let arr = [
  {
    'id': 2135,
    'name': 'John'
  },
  {
    'id': 3245,
    'name': 'Sally'
  }
]

let result = arr.reduce((array, e) => {
  array.push(e['name'])
  return array
}, [])

// OR map: let result = arr.map(e => e['name'])

/** Output: result
[ 'John', 'Sally' ]
*/
```

### Sort multiple or multi-dimensional arrays

Trong PHP:
```php
$arr = [
  [
    'id' => 2135,
    'name' => 'John'
  ],
  [
    'id' => 3245,
    'name' => 'Sally'
  ]
];

array_multisort(array_column($arr, 'name'), SORT_DESC, SORT_REGULAR, $arr);

/** Ouput: $arr
Array
(
  [0] => Array
    (
      [id] => 3245
      [name] => Sally
    )

  [1] => Array
    (
      [id] => 2135
      [name] => John
    )
)
*/
```

Trong Javascript (Array of object):
```js
let arr = [
  {
    'id': 2135,
    'name': 'John'
  },
  {
    'id': 3245,
    'name': 'Sally'
  }
]

arr.sort((a, b) => b.name < a.name ? -1 : (b.name > a.name ? 1 : 0))

/** Output: arr
[ { id: 3245, name: 'Sally' }, { id: 2135, name: 'John' } ]
*/
```