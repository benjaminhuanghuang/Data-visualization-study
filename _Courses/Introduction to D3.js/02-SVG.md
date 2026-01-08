# SVG

## SVG vs HTML5 Canvas

SVG (Scalable Vector Graphics)

- XML syntax
- each shape is a DOM element
- ✅pro: easy to get started and interact with
- ❌con: not performant at large scale

### HTML5 Canvas

- Javascript API
- One Canvas element, shapes are inaccessible once drawn
- ✅pro: very performant, especially for animations
- ❌con: hard to interact with

CSS can’t style external SVGs because browsers isolate them as images, not DOM documents

## SVG Viewport & Coordinates

```html
<svg width=800 height=600>
  <-- a whole world -->
</svg>
```

```txt
(0,0) ─────► x increases right
  │
  │
  ▼
 y increases down
 ```

## SVG Path Commands

| Command | Syntax | How I think about them |
|---------|--------|------------------------|
| Move To | M x,y | Pick the pen off the paper, put it back down at x,y. |
| Line To | L x,y | |
| Curve To | C x,y x,y x,y | |

## Draw an SVG Shape by Hand Practice

petal.html

## SVG Shape Exercise

## SVG Shape Solution
