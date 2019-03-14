$(document).ready(function(){
  $.ajax({
    url: "http://localhost/project/data.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      var Disease = ["Dengue","Stomach Ache","Common Cold","Malaria","Jaundice"];
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
    num.push(0);
      console.log(num);

      var chartdata = {
        labels: Disease,
        datasets : [
          {
            label: 'No. of people',
            backgroundColor: 'rgba(200, 200, 200, 0.75)',
            borderColor: 'rgba(200, 200, 200, 0.75)',
            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
            hoverBorderColor: 'rgba(200, 200, 200, 1)',
            data: num
          }
        ]
      };

      var ctx = $("#mycanvas");

      var barGraph = new Chart(ctx, {
        type: 'bar',
        data: chartdata
      });
    },
    error: function(data) {
      console.log(data);
    }
  });
});
