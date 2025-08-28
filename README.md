1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2.How do you create and insert a new element into the DOM?
3.What is Event Bubbling and how does it work?
4.What is Event Delegation in JavaScript? Why is it useful?
5.What is the difference between preventDefault() and stopPropagation() methods?


Answer are here:
1: getElementById gives us just an specific element which have the specific id but getElementsByClassName give us a HTML collection of elements which have same classes it's maybe one or more than one.
querySelector hepls us find element through id, class , and tagName 
Its gives us first element that matches a CSS selector.
querySelectorAll is also hepls us find element through id, class , and tagName but it gives us all element that matches a CSS selector.

2: Create and new element we have to use document.createElement();
and to insert we have to use appendChild();
for example,
let newDiv = document.createElement("div");
let newDivText = newDiv.innerText = "Hello bro? Kamon acho? "
Now insert:
let body = document.getElementsByTagName("body");
body.appendChild(newDivText);

3: When an event occurs on an element, it first triggers on that element, then bubbles up to its parent, then grandparent, and so on up to the document root.
Through this we can access parent , grandparent, grandparent-parent and so on of any elements.

4:Event Delegation is used to event bubbling to handle events efficiently.       Instead of attaching an event listener to every child element, I can attach a single listener to a parent element.Because the child stay within the parent element. 
usefulness:
1.It reduces the codes line
2.save us from error
3.It is very for us to manage 

5:preventDefault() stops the default browser behavior for an event.
for example the default behaviour is the form buttom is , when clicked it must be refresh the page but if I set preventDefault() it will make stop the page to be refres.
On the other hand stopPropagation() stops the event from bubbling;
Where I will set stopPropagation() there the event will stop from bubbling;