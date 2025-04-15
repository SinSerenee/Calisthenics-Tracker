const form = document.getElementById('trackerForm');
const tableBody = document.querySelector('#historyTable tbody');

let latihanData = JSON.parse(localStorage.getItem('latihan')) || [];

function tampilkanData() {
  tableBody.innerHTML = '';
  latihanData.forEach(entry => {
    const row = document.createElement('tr');

    // Cek hari dalam angka (0 = Minggu, 1 = Senin, ..., 6 = Sabtu)
    const tanggal = new Date(entry.date);
    const hari = tanggal.getDay();

    // Highlight jika Rabu (3), Jumat (5), Minggu (0)
    const isHariLatihan = hari === 0 || hari === 3 || hari === 5;

    row.innerHTML = `
      <td>${entry.date}</td>
      <td>${entry.pushup}</td>
      <td>${entry.pullup}</td>
      <td>${entry.situp}</td>
    `;

    if (isHariLatihan) {
      row.style.backgroundColor = '#d1ffd6'; // hijau muda
      row.style.fontWeight = 'bold';
    }

    tableBody.appendChild(row);
  });
}

function updateChart() {
  const labels = latihanData.map(entry => entry.date);
  const pushupData = latihanData.map(entry => entry.pushup);
  const pullupData = latihanData.map(entry => entry.pullup);
  const situpData = latihanData.map(entry => entry.situp);

  const ctx = document.getElementById('latihanChart').getContext('2d');

  if (window.myChart) {
    window.myChart.destroy(); // Hindari chart dobel
  }

  window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Push-Up',
          data: pushupData,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          tension: 0.3
        },
        {
          label: 'Pull-Up',
          data: pullupData,
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          tension: 0.3
        },
        {
          label: 'Sit-Up',
          data: situpData,
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Perkembangan Latihan'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5
          }
        }
      }
    }
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    date: document.getElementById('date').value,
    pushup: parseInt(document.getElementById('pushup').value),
    pullup: parseInt(document.getElementById('pullup').value),
    situp: parseInt(document.getElementById('situp').value)
  };

  latihanData.push(data);
  localStorage.setItem('latihan', JSON.stringify(latihanData));
  tampilkanData();
  updateChart();
  form.reset();
});

tampilkanData();
updateChart();
