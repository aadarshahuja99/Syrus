$(document).ready(function(){
  $.ajax({
    url: "http://localhost/project/data.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      var Disease = ["ABC","DEF","GHI"];
      var element = [];

      for(var i in data) {
        element.push(data[i].disease);
      }
      console.log(element);

      function foo(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return b;
}
    var num = foo(element);
          console.log(num);

      var chartdata = {
        labels: Disease,
        datasets: [
      {
        label: "No of people Before",
        data: num,
        backgroundColor: [
          "rgba(10,20,30,0.3)",
          "rgba(10,20,30,0.3)",
          "rgba(10,20,30,0.3)",
          "rgba(10,20,30,0.3)",
          "rgba(10,20,30,0.3)"
        ],
        borderColor: [
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)"
        ],
        borderWidth: 1
      },
      {
        label: "No. of people after",
        data: [20, 35, 40],
        backgroundColor: [
          "rgba(50,150,200,0.3)",
          "rgba(50,150,200,0.3)",
          "rgba(50,150,200,0.3)",
          "rgba(50,150,200,0.3)",
          "rgba(50,150,200,0.3)"
        ],
        borderColor: [
          "rgba(50,150,200,1)",
          "rgba(50,150,200,1)",
          "rgba(50,150,200,1)",
          "rgba(50,150,200,1)",
          "rgba(50,150,200,1)"
        ],
        borderWidth: 1
      }
    ]
  };

        //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "Bar Graph",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0
        }
      }]
    }
  };

      var ctx = $("#mycanvas2");

      var barGraph = new Chart(ctx, {
        type: 'bar',
        data: chartdata,
        options : options
      });
    },
    error: function(data) {
      console.log(data);
    }
  });
});