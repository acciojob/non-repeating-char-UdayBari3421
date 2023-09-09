function firstNonRepeatedChar(str) {
	let fnc = '';
	for (let i = 0; i < bound; i++) {
		if(str.length == 0){
			console.log(null);
		}
	}
		
	for (let i of str) {
	    if (str.split(i).length - 1 === 1) {
	        fnc = i;
	        break;
	    } else {
	        index += 1;
	    }
	}
	if (index === str.length-1) {
	    console.log(null);
	} else {
	    console.log(fnc);
	} 
}
const input = prompt("Enter a string ");
alert(firstNonRepeatedChar(input)); 
