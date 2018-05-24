`<Alternative />` is a React component that wraps two components `<SideA />`, `<SideB />` inside,
displays `<SideA />` as a normal state, yet displays `<SideB />` when you interact with(hover/click on) `<Alternative />`.
This alternative state of `<Alternative />` is transformed along with several kinds of animation to choose from.


## Usage
``` javascript
<Alternative
  sideA={SideAComponent}
  sideB={SideBComponent}
  clickToTrigger  // default to be false, means hover to alter components
  className={"your-class-name"}  // it is possible to style the outmost <div> of <Alternative /> by giving classnames
/>
```

## TODOS
more animations
