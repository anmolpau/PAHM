document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('input[name="slider"]').onchange=sliderChangeEventHandler;
},false);

function sliderChangeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    //if(!event.target.value) console.log('Invalid Selection');
    //else console.log('Year' + event.target.value + ' selected');
    window.env.year = parseInt(event.target.value) + 2012;
    // console.log('Year' + window.env.year + ' selected');
    if(window.env.crime != 0)
    drawMap();
}

function highlightBtn(btn) {
  var b1 = document.getElementById("btn1");
  var b2 = document.getElementById("btn2");
  var b3 = document.getElementById("btn3");
  var b4 = document.getElementById("btn4");
  b1.className = "";
  b2.className = "";
  b3.className = "";
  b4.className = "";
  var b = document.getElementById(btn);
  b.className = "active";
}

function boundryBtnClicked() {
  highlightBtn("btn1");
  window.env.crime = 0;
  drawMap();
}

function violentBtnClicked() {
  highlightBtn("btn2");
  window.env.crime = 1;
  drawMap();
}

function propertyBtnClicked() {
  highlightBtn("btn3");
  window.env.crime = 2;
  drawMap();
}

function aggregateBtnClicked() {
  highlightBtn("btn4");
  window.env.crime = 3;
  drawMap();
}

function drawStacked() {
      // window.data[year]["D1"][crime];
      var data = google.visualization.arrayToDataTable([
        ['Genre', 'Violent Crime', 'Property Crime'],
        ['2013', window.data["2013"]["Total"]["1"], window.data["2013"]["Total"]["2"]],
        ['2014', window.data["2014"]["Total"]["1"], window.data["2014"]["Total"]["2"]],
        ['2015', window.data["2015"]["Total"]["1"], window.data["2015"]["Total"]["2"]],
        ['2016', window.data["2016"]["Total"]["1"], window.data["2016"]["Total"]["2"]],
        ['2017', window.data["2017"]["Total"]["1"], window.data["2017"]["Total"]["2"]]
      ]);

      var options = {
        legend: {position: 'top', maxLines: 2},
        bar: {groupWidth: '75%'},
        isStacked: true
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
