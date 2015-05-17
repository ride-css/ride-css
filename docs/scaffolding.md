# scaffolding a project

Assuming [you have installed node and ride-css](install.md), we are ready to start writing code.

First of all, make a folder called ```source/stylus/``` and into that folder create a file called **style.styl**

Open that file and copy/paste this code below

```sass    
      @require 'ride-css'

      $grid-cols = 12
      $grid-gutter = 0
      $grid-padding = 1rem

      $font-size = 18px
      $line-height = 1.44

      &
        grid($grid-cols, $grid-gutter, $grid-padding, 'xs')
        scaffolding-typography($font-size, $line-height)

      @media (min-width: 768px)
        placeholders('sm')
        grid($grid-cols, $grid-gutter, $grid-padding, 'sm')

      @media (min-width: 1100px)
        placeholders('md')
        grid($grid-cols, $grid-gutter, $grid-padding, 'md')

      @media (min-width: 1500px)
        placeholders('md')
        grid($grid-cols, $grid-gutter, $grid-padding, 'md')
```
 
Once you compile this code into css, you'll find that you've already written a fully responsive and mobile first grid system, a nice looking typography system.

## the "hey i don't want all this meaningless css"

Well, it's simple. Quite every mixin in ride-css is capable of rendering a **placeholder** or a set of them.

Let us take the example above and tweak it a bit more

```sass    
      @require 'ride-css'

      $grid-cols = 12
      $grid-gutter = 0
      $grid-padding = 1rem

      $font-size = 18px
      $line-height = 1.44

      &
        grid($grid-cols, $grid-gutter, $grid-padding, 'xs', true)
        scaffolding-typography($font-size, $line-height, true)

      @media (min-width: 768px)
        placeholders('sm')
        grid($grid-cols, $grid-gutter, $grid-padding, 'sm', true)

      @media (min-width: 1100px)
        placeholders('md')
        grid($grid-cols, $grid-gutter, $grid-padding, 'md', true)

      @media (min-width: 1500px)
        placeholders('md')
        grid($grid-cols, $grid-gutter, $grid-padding, 'md', true)
```

Now, after you've compiled the code above you will feel soooooo annoied by this readme. We'll, you will see probably nothing but an empty css file!

Let's do some magic now:

```sass    
      @require 'ride-css'

      $grid-cols = 12
      $grid-gutter = 0
      $grid-padding = 1rem

      $font-size = 18px
      $line-height = 1.44

      &
        grid($grid-cols, $grid-gutter, $grid-padding, 'xs', true)
        scaffolding-typography($font-size, $line-height, true)

      @media (min-width: 768px)
        placeholders('sm')
        grid($grid-cols, $grid-gutter, $grid-padding, 'sm', true)

      @media (min-width: 1100px)
        placeholders('md')
        grid($grid-cols, $grid-gutter, $grid-padding, 'md', true)

      @media (min-width: 1500px)
        placeholders('md')
        grid($grid-cols, $grid-gutter, $grid-padding, 'md', true)

      // this is where real code will be written
      .four-articles
        @extend $row
        article
          @extend $col-xs
          @extend $col-xs-12
          @extend $col-sm-6
          @extend $col-md-3
```

Rebuild everything now. Wow, much responsive, less code, such wow! Your css is responsive, semantic and more beautiful. But hey, let's go on with a more complex example


```sass    
      @require 'ride-css'

      $grid-cols = 12
      $grid-gutter = 0
      $grid-padding = 1rem

      $font-size = 18px
      $line-height = 1.44

      &
        normalize-css()
        grid($grid-cols, $grid-gutter, $grid-padding, 'xs', true)
        scaffolding-typography($font-size, $line-height, true)

      @media (min-width: 768px)
        placeholders('sm')
        grid($grid-cols, $grid-gutter, $grid-padding, 'sm', true)

      @media (min-width: 1100px)
        placeholders('md')
        grid($grid-cols, $grid-gutter, $grid-padding, 'md', true)

      @media (min-width: 1500px)
        placeholders('lg')
        grid($grid-cols, $grid-gutter, $grid-padding, 'lg', true)

      // this is where real code will be written
      $four-column
        @extend $col-xs
        @extend $col-xs-12
        @extend $col-md-6
        @extend $col-lg-3

      $three-column
        @extend $four-column
        @extend $col-md-12
        @extend $col-lg-4

      .btn
        button: medium
        &-large
          button: large
        &-small
          button: small
        // yeah, basic bem support is there
        +bem-elem('block')
          &
            @extend $block
        +bem-mod('danger')
          color-scheme: red, white
        +bem-mod('disabled')
          color-scheme: gray, white
          cursor: default
        +bem-mod('safe')
          color-scheme: green, white

      .four-articles
        @extend $row
        h2
          @extend $h2
          @extend $font-300
        h2 small
          @extend $font-700
        article
          @extend $four-column
          
      .message
        fixed: bottom $line-height right $font-size
        &.danger
          @extend .btn--danger    

      .navbar
        @extend $block
        @extend $table-md
        a 
          @extend $block
          @extend $table-cell-md

      .three-articles
        @extend .four-articles
        article
          @extend $three-column
          
      .shopping-list
        &.four-column    
          @extend $four-column
        &.three-column
          @extend $three-column
```

We'll, it's not a really real example, but I think this will help you to have a clear idea of what we're talking about.