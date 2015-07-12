# using bem inside ride-css

BEM ([block element modifier](https://css-tricks.com/bem-101/)), it's a different methodology than SMACSS and OOCSS.

Ride-css partially supports it with mixins.

At the moment there are two different mixins for using bem quickly.

## bem-elem, also known as the element that depends on the block

this is the mixins

```sass
        bem-elem($bem-block[, $bem-element])
```

this mixin accepts two parameters:

* $bem-block: is the block the element depends on (should be a class name written within single or double quotes) or the element name (read below the example)

* $bem-element: is optional if you use the mixin inside a css class (read below the example). It's the element name, write a string and you've done

this mixin also accepts a block.

Let's see this two examples

```sass
+bem-elem('.btn', 'price')
  color: #ddd
// or
.btn
  +bem-elem('price')
    color: #ddd
```

Each example will yeld the same thing:

```css
.btn__price {  
  color: #ddd;
}
```

## bem-mod, modifier for the block

this is the mixins

```sass
bem-mod($bem-block[, $bem-modifier])
```

this mixin accepts two parameters:

* $bem-block: is the block the modifier will rely on (should be a class name written within single or double quotes) or the modifier name (read below the example)

* $bem-modifier: is optional if you use the mixin inside a css class (read below the example). It's the modifier name, write a string and you've done

this mixin also accepts a block.

Let's see this two examples

```sass
+bem-mod('.btn', 'big')
  font-size: 2em
// or
.btn
  +bem-mod('big')
    font-size: 2em
```

Each example will yeld the same thing:

```css
.btn--big {  
  font-size: 2em;
}
```
