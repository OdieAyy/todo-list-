// add new items to li - with event listeners for complete and close
function addItem (){

let inputValue = document.getElementById('input-field').value
let span = document.createElement('span');
let spanText = document.createTextNode('\u00D7');

span.id = 'close';
span.appendChild(spanText);
span.addEventListener('click', deleteItem);


let li = document.createElement("li");
li.className = 'listItem';

li.addEventListener('click', checked, false);

li.appendChild(document.createTextNode(inputValue));
li.appendChild(span)

if (inputValue === ''){
  alert('You have to enter some text');
} else {
    var ul = document.getElementById("list");
    ul.appendChild(li);
  }
}

// add strike through to item to mark complete
function checked(e){
  e.target.classList.toggle('checked')
};

// delete item from list - why did the span class 'close'?
function deleteItem(){ 
  this.parentNode.parentNode.removeChild(this.parentNode);
  console.log(this)
};