// Write your JavaScript code here!

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

var btn = document.getElementById('calculateButton');
btn.onclick = handleClickEvent;

// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`





planets.forEach(function(planetsAndweight){
  $('#planets').append('<option value="' + planetsAndweight[1] + '">' + planetsAndweight [0] + '</option>');
});


function calculateWeight(weight, origin){
 // 2. Write the code to return the correct weight
  for (var index = 0; index < planets.length; index++) {
    var planetWeight = planets[index][1];
    var planetName = planets[index][0];
    

    if (planetName === origin){
      return planetWeight * weight;
    }
  }
}






function handleClickEvent(){

  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = $('#userWeight').val();


  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = $('#planets option:selected').text();

  // 5. Create a variable called result and assign the value of the new calculated weight.
  console.log(userWeight, planetName);
  var result = calculateWeight(userWeight,planetName);
  console.log(result);
  // 6. Write code to display the message shown in the screenshot.
  $('#output').text('If you were on ' + planetName + ' you would weigh ' + result + 'lbs!' );

};


 // var x = "If you were on " + planetName + ", you would weight " + result + " lbs!";


// 7. Set the calculateWeight button's onclick method to use the handleClickEvent function.




// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)