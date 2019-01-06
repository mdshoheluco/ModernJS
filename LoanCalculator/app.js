// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide results
    document.querySelector('#results').style.display = 'none';

    // show loader
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2000);
});

// Calculate Results
function calculateResults() {
   // UI Vars
   const amount = document.getElementById('amount');
   const interest = document.getElementById('interest');
   const years = document.getElementById('years');

   const monthlyPayment = document.querySelector('#monthly-payment');
   const totalPayment = document.querySelector('#total-payment');
   const totalInterest = document.querySelector('#total-interest');

   const principal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
   const calculatedPayments = parseFloat(years.value) * 12;

   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
   const monthly = (principal*x*calculatedInterest)/(x-1);

   if(isFinite(monthly)) {
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly * calculatedPayments).toFixed(2);
       totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
       // Hide results
    document.querySelector('#results').style.display = 'block';

    // show loader
    document.querySelector('#loading').style.display = 'none';
   }else {
       showError('Please check your numbers');
   }
}

function showError(error) {
    // Hide results
    document.querySelector('#results').style.display = 'none';

    // show loader
    document.querySelector('#loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Create txt node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert above heading
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}