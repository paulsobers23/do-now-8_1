# Lesson 8.1 Review

## Essential Question
1. What is the difference between _state_ and _props_?

**My answer**: The difference between __state__ and __props__ is both __state and __props__ hold infomation that would be displayed to your, __state__ is managed within the component whereas __props__ gets passed to the component. __props__ are immutable and __state__ start with a default value but often gets mutated.

**Class answer**:__Props__ are immutable properties that pass data to a component when the component is rendered.

__State__ is created _within_ the component. __State__ is mutable. We can initialize state with an initial value. __State__ is persistent with each rerender. Update state triggers a rerender.

2. What is the `useState` hook? What does `useState` return?

**My answer**: The `useState` hook is a Hook that lets you add React state to function components. The `useState` returns an array with a stateful value, and a function to update it.

**Class answer**: `useState` is a hook that allows you to add state to your function components. `useState` returns an array with two elements. The first element is a pointer to initial state. The second is a function that allows us to reassign that value.

## Code Challenge
You will make a `MultiLingualGreeting` component:
* It should render as a greeting (perhaps, "Good Morning") in English. 
* Beneath this greeting, there should be a series of buttons. 
* Each button should correspond to a different language (perhaps, "Spanish", "Haitian Creole", and "Portuguese"). 
* When a button is clicked, the greeting above should be translated to the appropriate language.

```js
greetings ={
  "Espanol":"Buen Dias",
  "Kreyole": "Bonjou",
  "Portugues": "Bom Dia",
  "Hindi":"Shubh Prabat"
};
```