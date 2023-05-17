let select = document.querySelectorAll(".currency");
let input = document.getElementById("input_currency");
let output = document.getElementById("output_currency");

const host = "api.frankfurter.app";
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    // console.log(entries);
    for (i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }

    // alert(`10 GBP = ${data.rates.USD} USD`);
  });

function converter() {
  var input_currency_val = input_currency.value;
  if (select[0].value != select[1].value) {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`
    )
      .then((val) => val.json())
      .then((val) => {
        output.value = Object.values(val.rates)[0];
        // alert(`10 GBP = ${data.rates.USD} USD`);
      });
    // alert("Right");
  }
}
// } else {
//   // alert("two differnet currency");
//
