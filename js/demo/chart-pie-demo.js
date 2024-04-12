// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Transcription Automatic", "Transcription Manual", "Legal", "Translation"],
    datasets: [{
      data: [12, 38, 14, 36],
      backgroundColor: ['#b0d47a', '#ff9f9f', '#99daf0', '#a700ff'],
      hoverBackgroundColor: [],
      hoverBorderColor: "rgba(234, 236, 244, 1)", 
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      
      
    },
    legend: {
      display: false
    },
    cutoutPercentage: 70,
    
    
  },
});

/////////////////////////Bar chart/////////////

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Unclaimed", "Claimed", "Review", "Proofreding", "Rework", "Processing", "Failed"],
        datasets: [{

            data: [14, 17, 12, 16, 12, 17, 21],
            backgroundColor: "#8C52FE",
            label: 'All Files',
            barThickness :15
        }, {

            data: [10, 12, 3, 7, 13, 16, 11],
            backgroundColor: "#FFBE59",
            label: 'PM Names',
            barThickness :15
        }]
    }
});
