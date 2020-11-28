<?php

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
print_r($arr);