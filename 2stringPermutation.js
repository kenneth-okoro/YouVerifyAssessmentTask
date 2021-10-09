function stringPermutation(str1, str2) {
	
// Declare lengths of both strings
	let val1 = str1.length;
	let val2 = str2.length;
 
// If length of both strings is not similar, return false
	if (val1 != val2)
		return false;
		
	let ch1 = str1.split("");
	let ch2 = str2.split("");

// Sort strings
	ch1.sort();
	ch2.sort();

// Compare sorted strings
	for(let i = 0; i < val1; i++)
		if (ch1[i] != ch2[i])
			return false;

	return true;
}

let str1 = "vue";
let str2 = "you";

if (stringPermutation(str1, str2))
	document.write("Yes");
else
	document.write("No");
