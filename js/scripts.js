// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

function OpenSidebar() {
  if (!sideBarOpen) {
    sidebar.classList.add(sidebar-responsive);
    sidebarOpen = true;
  }
}

function CloseSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove(sidebar-responsive);
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART

var barChartOptions = {
  series: [{
    data: [10, 8, 6, 4, 2]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
    'United States', 'China', 'Germany'
    ],
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), barChartOptions);
chart.render();