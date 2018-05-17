var myHeading1= document.querySelector('h3');
myHeading1.textContent= 'Does Barley love these books?';

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc ==='images/barney-and-friends.jpg'){
		myImage.setAttribute('src','images/barney2.jpg');
	} else {
		myImage.setAttribute('src','images/barney-and-friends.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.'); /* the prompt function brings up a dialog box
	asking the user to enter some data which will def the myName variable, and using the localStorage's setItem()
	function to create and store a data item called 'name' which contains the value of the myName variable.
	*/
	localStorage.setItem('name', myName); // an API that stores data in the browser for later retrieval
	myHeading.textContent = 'Hi '+ myName + ', I am Barney.';
}	

if(!localStorage.getItem('name')) { //if name cannot be retrieved from local storage- checking if name data exist
	setUserName(); //set username function initiate to create it
} else { // otherwise
	var storedName = localStorage.getItem('name'); /* retrieve existing name as storedName using getItem function 
	and set the text content
	*/
	myHeading.textContent = 'Hi '+ storedName +', I am Barney.' ;
}

myButton.onclick = function() {
	setUserName();
}

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
				