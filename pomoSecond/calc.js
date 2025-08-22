document.addEventListener('DOMContentLoaded', () => {
    const numOneInput = document.getElementById("numOne");
    const numTwoInput = document.getElementById("numTwo");
    const operator = document.getElementById("operator");
    const resultOutput = document.getElementById("output");
    const calculateBtn = document.getElementById("equal");

    const historyDiv = document.getElementById("history");

    //declare my history array that stores all of previous calculations
    const history = [];

    // listening for when user hits the enter button
    document.addEventListener("keydown", (event) =>{
        if (event.key === "Enter"){
            calculate();
        }
    });

    // listening for when user clicks EQUAL button
    calculateBtn.addEventListener("click", calculate);
    
    // main calculate function 
    function calculate(){
        const num1 = parseFloat(numOneInput.value);
        const num2 = parseFloat(numTwoInput.value);
        const op = operator.value;
        let result;

            // check if both values are numbers
            if (isNaN(num1) || isNaN(num2)){
                resultOutput.textContent = "Please enter a real number";
                return;
            }

            //else both numbers are real
            switch(op){
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    //check if either number is zero since we cannot divide
                    if (num2 == 0){
                        resultOutput.textContent = "cannot divide by zero";
                        return;
                    }else{
                        result = num1 / num2;
                    }
                    break;
                default : 
                    result = "invalid operator";
            }
        resultOutput.textContent = `${result}`;

        // using this to take a time stamp for every calculation
        var d = new Date();
        var n = d.toLocaleTimeString();

        //create a new object with all info for this calculation
        const calc = {
            timeStamp: n,
            number1: num1,
            number2: num2,
            operator: op,
            result: result

        };

        history.push(calc); // add the calculation to the array

        displayHistory(); // display all of the history 
    };
    
    function displayHistory(){
        historyDiv.innerHTML = "<h3>History:</h3>";
        history.forEach((entry, index) => {
            const p = document.createElement("p");
            p.textContent = `${index + 1}. ${entry.timeStamp} ${entry.number1} ${entry.operator} ${entry.number2} = ${entry.result}`;
            historyDiv.appendChild(p);
        });
    }


    
});


// THis has to be outside of the main function ???
function pomPage () {
        window.location = "pom.html";
    }