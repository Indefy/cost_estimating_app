document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cost-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Calculate total estimated cost here
        calculateTotalCost();
    });

    function calculateTotalCost() {
        // Retrieve input values from form fields
        const materialCost = parseFloat(document.getElementById('material-cost').value);
        const laborCost = parseFloat(document.getElementById('labor-cost').value);
        // Perform calculations
        const totalCost = materialCost + laborCost; // Add more calculations as needed
        // Display total estimated cost on the page
        const totalCostElement = document.getElementById('total-cost');
        totalCostElement.innerText = `סהכ לתשלום: ₪${totalCost.toFixed(2)}`;
    }
});