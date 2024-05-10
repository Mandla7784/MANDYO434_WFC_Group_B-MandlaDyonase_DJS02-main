const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/**
 * @constant {number}- decalred a constat varibale for calculations
 *
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (!dividend || !divider) {
      result.innerText = `Division not performed. Both values are required in inputs. Try again`;
      throw ReferenceError(
        "Division not performed. Both values are required in inputs. Try again"
      );
    } else {
      const calculations = dividend / divider; //decalred a variable to keep track of calulations

      result.innerText = Math.floor(calculations);
    }
  } catch (error) {
    console.error(error);
  }

  //user story 2
});
