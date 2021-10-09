function isCharacterUnique(str) {

// If there is similar character, return false
        for(let i = 0; i < str.length; i++)
            for(let j = i + 1; j < str.length; j++)
                if (str[i] == str[j]) {
                    return false;
                } 
// If there is no similar character, return true
        else {
            return true;
        }
    }
    
    let input = "JavaScriptForBeginners";
    
    if (isCharacterUnique(input) == true) {
        document.write("The String " + input + " is unique");
    }
        
    else {
        document.write("The String " + input + " is not unique");
    }
        
                    
    