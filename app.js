
// Function to perform addition
function add(num1, num2) {
    return num1 + num2;
  }
  
  // Function to perform subtraction
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Function to perform multiplication
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to perform division with error handling to prevent division by zero
  function divide(num1, num2) {
    return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
  }

 // Function to perform modulo calculation
  function modulo(num1, num2) {
    return num1 % num2;
}

  // Function to perform percentage calculation
  function percentage(num1, num2) {
    return (num1 * num2) / 100;
}


// Function to calculate the power of a number
function power(num1, num2) {
    return Math.pow(num1, num2);
}


// Event listener for the calculate button
document.getElementById('calculateButton').addEventListener('click', calculate);

// Event listener for the clear button
document.getElementById('clearButton').addEventListener('click', clearFields);

// Function to perform the calculation
function calculate() {
    // Get input values from the user
    var num1 = document.getElementById('num1').value.trim();
    var num2 = document.getElementById('num2').value.trim();
    var operator = document.getElementById('operator').value;
    var result;

      // Error Handling: Check if either of the input fields is empty
    if (num1 === '' || num2 === '') {
        document.getElementById('result').value = "Please enter values for both numbers.";
        return;
    }

    // Parse input values to floats
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

     // Error Handling: Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').value = "Please enter valid numbers.";
        return;
    }

    // Perform calculation based on the selected operator
    switch (operator) {
    case '+':
        result = add(num1, num2);
        break;
    case '-':
        result = subtract(num1, num2);
        break;
    case '*':
        result = multiply(num1, num2);
        break;
    case '/':
        result = divide(num1, num2);
        break;
    case '%':
        result = modulo(num1, num2);
        break;
    case 'Percent':
        result = percentage(num1, num2);
        break; 
    case 'Power':
        result = power(num1, num2);
        break;
        default:
            result = "Invalid operator";
    }

    // Display the result
    document.getElementById('result').value = result;
    
}

// Function to clear input fields and reset operator selection
function clearFields() {
    document.querySelectorAll('#num1, #num2, #operator, #expression, #result').forEach(element => {
        element.value = '';
    });
    document.getElementById('operator').selectedIndex = 0;
}
