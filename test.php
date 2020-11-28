<?php

$obj = (object) ["first" => 1, "second" => 2];

print_r(array_keys(get_object_vars($obj)));