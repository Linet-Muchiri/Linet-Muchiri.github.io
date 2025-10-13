// Dummy data
const summaryData = {
  totalUsers: 1284,
  monthlySales: 76420,
  newSignups: 128
};

// Populate summary cards
document.getElementById('total-users').innerText = summaryData.totalUsers;
document.getElementById('monthly-sales').innerText = '$' + summaryData.monthlySales.toLocaleString();
document.getElementById('new-signups').innerText = summaryData.newSignups;

// Chart.js setup
const usersCtx = document.getElementById('usersChart').getContext('2d');
new Chart(usersCtx, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
    datasets: [{
      label: 'Users',
      data: [300, 400, 600, 800, 1000, 1200, 1350, 1500, 1650, 1800],
      borderColor: '#007acc',
      backgroundColor: 'rgba(0, 122, 204, 0.2)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

const salesCtx = document.getElementById('salesChart').getContext('2d');
new Chart(salesCtx, {
  type: 'doughnut',
  data: {
    labels: ['Electronics', 'Apparel', 'Books', 'Home', 'Other'],
    datasets: [{
      data: [30, 25, 15, 20, 10],
      backgroundColor: ['#007acc','#00c6ff','#ff9900','#ff3366','#9933ff']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  }
});
