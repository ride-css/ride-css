# typography in ride-css

Typography is maybe one of the hardest things to manage while building a website or a webapplication.

Ride-css offers you some help with this task.

## heading and headings

### heading mixin

This mixin seems quite complicated, but it's not really such a pain to use it.

You will be able to render a title-like text without getting worried too much about maths calculations.

```sass
heading($number, $font-size, $line-height, $font-multiplier, $factor-modifier)
```

The parameters accepted by this mixin are

* $number : is the heading number (from 1 to 6). The lower is the number, the bigger will be your title!

* $font-size : this parameter should be the basic font-size you use for your website. *Default 1rem*

* $line-height : the line height your heading will have. *Default to 1.1*

* $font-multiplier : this number is used to calculate the h1 font-size. *Default to 2*

* $factor-modifier : this number will be used to calculate headings from h2 to h3. *Default to 20*. Note that the higher is this number, the smaller will be each heading from h2 to h6.

> Font size for h2 to h6 is calculated using this formula
> $font-size * $font-multiplier * (1 - ($number / $factor-modifier))

Maybe an example is better rather than the stuff written above.

```sass
h1
  heading: 1, 14px, 1.2

h2
  heading: 2, 14px, 1.2
```

Once built you will get

```css
h1 {
  font-size: 28px;
  line-height: 1.2;
  margin: 0;
}
h2 {
  font-size: 25.2px;
  line-height: 1.2;
  margin: 0 0 3.360000000000001px;
}
```

**Wait, what is the margin for? I didn't put it anywhere!**

Some margin will be added to headings from **2** to **6** in order to respect the vertical rhythm. This will be automatically calculated.

Obviously you can use the **heading** mixin into every css selector.

### headings mixin

```sass
headings($font-size[default: false], $placeholder[default: false])
```

This mixin is double-faced. Without giving any param to it, this will automatically select headings from h1 to h6.

Giving it a $font-size parameter, this mixin will calculate headings from h1 to h6 automatically.

Giving it both a $font-size and setting $placeholder to true, this mixin will render a set of placeholders from $h1 to $h6.

*First case example*

```sass
+headings()
  color: #aaa
```

Will be rendered like

```css
h1, h2, h3, h4, h5, h6 {
  color: #aaa;
}
```

*Second case example*

```sass
.test
  headings: 14px
```

will yeld

```css
.test h1 {
  font-size: 28px;
  line-height: 1.1;
  margin: 0;
}
.test h2 {
  font-size: 25.2px;
  line-height: 1.1;
  margin: 0 0 3.080000000000001px;
}
.test h3 {
  font-size: 23.8px;
  line-height: 1.1;
  margin: 0 0 4.619999999999999px;
}
.test h4 {
  font-size: 22.400000000000002px;
  line-height: 1.1;
  margin: 0 0 6.159999999999998px;
}
.test h5 {
  font-size: 21px;
  line-height: 1.1;
  margin: 0 0 7.700000000000001px;
}
.test h6 {
  font-size: 19.599999999999998px;
  line-height: 1.1;
  margin: 0 0 9.240000000000004px;
}
```

*Third case*

```sass
headings(14px, true)

.lead
  @extend $h1
.lead-small
  @extend $h3
```

```css
.lead {
  font-size: 28px;
  line-height: 1.1;
  margin: 0;
}
.lead-small {
  font-size: 23.8px;
  line-height: 1.1;
  margin: 0 0 4.619999999999999px;
}
```

## links

A nice way to style links with a single line of code! You will have just to give this mixin a colour, and everything will be calculated automatically!

```sass
a
  links: #bbb
```

```css
a {
  text-decoration: none;
}
a {
  color: #bbb;
}
a:hover {
  color: #949494;
}
a:active {
  color: #7f7f7f;
}
a:visited {
  color: #585858;
}
```

**WAIT! I want to set the text decoration manually!**

You will have to set a text-decoration before calling the mixin

```sass
a
  text-decoration: underline
  links: #bbb
```

```css
a {
  text-decoration: underline;
  color: #bbb;
}
a:hover {
  color: #949494;
}
a:active {
  color: #7f7f7f;
}
a:visited {
  color: #585858;
}
```

**what about getting darker or brighter colours?**

You can specify a second parameter. This is a percentage of how much the colour will be lightened or darkened.

```sass
a
  text-decoration: underline
  links: #bbb, 12%
```

```css
a {
  text-decoration: underline;
  color: #bbb;
}
a:hover {
  color: #a5a5a5;
}
a:active {
  color: #909090;
}
a:visited {
  color: #696969;
}
```

You have to bear in mind that the percentage will be modified by each pseudo-class selector.

| Status  | Percentage        |
|:-------:|:-----------------:|
| :hover  | $percentage + 0%  |
| :active | $percentage + 11% |
| :visited| $percentage + 32% |

## paragraph

In ride-css you can calculate paragraphs vertical rhythm very quickly using the **paragraph** mixin.

This mixin requires two paramenters: $font-size and $line-height

```sass
p
  // paragraph: $font-size, $line-height
  paragraph: 14px, 20.5px
```

```css
p {
  font-size: 14px;
  line-height: 0.682926829268293;
  margin: 0 0 4.78048780487805px;
}
```

You will get margin automatically calculated like to **heading** mixin.

*note*

If your css rule has a margin property set, the mixin calculated margin will be discarded in favour of your margin.

## small elements (or small text)

This mixin allows you to calculate ```&lt;small&gt;``` tags. Or you can simply use it into a css class to calculate small portions of text.

```sass
small
  // note that this parameters are optional.
  // small: $font-size = 1rem, $percentage = 62.5%
  small: 14px
.small
  small()
```

```css
small {
  font-size: 8.75px;
}
.small {
  font-size: 0.625rem;
}
```

## typography scaffolding: AKA I'm laaaaazy

Ride-css comes with a typography scaffolding system.

This mixin will automatically calculate these elements:

* headings (from h1 to h6)

* paragraphs

* small tags

A brief example:

```sass
scaffolding-typography()
```

will yeld

```css
h1 {
  font-size: 2rem;
  line-height: 1.1;
  margin: 0;
}
h2 {
  font-size: 1.8rem;
  line-height: 1.1;
  margin: 0 0 0.22rem;
}
h3 {
  font-size: 1.7rem;
  line-height: 1.1;
  margin: 0 0 0.33rem;
}
h4 {
  font-size: 1.6rem;
  line-height: 1.1;
  margin: 0 0 0.44rem;
}
h5 {
  font-size: 1.5rem;
  line-height: 1.1;
  margin: 0 0 0.55rem;
}
h6 {
  font-size: 1.4rem;
  line-height: 1.1;
  margin: 0 0 0.66rem;
}
p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 0.75rem;
}
small {
  font-size: 0.625rem;
}
```

**overriding default parameters**

Available parameters are quite the same as the mixins above.

* $font-size (default: 1rem)

* $line-height (default: 1.5)

using

```sass
scaffolding-typography(14px, 1.5)
```

you will get

```css
h1 {
  font-size: 28px;
  line-height: 1.1;
  margin: 0;
}
h2 {
  font-size: 25.2px;
  line-height: 1.1;
  margin: 0 0 3.080000000000001px;
}
h3 {
  font-size: 23.8px;
  line-height: 1.1;
  margin: 0 0 4.619999999999999px;
}
h4 {
  font-size: 22.400000000000002px;
  line-height: 1.1;
  margin: 0 0 6.159999999999998px;
}
h5 {
  font-size: 21px;
  line-height: 1.1;
  margin: 0 0 7.700000000000001px;
}
h6 {
  font-size: 19.599999999999998px;
  line-height: 1.1;
  margin: 0 0 9.240000000000004px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 10.5px;
}
small {
  font-size: 8.75px;
}
```

**using the typography-scaffolding as a placeholders generator**

You can specify a third parameter. If you set it to true, the mixin will generate a set of placeholders.

```sass
scaffolding-typography(14px, 1.5, true)

.text-title
  @extend $h1

.text-block
  @extend $p

.text-block-small
  @extend .text-block
  @extend $small
```

You will get this css

```css
.text-title {
  font-size: 28px;
  line-height: 1.1;
  margin: 0;
}
.text-block,
.text-block-small {
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 10.5px;
}
.text-block-small {
  font-size: 8.75px;
}
```

Placeholders are called like this (if you don't call the mixin inside a placeholder or inside a css class)

* $h1

* $h2

* $h3

* $h4

* $h5

* $h6

* $p

* $small
