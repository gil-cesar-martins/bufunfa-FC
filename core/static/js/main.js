var ctx = document.getElementsByClassName("line-chart");

const plugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#CED1ED';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

// Type, Data e options
var chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
    datasets: [
      {
        label: "GOLS MARCADOS",
        data: [9,20,31,23,24,29,34,30,26,28,24,30],
        borderWidth: 6,
        borderColor: 'rgb(40,49,219,0.86)',
        backgroundColor: 'transparent',
      },
      
      {
        label: "GOLS SOFRIDOS",
        data: [4,8,18,17,12,10,11,15,14,12,7,9],
        borderWidth: 6,
        borderColor: 'rgb(188,91,246,0.96)',
        backgroundColor: 'transparent',
      },
    ]
  },
  plugins: [plugin],
});