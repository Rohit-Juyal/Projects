const form = document.getElementById("formContent");
const name = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const expenseTrackerTable = document.getElementById("expenseTrackerTable");
const tableData = document.getElementById("tableData");

// const noExpense = document.getElementById("noExpense");
// noExpense.remove();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    nameValue = name.value;
    dateValue = date.value;
    amountValue = amount.value;

    const tableRow = document.createElement("tr");
    tableRow.classList.add("tableRow");
    
    const tableNameData = document.createElement("td");
    tableNameData.innerHTML = nameValue;

    const tableDateData = document.createElement("td");
    tableDateData.innerHTML = dateValue;

    const tableamountData = document.createElement("td");
    tableamountData.innerHTML =`Rs ${amountValue}`;

    const tableDeleteBtn = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.style.cursor = "pointer";

    tableDeleteBtn.appendChild(deleteBtn);
    

    tableRow.appendChild(tableNameData);
    tableRow.appendChild(tableDateData);
    tableRow.appendChild(tableamountData);
    tableRow.appendChild(tableDeleteBtn);
    
    tableData.appendChild(tableRow);

    deleteBtn.addEventListener("click", () => {
        tableRow.remove();
    })

    name.value = "";
    date.value = "";
    amount.value = "";
})