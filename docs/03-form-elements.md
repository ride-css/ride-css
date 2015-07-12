# form elements

Form elements are hugely an important part of user interfaces.

Ride-css provides several ways to do style them without worrying too much about keeping in mind css selectors.

## form elements aliases

The library offers you a quick and simple method to style html5 form elements and relative pseudo-classes.

You can for example style them at once using the **form-elements** mixin.

```sass
+form-elements()
  background-color: #fff
  color: #222
```

Obviously, will be rendered like.

```css
input,
select,
textarea {
  background-color: #fff;
  color: #222;
}
```

But what about styling disabled or readonly elements?

```sass
+form-disabled()
  background-color: #efefef
  color: #bbb

+form-readonly()
  background-color: #fefefe
  color: #ddd
```

this will lead to

```css
input[disabled],
select[disabled],
textarea[disabled] {
  background-color: #efefef;
  color: #bbb;
}  
input[readonly],
select[readonly],
textarea[readonly] {
  background-color: #fefefe;
  color: #ddd;
}  
```

What about validation pseudo-classes? They are called like this.

```sass
+form-invalid()
  // manages invalid pseudo-classes
  // put your wonderful css here!
+form-optional()
  // manages optional pseudo-classes
  // put your wonderful css here!
+form-out-of-range()
  // manages out-of-range pseudo-classes
  // put your wonderful css here!
+form-required()
  // manages required pseudo-classes
  // put your wonderful css here!
+form-valid()
  // manages valid pseudo-classes
  // put your wonderful css here!
```

And yes, we can set placeholders too!

```sass
+form-element()
  +placeholder()
    // your style here!
```

## scaffolding form elements using ride-form-elements

**ride-form-elements** will help you to style your form elements very quickly.

```sass
ride-form-elements($border, $padding, $apply-padding-to-options)
```

Just try this

```sass
ride-form-elements(1px solid #eee, 1em, false)
```

will yeld this!

```css
input,
select,
textarea {
  border: 1px solid #eee;
  padding: 1em;
  width: 100%;
}
input[type="checkbox"],
input[type="radio"] {
  width: auto;
}
select {
  padding: 0.85em;
}
```
