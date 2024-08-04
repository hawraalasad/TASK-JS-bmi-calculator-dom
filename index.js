function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  BMI = weight / (((height / 100) * height) / 100);

  alert(BMI);

  if (BMI >= 30) {
    alert("you are obese");
  } else if (BMI >= 25 && BMI < 30) {
    alert(" You are Overweight");
  } else if (BMI >= 18.5 && BMI < 25) {
    alert(" You have a healthy weight");
  } else if (BMI < 18.5) {
    alert(" You are underweight");
  }

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    alert("A. you are healthy");
  } else if (age > 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
    alert("A. you are healthy");
  } else if (age > 34 && age <= 44 && BMI >= 21 && BMI <= 26) {
    alert("A. you are healthy");
  } else if (age > 44 && age <= 54 && BMI >= 22 && BMI <= 27) {
    alert("A.  are healthy");
  } else if (age > 54 && age <= 64 && BMI >= 23 && BMI <= 28) {
    alert("A.  are healthy");
  } else if (age > 64 && BMI >= 24 && BMI <= 29) {
    alert("A.  are healthy");
  } else alert("You are not healthy");
}
