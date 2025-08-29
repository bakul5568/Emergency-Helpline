
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: 
1**getElementById: In getElementById, a specific id is used, which finds the element with that id and returns it.

2**getElementsByClassName: In getElementByClassName, a specific ClassName is used, which finds the element with that ClassName and returns it.

3**querySelecto: In querySelector, both ID and Class Name can be used. But it only returns the first element that matches, not all elements.

4**querySelectorAll:  In querySelectorAll, both ID and Class Name can be used. It returns all elements that match the given ID or Class Name.


2. How do you **create and insert a new element into the DOM**?
Answer:
Creat Element:
1. Create the element. Exm:(let newE = document.createElement("");)
2.Add text, classes, or attributes to the new element.
    Exm:(newE.innerText ="";
        newE.className = "";)
Insert Element:
1.Insert into the DOM
  Exm:( document.body.appendChild(); )

3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is a process where an event first occurs on the innermost child/target element and then gradually propagates upward through its parent, grandparent, and so on, up to the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is a process where an event listener is added to a parent element, which then handles the events occurring on its child elements.This makes it easy to handle dynamic elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: **preventDefault(): This is a javascript method that is used to prevent any button from performing the default action. 
**stopPropagation(): stopPropagation() is a JavaScript event method used to stop event bubbling.