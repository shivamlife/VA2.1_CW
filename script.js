console.log('Hello!');
// Question 1- create a checkbox and if that checkbox is selected print a message you are subscribed

// const optIn = document.getElementById('optIn');
// const showResult = document.getElementById('showResult');
// optIn.addEventListener('change', () => {
//   if (optIn.checked) {
//     showResult.innerText = `You are Subscribed`;
//   } else {
//     showResult.innerText = '';
//   }
// });

// Question 2- create 3 checboxes on selection of each checbox show result on dom

// const showTopping = document.getElementById('showTopping');
// const toppings = document.getElementsByName('toppings');
// console.log(toppings);

// for (let i = 0; i < toppings.length; i++) {
//   toppings[i].addEventListener('change', () => {
//     const selectedToppings = [];

//     for (let j = 0; j < toppings.length; j++) {
//       if (toppings[j].checked) {
//         selectedToppings.push(toppings[j].value);
//       }
//     }
//     showTopping.textContent = `Your selected toppings are: ${selectedToppings.join(
//       ', '
//     )}`;
//     console.log(selectedToppings);
//   });
// }

// Question 3- Select your programminglanguage
const languagesCheckbox = document.getElementsByName('languages');
const showLanguages = document.getElementById('showLanguages');

for (let i = 0; i < languagesCheckbox.length; i++) {
  languagesCheckbox[i].addEventListener('change', () => {
    const selectedLanguages = [];
    for (let j = 0; j < languagesCheckbox.length; j++) {
      if (languagesCheckbox[j].checked) {
        selectedLanguages.push(languagesCheckbox[j].value);
      }
    }
    showLanguages.textContent = `Your Selected Languages are: ${selectedLanguages.join(
      ', '
    )}`;
    console.log(selectedLanguages);
  });
}
