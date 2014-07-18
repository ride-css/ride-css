[back](https://github.com/octod/ride-css/)

#grid mixins

##ride-column-grid
this mixin will create a column-count grid
```
// this mixin has not a {block}
// @params
// string class -> the wrapper
// int columnCount -> the number of columns
// string columnClass (default: '.cl') -> the css selector for the columns
// ride-column-grid(class, columnCount, columnClass = '.cl')
example:
// using
ride-column-grid('.my-grid', 6, 'article')
// the output will be like
.my-grid {
  -webkit-column-count: 6;
  -moz-column-count: 6;
  column-count: 6;
}
.my-grid article {
  -webkit-page-break-inside: avoid;
  -moz-page-break-inside: avoid;
  -o-page-break-inside: avoid;
  page-break-inside: avoid;
  margin: 0;
  float: none;
}
```

##ride-grid
this mixin will help you to build your custom css grids.
```
// this mixin has not a {block}
// @params
// [int] columns: the number of columns the grid will have
// [ints] gutter (default: 0): the columns gutter
// [ints] padding (default: 0): the columns padding
// hash config (default: {})
//   string config.column (default: '.cl') -> this is the prefix for each css column
//   string config.scope (default: '') -> this is the scope for the columns
//   string config.float (default: '.float') -> this is the float column class prefix
//   string config.push (default: '.push') -> this is the pushing column class prefix
//   string config.prefix (default: '') -> this will add a prefix to columns, push, floats and row
//   string config.row (default: '.row') -> this is the clearfix container for the columns

example:
// using
ride-grid(6, 0 0 2, 2, {
  column: '.test',
  prefix: 'ride-'
})
// will output
.ride-test1,
.ride-test2,
.ride-test3,
.ride-test4,
.ride-test5,
.ride-test6 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
.ride-test1 {
  width: 12.666666666666668%;
}
.ride-test2 {
  width: 29.333333333333336%;
}
.ride-test3 {
  width: 46%;
}
.ride-test4 {
  width: 62.66666666666667%;
}
.ride-test5 {
  width: 79.33333333333334%;
}
.ride-test6 {
  width: 96%;
}
.ride-float1 {
  margin-left: 12.666666666666668%;
}
.ride-float2 {
  margin-left: 29.333333333333336%;
}
.ride-float3 {
  margin-left: 46%;
}
.ride-float4 {
  margin-left: 62.66666666666667%;
}
.ride-float5 {
  margin-left: 79.33333333333334%;
}
.ride-push1 {
  margin-right: 12.666666666666668%;
}
.ride-push2 {
  margin-right: 29.333333333333336%;
}
.ride-push3 {
  margin-right: 46%;
}
.ride-push4 {
  margin-right: 62.66666666666667%;
}
.ride-push5 {
  margin-right: 79.33333333333334%;
}
.ride-test6 {
  float: none;
}
.ride-row:after,
.ride-row:before {
  clear: both;
  content: '';
  display: table;
}

```

##ride-grid-12
This is the basic Ride css twelve column grid
```
// this mixin has not a {block}
// @params
// int gutter (default: 0 2) -> this is the gutter each column will have 
// int padding (default: 0 2) -> this is the padding each column will have
// hash config (default: {}) -> a config object same as ride-grid's

// example:
// using
ride-grid-12(0 0 2, 2)
// ths output will be like
.cl1,
.cl2,
.cl3,
.cl4,
.cl5,
.cl6,
.cl7,
.cl8,
.cl9,
.cl10,
.cl11,
.cl12 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
.cl1 {
  width: 4.333333333333334%;
}
.cl2 {
  width: 12.666666666666668%;
}
.cl3 {
  width: 21%;
}
.cl4 {
  width: 29.333333333333336%;
}
.cl5 {
  width: 37.66666666666667%;
}
.cl6 {
  width: 46%;
}
.cl7 {
  width: 54.333333333333336%;
}
.cl8 {
  width: 62.66666666666667%;
}
.cl9 {
  width: 71%;
}
.cl10 {
  width: 79.33333333333334%;
}
.cl11 {
  width: 87.66666666666667%;
}
.cl12 {
  width: 96%;
}
.float1 {
  margin-left: 4.333333333333334%;
}
.float2 {
  margin-left: 12.666666666666668%;
}
.float3 {
  margin-left: 21%;
}
.float4 {
  margin-left: 29.333333333333336%;
}
.float5 {
  margin-left: 37.66666666666667%;
}
.float6 {
  margin-left: 46%;
}
.float7 {
  margin-left: 54.333333333333336%;
}
.float8 {
  margin-left: 62.66666666666667%;
}
.float9 {
  margin-left: 71%;
}
.float10 {
  margin-left: 79.33333333333334%;
}
.float11 {
  margin-left: 87.66666666666667%;
}
.push1 {
  margin-right: 4.333333333333334%;
}
.push2 {
  margin-right: 12.666666666666668%;
}
.push3 {
  margin-right: 21%;
}
.push4 {
  margin-right: 29.333333333333336%;
}
.push5 {
  margin-right: 37.66666666666667%;
}
.push6 {
  margin-right: 46%;
}
.push7 {
  margin-right: 54.333333333333336%;
}
.push8 {
  margin-right: 62.66666666666667%;
}
.push9 {
  margin-right: 71%;
}
.push10 {
  margin-right: 79.33333333333334%;
}
.push11 {
  margin-right: 87.66666666666667%;
}
.cl12 {
  float: none;
}
.row:after,
.row:before {
  clear: both;
  content: '';
  display: table;
}

```
#####ride-grid-6
Similar to the (ride-grid-12)[ride-grid-12] mixin, the ride-grid-6 is useful for tablet devices.
```
// this mixin has not a {block}
// @params: are the same of ride-grid-12 mixin

// example:
// using
ride-grid-6(0 0 2, 2)
// ths output will be likebody .sm-cl1,
body .sm-cl2,
body .sm-cl3,
body .sm-cl4,
body .sm-cl5,
body .sm-cl6 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
body .sm-cl1 {
  width: 12.666666666666668%;
}
body .sm-cl2 {
  width: 29.333333333333336%;
}
body .sm-cl3 {
  width: 46%;
}
body .sm-cl4 {
  width: 62.66666666666667%;
}
body .sm-cl5 {
  width: 79.33333333333334%;
}
body .sm-cl6 {
  width: 96%;
}
body .sm-float1 {
  margin-left: 12.666666666666668%;
}
body .sm-float2 {
  margin-left: 29.333333333333336%;
}
body .sm-float3 {
  margin-left: 46%;
}
body .sm-float4 {
  margin-left: 62.66666666666667%;
}
body .sm-float5 {
  margin-left: 79.33333333333334%;
}
body .sm-push1 {
  margin-right: 12.666666666666668%;
}
body .sm-push2 {
  margin-right: 29.333333333333336%;
}
body .sm-push3 {
  margin-right: 46%;
}
body .sm-push4 {
  margin-right: 62.66666666666667%;
}
body .sm-push5 {
  margin-right: 79.33333333333334%;
}
body .sm-cl6 {
  float: none;
}
body .row:after,
body .row:before {
  clear: both;
  content: '';
  display: table;
}

```
#####ride-grid-4
Similar to the (ride-grid-12)[ride-grid-12] mixin, the ride-grid-4 is useful for tablet smaller devices.
```
// this mixin has not a {block}
// @params: are the same of ride-grid-12 mixin

// example:
// using
ride-grid-4(0 0 2, 2)
// ths output will be like
body .smt-cl1,
body .smt-cl2,
body .smt-cl3,
body .smt-cl4 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
body .smt-cl1 {
  width: 21%;
}
body .smt-cl2 {
  width: 46%;
}
body .smt-cl3 {
  width: 71%;
}
body .smt-cl4 {
  width: 96%;
}
body .smt-float1 {
  margin-left: 21%;
}
body .smt-float2 {
  margin-left: 46%;
}
body .smt-float3 {
  margin-left: 71%;
}
body .smt-push1 {
  margin-right: 21%;
}
body .smt-push2 {
  margin-right: 46%;
}
body .smt-push3 {
  margin-right: 71%;
}
body .smt-cl4 {
  float: none;
}
body .row:after,
body .row:before {
  clear: both;
  content: '';
  display: table;
}
```

#grid helpers
##ride-column
this mixin is useful for making fast calculations about a column width
```
// this mixin has not a {block}
// @params
// width width -> the container width
// int columnCount (default: 1) -> the maximum columns of your grid (eg: 8, 12, 16)
// int currentColumn (default: 1) -> current column (eg: 1, 4)
// int/s gutter (default: 0) -> the container gutter
// int/s padding (default: 0) -> the container padding

// example:
// using
.test
  ride-column(100%, 12, 2, 0 2, 1)
// will output
.test {
  margin: 0% 2%;
  padding: 1%;
  width: 10.666666666666668%;
}
```
##ride-float
this mixin is useful for making fast calculations about a column float
```
// this mixin has not a {block}
// @params
// width width -> the container width
// int columnCount (default: 1) -> the maximum columns of your grid (eg: 8, 12, 16)
// int currentColumn (default: 1) -> current column (eg: 1, 4)
// int/s gutter (default: 0) -> the container gutter
// int/s padding (default: 0) -> the container padding
// string floatDirection (default: 'left') -> float direction (left|right)

// example:
// using
.test
  ride-float(100%, 12, 2, 0 2, 1)
// will output
.test {
  margin-left: 12.666666666666668%;
}
```