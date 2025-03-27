/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Gary Hembree
      Date:   3-27-25

      Filename: project02-01.js
 */
//step 3
function FahrenheitToCelsius(degree) {
      return (degree-32)/1.8
}
//step 4
function CelsiusToFahrenheit(degree) {
      return degree*1.8 +32;
}
//step 5
document.getElementById("cValue").onchange = function(){
      let cDegree = document.getElementById("cValue").value
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree)
}
//step 6
document.getElementById("fValue").onchange = function(){
      let fDegree = document.getElementById("fValue").value
      document.getElementById("cValue").value = FarenheitToCelsius(fDegree)
}
