var input = document.getElementById("userinput");
var button = document.getElementById("button");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function addAfterClick(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function enterPressEvent (event){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

	}

//"Add Task" button click event
button.addEventListener("click", function(){
	if (input.value.length > 0){
		addAfterClick();
	}
})

//Enter pressed event
input.addEventListener("keypress", function(event){
	if (input.value.length > 0 && event.keyCode === 13){
		enterPressEvent();
	}
})

// li.addEventListener("click", function(){
// 	items.classList.toggle('done');
// })

