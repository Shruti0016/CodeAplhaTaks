// Initialize expenses array
let expenses = [];

// Function to update the expense list and total amount
function updateExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    let total = 0;
    expenses.forEach((expense, index) => {
        // Create list item for each expense
        const listItem = document.createElement('li');
        listItem.innerHTML = `${expense.description}: $${expense.amount.toFixed(2)} 
            <button onclick="deleteExpense(${index})">Delete</button>`;
        expenseList.appendChild(listItem);

        // Update total
        total += expense.amount;
    });

   
  // Assuming total is a variable holding the total amount
   // Example value, replace this with your actual total
  document.getElementById('total-amount').innerText = '$' + total.toFixed(2);


    // Save expenses to local storage
    localStorage.setItem('expenses', JSON.stringify(expenses));
}
// Function to add an expense
function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && !isNaN(amount) && amount > 0) {
        expenses.push({ description, amount });
        updateExpenses();

        // Clear input fields
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenses();
}
// Load expenses from local storage
document.addEventListener('DOMContentLoaded', () => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
        updateExpenses();
    }

    // Add event listener for the add expense button
    document.getElementById('add-expense').addEventListener('click', addExpense);
});

