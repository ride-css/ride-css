# type checking functions

Sometimes you will find that is really a nice thing to check types before consuming variables.

In stylus there is an operator called `type-of` , in ride-css there are simple functions to perform this task.

### unit checking

Ride-css provides you some strict unit checking functions. You can use them to check wut kind of unit your variable is.

They work all the same (give a look at the example)

```sass
my-mixin($variable)
  if is-perc($variable)
    // do something
  else
    // do something else!
```

###### is-ch

this function will check if your variable is a **ch**.

###### is-degrees

this function will check if your variable are **degrees**.

this function is also aliased to *is-deg* and *isDegrees*.

Obviously, since degrees is a plural noun, the function is also aliased to *are-deg*, *are-degrees* and *areDegrees*

###### is-em

this function will check if your variable is a **em**.

###### is-ex

this function will check if your variable is a **ex**.

###### is-milliseconds

this function will check if your variable are **milliseconds**.

this function is also aliased to *is-ms* and *isMilliseconds*.

Obviously, since milliseconds is a plural noun, the function is also aliased to *are-ms*, *are-milliseconds* and *areMilliseconds*

###### is-percentage

this function will check if your variable is a **percentage**.

this function is also aliased to *is-perc* and *isPercentage*.

###### is-pixel

this function will check if your variable is a **pixel**.

this function is also aliased to *is-px* and *isPixel*.

###### is-point

this function will check if your variable is a **point**.

this function is also aliased to *is-pt* and *isPoint*.

###### is-rem

this function will check if your variable is a **rem**.

###### is-seconds

this function will check if your variable are **seconds**.

this function is also aliased to *is-s* and *isSeconds*.

Obviously, since seconds is a plural noun, the function is also aliased to *are-s*, *are-seconds* and *areSeconds*

###### is-vmax

this function will check if your variable is a **vmax**.

###### is-vmin

this function will check if your variable is a **vmin**.

###### is-vh

this function will check if your variable is a **vh**.

###### is-vw

this function will check if your variable is a **vw**.

### strict type checking

these functions will check stylus types

##### is-boolean

return true if the passed variable is a boolean

this function is aliased to *is-bool*

##### is-function

return true if the passed variable is a function

##### is-ident

return true if the passed variable is an ident

##### is-number

return true if the passed variable is a number

##### is-string

return true if the passed variable is a string
