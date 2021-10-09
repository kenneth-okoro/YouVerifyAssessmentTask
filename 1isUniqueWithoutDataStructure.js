function isUnique(str) {
		 
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i + 1)) {
            return false;
        }
    }
    return true;
}

let input = "JavaScriptForBeginners";

    if (isUnique(input) == true) {
        document.write("String is Unique");
    } else {
        document.write("String is not Unique");
    }

