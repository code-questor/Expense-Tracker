// Select the form element
const form = document.getElementById("expense-form");
const tableBody = document.getElementById("expense-table-body");
const totalExpensesElement = document.getElementById("total-expenses");

let totalExpenses = 0; // Global variable to track total expenses

// Add an event listener for the 'submit' event
form.addEventListener("submit", function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Retrieve input values
    const description = document.getElementById("expense-description").value.trim();
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    // Validate inputs
    if (description === "") {
        alert("Please enter a description.");
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount greater than 0.");
        return;
    }

    // Create a new table row
    const newRow = document.createElement("tr");

    // Create and append the description cell
    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = description;
    newRow.appendChild(descriptionCell);

    // Create and append the amount cell
    const amountCell = document.createElement("td");
    amountCell.textContent = amount.toFixed(2);
    newRow.appendChild(amountCell);

    // Create and append the category cell
    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    newRow.appendChild(categoryCell);

    // Create and append the action cell with a delete button
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn btn btn-danger btn-sm";
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Update the total expenses
    totalExpenses += amount;
    totalExpensesElement.textContent = totalExpenses.toFixed(2);

    // Add delete functionality to the button
    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this expense?")) {
            // Subtract the amount from total expenses
            const amountToDelete = parseFloat(amountCell.textContent);
            totalExpenses -= amountToDelete;

            // Update the displayed total
            totalExpensesElement.textContent = totalExpenses.toFixed(2);

            // Remove the row
            newRow.remove();
        }
    });

    // Reset the form fields
    form.reset();
});
