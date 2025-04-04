// // /* .js files add interaction to your website */

// var quoteList = ["Half of U.S. adults say they put off or skipped some sort of health care or dental care in the past year because of the cost.", "At minimum, 20.3 million children in the United States (28% of all children) face barriers to accessing essential health care.", "Currently, 800 million people spend at least 10 percent of their household budgets on health expenses for themselves, a sick child or other family member. For almost 100 million people these expenses are high enough to push them into extreme poverty, forcing them to survive on just $1.90 or less a day.", "Nearly half (46%) of insured adults report difficulty affording their out-of-pocket costs, and one in four (27%) report difficulty affording their deductible.", "Three in ten (29%) U.S adults report not taking their medicines as prescribed at some point in the past year because of the cost."];

// var quote = document.getElementById("quote");
// var myBtn = document.getElementById("myBtn");
// var count = 0;

// //myBtn.addEventListener("click", displayQuote); /*this wouldnt make my personalized script work, i kept getting an error*/

// function displayQuote() {
//   quote.innerHTML = quoteList[count];
//   count = count + 1; 
//   if(count == quoteList.length) {
//     count = 0;
//   }
// }

// //personalized script
// var inputBtn = document.getElementById("inputBtn");
// inputBtn.addEventListener("click", displayMotivation);

// var displayMessage = document.getElementById("message");

// function displayMotivation() {
//   var inputText = document.getElementById("inputText").value;
//   displayMessage.innerHTML = "Hello, [Representative Name]. My name is " + inputText + ", " + "and I am contacting you regarding our country’s health accessibility barrier. It is a difficult challenge that has affected the lives of millions and will continue to stay that way unless policy makers, like yourself, contribute to the change. Although, there is no simple fix to this, some solutions that will work towards healthcare equity and an increase in access to medical care include supporting more telehealth services, expanding low cost insurances from the government, and ensuring that cities will let their populations know what options or alternatives are available to them. I am urging for your support to this cause and consider the solutions provided. The change starts with you. ";
// }

/*From the code above, I kept getting the Cannot Read Property addEventListener error, so I had to redo it and check with the GWC sample project code*/

var displayScript =
  document.getElementById("message");
var inputBtn = document.getElementById("inputBtn");
var quoteList = ["Half of U.S. adults say they put off or skipped some sort of health care or dental care in the past year because of the cost.", "At minimum, 20.3 million children in the United States (28% of all children) face barriers to accessing essential health care.", "Currently, 800 million people spend at least 10 percent of their household budgets on health expenses for themselves, a sick child or other family member. For almost 100 million people these expenses are high enough to push them into extreme poverty, forcing them to survive on just $1.90 or less a day.", "Nearly half (46%) of insured adults report difficulty affording their out-of-pocket costs, and one in four (27%) report difficulty affording their deductible.", "Three in ten (29%) U.S adults report not taking their medicines as prescribed at some point in the past year because of the cost."];
var quote = document.getElementById("quote");
var myBtn = document.getElementById ("myBtn");
var count = 0;

if (inputBtn) {
  inputBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var inputText = document.getElementById("inputText").value;

  displayScript.innerHTML = "Hello, [Representative Name]. My name is " + inputText + ", " + "and I am contacting you regarding our country’s health accessibility barrier. It is a difficult challenge that has affected the lives of millions and will continue to stay that way unless policy makers, like yourself, contribute to the change. Although, there is no simple fix to this, some solutions that will work towards healthcare equity and an increase in access to medical care include supporting more telehealth services, expanding low cost insurances from the government, and ensuring that cities will let their populations know what options or alternatives are available to them. I am urging for your support to this cause and consider the solutions provided. The change starts with you. "
}

if (myBtn) {
  myBtn.addEventListener("click", displayFact)
}

function displayFact() {
  quote.innerHTML = quoteList[count];
  count++;
  if (count == quoteList.length) {
    count = 0;
  }
}