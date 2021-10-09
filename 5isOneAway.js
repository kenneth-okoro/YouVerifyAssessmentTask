function isOneAway(s1, s2) {

// Determine the length of given strings
let m = s1.length, n = s2.length;

// If the difference between lengths is greater than 1, return false
if (Math.abs(m - n) > 1) {
	return false;
}

// Define count of edits
		let count = 0;
		let i = 0, j = 0;

// If characters don't match, return false
while (i < m && j < n) {
	if (s1[i] != s2[j]) {
		if (count == 1) {
			return false;
		}

// If length of either string is more, remove a character
		if (m > n) {
			i++;
		}
		else if (m< n) {
			j++;
		}
			
// If lengths of both strings is same, increase count of edits
		else {
			i++;
			j++;
		}
		count++;
	}

// If characters match
	else {
		i++;
		j++;
	}
}

// If last character is extra in any string
if (i < m || j < n) {
	count++;
}

return count == 1;
}

let s1 = "begin";
let s2 = "begins";

if(isOneAway(s1, s2)) {
	document.write("Yes");
} else {
	document.write("No");
}