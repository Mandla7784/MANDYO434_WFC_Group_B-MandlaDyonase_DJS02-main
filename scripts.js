const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
/**
 * @constant {number}- decalred a constat varibale for calculations
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const calculations = dividend / divider; //decalred a variable to keep track of calulations

  result.innerText = Math.floor(calculations);
});
