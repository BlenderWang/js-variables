/* Find all menu elements by selector ".nav-link"
or by className "nav-link".

Use "for" loop to iterate through all menu items
Inside of the loop add "onclick" event handler to
each menu item.

In the "onclick" event handler:
1. Remove first "active" class from all
 menu elements
2. Add "active" class to the clicked menu element
3. Log to the console message with the name
 of the clicked menu item
*/

const links = document.querySelectorAll('.nav-link');

// for(let i = 0; i < links.length; i++) {
//   links[i].onclick = function() {
//     for(let j = 0; j < links.length; j++) {
//       links[j].classList.remove("active");
//     }
//     // console.log(i);
//     links[i].classList.add("active");
//     console.log(links[i].innerHTML);
//   };
// }

function toggleActive() {
  console.log('active');
  // this.classList.add('active');
  if(this.classList.contains('active')) {
    this.classList.remove('active');
  }else {
    this.classList.add('active');
  }
}

links.forEach(link => link.addEventListener('click', toggleActive));