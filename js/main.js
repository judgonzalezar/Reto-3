document.addEventListener('DOMContentLoaded', () => {
  /*Ecuación 
  Tip_Amount = (Bill/Numero_personas)*0.15 
  Total = (Bill/Numero_personas)+Tip_Amount
  */


  //Botones porcentaje
  let select_tip = document.querySelectorAll(".select-tip button");
  let container_label = document.querySelector(".container-label");
  let container_label_people = document.querySelector(".container-label-people");
  let label_result = document.querySelector("#amount-result");
  let label_total = document.querySelector("#total");
  let reset = document.querySelector(".reset");

  let container_custom = document.querySelector('.container-custom')
  let input_custom = document.querySelector('.custom-input');


  reset.disabled = true;

  for (let button of select_tip) {
    console.log(button);
    button.addEventListener("click", (event) => {
      console.log(event);
      let value_select_tip = event.target.value;
      let value_bill = document.querySelector("#bill").value;
      let value_number_people = document.querySelector("#number_people").value;

      console.log(event.target) ; 

      
      console.log(event.target) ;
      
      if (value_bill == 0 || value_number_people == 0) {
        container_label.classList.add("show-error");
        container_label_people.classList.add("show-error");
        label_result.textContent = "$0.00";
        label_total.textContent = "$0.00";
        reset.disabled = true;
        reset.classList.remove("active");
        return;
      }
      else {
        container_label.classList.remove("show-error");
        container_label_people.classList.remove("show-error");
        reset.disabled = false;
        reset.classList.add("active");
      }

      //calcular Tip Amount y Total
      let tip_amount = (value_bill / value_number_people) * (value_select_tip / 100);
      let total = (value_bill / value_number_people) + tip_amount;

      tip_amount = tip_amount.toFixed(2);
      total = total.toFixed(2);
      label_result.textContent = tip_amount;
      label_total.textContent = total;

    })

  }

  function removeActive(){
    for(let button of select_tip){
        button.classList.remove("active");
    }
  }


  reset.addEventListener("click", (event) => {
    label_result.textContent = "$0.00";
    label_total.textContent = "$0.00";
    reset_button();
  })

  function reset_button() {

    let value_bill = document.querySelector("#bill");
    let value_number_people = document.querySelector("#number_people");
    value_bill.value = 0;
    value_number_people.value = 0;
    console.log(value_bill);
    console.log(value_number_people);
  }


  container_custom.addEventListener("click", (e) => {
    e.target.parentElement.classList.add('show-custom-input');
  })

  input_custom.addEventListener("input", (e) => {
    let value_custom_input = e.srcElement.value;
    let value_bill = document.querySelector("#bill").value;
    let value_number_people = document.querySelector("#number_people").value;

    if (value_bill == 0 || value_number_people == 0) {
      container_label.classList.add("show-error");
      container_label_people.classList.add("show-error");
      label_result.textContent = "$0.00";
      label_total.textContent = "$0.00";
      reset.disabled = true;
      reset.classList.remove("active");
      return;
    }
    else {
      container_label.classList.remove("show-error");
      container_label_people.classList.remove("show-error");
      reset.disabled = false;
      reset.classList.add("active");

      let tip_amount = (value_bill / value_number_people) * (value_custom_input / 100);
      let total = (value_bill / value_number_people) + tip_amount;

      tip_amount = tip_amount.toFixed(2);
      total = total.toFixed(2);
      label_result.textContent = tip_amount;
      label_total.textContent = total;
      removeActive();
    }
  })


});