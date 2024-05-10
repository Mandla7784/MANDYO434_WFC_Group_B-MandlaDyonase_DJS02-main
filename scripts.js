const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/**
 * @constant {number}- decalred a constat varibale for calculations
 * @throws {Error} -if values are not provided then will throw the error
 * @throws {Error}- if the values are not valid integer
 *
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (!dividend || !divider) {
      //if no value provided the the message will be displayed
      result.innerText = `Division not performed. Both values are required in inputs. Try again`;
      throw ReferenceError(
        "Division not performed. Both values are required in inputs. Try again"
      );
    } else if (typeof dividend !== "number" || typeof divider !== "number") {
      document.body.innerHTML = `<h1>Something critical went wrong. Please reload the page</h1>`;
      throw ReferenceError(
        "Something critical went wrong. Please reload the page"
      );
    } else {
      const calculations = dividend / divider; //decalred a variable to keep track of calulations

      result.innerText = Math.floor(calculations); //user story 2...showing the results on the DOM
    }
  } catch (error) {
    console.error(error);
  }
});
