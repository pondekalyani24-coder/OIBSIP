function convertTemperature() {

  let temp = document.getElementById("temperature").value;
  let unit = document.getElementById("unit").value;
  let resultBox = document.getElementById("result");

  // Validation: input must be number
  if (temp === "" || isNaN(temp)) {
    resultBox.innerHTML = "❌ Please enter a valid number!";
    return;
  }

  temp = parseFloat(temp);
  let result;

  // Conversion logic
  if (unit === "c_to_f") {
    result = (temp * 9/5) + 32;
    resultBox.innerHTML = "Result: " + result.toFixed(2) + " °F";
  }

  else if (unit === "f_to_c") {
    result = (temp - 32) * 5/9;
    resultBox.innerHTML = "Result: " + result.toFixed(2) + " °C";
  }

  else if (unit === "c_to_k") {
    result = temp + 273.15;
    resultBox.innerHTML = "Result: " + result.toFixed(2) + " K";
  }
}
