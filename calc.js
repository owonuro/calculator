//This is the beginning of the code

var keys = document.getElementById('keys');

var myinput =document.getElementById('display-input')

var charracterKeys = ['C', ' ÷ ', ' x ','⌫', 7, 8, 9, 'ˆ', 4, 5, 6, ' - ', 1, 2, 3,' + ', 0, '.','π', '=' ]
for (let i = 0; i < charracterKeys.length; i++) {
	/*console.log(charracterKeys[i]);*/
	const newNode = document.createElement('button');
	const id = document.createAttribute('id');
	id.value = charracterKeys[i];
	newNode.setAttributeNode(id);
	const txtNode = document.createTextNode(charracterKeys[i]);
	newNode.appendChild(txtNode);
	newNode.addEventListener('click',myclick);
	keys.appendChild(newNode);
		
	
}


//This function is to replace some character for proper evaluation!
function replaceExp(string) {
	let repStr = string
if(repStr.includes('x')){
	repStr = repStr.replace(/x/g,'*');
}
if(repStr.includes('ˆ')){
	repStr = repStr.replace(/ˆ/g,'**');
}
if(repStr.includes('π')){
	repStr = repStr.replace(/π/g,'3.142');
}
if(repStr.includes('÷')){
	repStr = repStr.replace(/÷/g,'/');
}

return repStr;
}



function myclick() {
//alert(this.id);
let inputValue = myinput.innerHTML

if (this.id == 'C') {
	inputValue = '';
	myinput.innerHTML = inputValue;
	return
	}
	
if (this.id == '=') {
		let editedInput = replaceExp(myinput.innerHTML);

if (editedInput.includes('/ 0')){
alert("Can't divide with 0");
return
}
		
	try {
		
		let result = eval(editedInput);
		myinput.innerHTML = result;
	return;}
	catch (err) {
	alert("Wrong format!")
	myinput.innerHTML = inputValue;
	return
	}
	
	}
	
if (this.id == '⌫') {
	myinput.innerHTML = inputValue.slice(0, -1);
	return
	}

inputValue +=this.id;	
myinput.innerHTML = inputValue;
}

/*alert('Keep solving!');
console.log('we are happy!')*/