function isPalindrome(str) {
	
	let list = [];
 
	for(let i = 0; i < str.length; i++) {
		if (list.includes(str[i]))
			list.splice(list.indexOf(str[i]), 1);
		else
			list.push(str[i]);
	}
	 
// If string length is even, return true
	if (str.length % 2 == 0 && list.length == 0 ||
	(str.length % 2 == 1 && list.length == 1))
		return true;
	
// If string length is odd, return false
	else
		return false;
}

let input = "neveroddoreven";

if (isPalindrome(input))
	document.write("Yes");
else
	document.write("No");