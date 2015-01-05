#functions, we love 'em

## id
This function will return a timestamp.

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