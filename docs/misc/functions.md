#functions, because we love them

## starts-with
This function will check if a string starts with some chars.

Basic usage
```
$result = starts-with($string, $char)
```

Mixin parameters:

* **$string** (required, must be a string): the string you are checking
* **$char** (required, must be a string): the char(s) you are testing

## ends-with
This function will check if a string ends with some chars.

Basic usage
```
$result = ends-with($string, $char)
```

Mixin parameters:

* **$string** (required, must be a string): the string you are checking
* **$char** (required, must be a string): the char(s) you are testing

## replace-end
This function will replace some chars at the end of a string

Basic usage

```
$new-string = replace-end($string, $char, $replacement)
```

Mixin parameters:

* **$string** (required, must be a string): the string you are replacing
* **$char** (required, must be a string): the char(s) you are replacing
* **$replacement** (required, must be a string): the replacements chars

## replace-once-end
This function will replace the last at the end of a string

Basic usage

```
$new-string = replace-once-end($string, $char, $replacement)
```

Mixin parameters:

* **$string** (required, must be a string): the string you are replacing
* **$char** (required, must be a string): the char(s) you are replacing
* **$replacement** (required, must be a string): the replacements chars

## replace-start
This function will replace some chars at the beginning of a string

Basic usage

```
$new-string = replace-start($string, $char, $replacement)
```

Mixin parameters:

* **$string** (required, must be a string): the string you are replacing
* **$char** (required, must be a string): the char(s) you are replacing
* **$replacement** (required, must be a string): the replacements chars

## replace-once-start
This function will replace the last char at the beginning of a string

Basic usage

```
$new-string = replace-once-start($string, $char, $replacement)
```

Mixin parameters:

* **$string** (required, must be a string): the string you are replacing
* **$char** (required, must be a string): the char(s) you are replacing
* **$replacement** (required, must be a string): the replacements chars


## log
This function will log a raw stylus object into your terminal, good for debugging stuff.

## parse-int
This function will return an int.

Mixin parameters:

* **$number** (required): the number you wish to parse as an int number

## parse-float
This function will return a float.

Mixin parameters:

* **$number** (required): the number you wish to parse as a float number

## one-percent

This will return the one percent of a number

Mixin parameters:

* **$number** (required): the number you wish to calculate

##set-unit

This mixin will set units to a list of numbers

Mixin parameters:

* **$list** (required): the list of number you wish to add units

##get-percent

This mixin will get the calculated percentage of a number

Mixin parameters:

* **$number** (required): the number

* **$percent** (required): the percentual