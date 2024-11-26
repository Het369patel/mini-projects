const calculateTotalAmount = () => {
  let billAmount = document.getElementById("billamount").value;
  let tipPercentage = document.getElementById("tippercentage").value;
  let totalprice = document.getElementById("totalprice");

  let tipAmount = billAmount * (tipPercentage / 100);
  let finalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

  totalprice.innerHTML = finalAmount;

  console.log(`Bill Amount: ${billAmount}`);
  console.log(`Tip Amount: ${tipAmount}`);
  console.log(`Final Amount: ${finalAmount}`);
};

let calculateTotalBtn = document.getElementById("calculatetotal");
calculateTotalBtn.addEventListener("click", calculateTotalAmount);
