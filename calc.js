//This is the beginning of the code

var keys = document.getElementById('keys');

var myinput =document.getElementById('display-input')

var charracterKeys = ['C', '➗', '✖','⌫', 7, 8, 9, 'e', 4, 5, 6, '➖', 1, 2, 3,'➕', 0, '.','pi', '=' ]
for (let i =0; i < charracterKeys.length; i++) {
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
if(repStr.includes('✖')){
	repStr = repStr.replace(/✖/g,'*');
}
if(repStr.includes('e')){
	repStr = repStr.replace(/e/g,'**');
}
if(repStr.includes('pi')){
	repStr = repStr.replace(/pi/g,'3.142');
}
if(repStr.includes('➗')){
	repStr = repStr.replace(/➗/g,'/');
}
if(repStr.includes('➕')){
	repStr = repStr.replace(/➕/g,'+');
}
if(repStr.includes('➖')){
	repStr = repStr.replace(/➖/g,'-');
}
return repStr;
}



function myclick() {
//alert(this.id);
let inputValue = myinput.value

if (inputValue == 'ERROR') {
	inputValue = '';
	}

if (this.id == 'C') {
	inputValue = '';
	myinput.value = inputValue;
	return
	}
	
if (this.id == '=') {
	let editedInput = replaceExp(myinput.value);
		
	try {
		
		let result = eval(editedInput);
		myinput.value = result;
	return;}
	catch (err) {
	inputValue = 'ERROR';
	myinput.value = inputValue;
	return
	}
	
	}
	
if (this.id == '⌫') {
	myinput.value = inputValue.slice(0, -1);
	return
	}

inputValue +=this.id;	
myinput.value = inputValue;
}

/*alert('Keep solving!');
console.log('we are happy!')*/