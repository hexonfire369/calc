let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        // Get the text inside the button clicked
        let buttonText = e.target.innerHTML;

        if (buttonText == "=") {
            // Standard check: only eval if string is not empty
            if (string !== "") {
                string = eval(string);
                input.value = string;
            }
        } 
        else if (buttonText == "AC") {
            // Reset everything
            string = "";
            input.value = string;
        } 
        else if (buttonText == "DEL") {
            // FIX: Ensure 'string' is treated as a string and remove the last character
            string = string.toString(); 
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else {
            // Append the new character to the end of the string
            string += buttonText;
            input.value = string;
        }
    })
});