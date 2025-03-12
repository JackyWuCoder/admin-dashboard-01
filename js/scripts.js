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
    height: 350,
    toolbar: {
      show: false
    }
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367852",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
  },
  yaxis: {
    title: "Count"
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();