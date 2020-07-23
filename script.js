var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var dltBtn = document.createElement("button")
	var checkBtn = document.createElement("button")

	dltBtn.textContent = "Delete"
	dltBtn.classList.add("removeBtn")

	checkBtn.textContent="Done"
	checkBtn.classList.add("checkBtn")

	li.appendChild(checkBtn)
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(dltBtn)

	strikeItems(li);
	deleteBtns(dltBtn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function strikeItems(li){
	li.addEventListener("click", function(){
		this.classList.toggle("done")})}


function deleteBtns(dltBtn){
  dltBtn.addEventListener('click', function() {
    var li = this.parentNode
    li.remove()
  })}
