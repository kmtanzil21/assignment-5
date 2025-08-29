1. getElementById returns a single element by ID whereas, getElementsByClassName returns a list of elements.

querySelector returns the first element matching a css selector by contrast querySelectorAll returns a static list of all the elements a css selector.

2.First of all we have to create an element using createElement, then we have to add content and insert it into a DOM with methods with the help of appendChild.

3.An event starts at the target element and then propagates upward through its ancestors in the DOM tree.

4. To keep an event listener on a parent element to handle events for its child.It is needed for efficiency and handling dynamically created elements.

5. The main difference between preventDefault() and stopPropagation() is , preventDefault() stops the browser's default action whereas stopPropagation stops the event from bubbling up to the parent elements.