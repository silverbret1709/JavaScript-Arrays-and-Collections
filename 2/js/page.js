let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');


let monthlySales = Array.of(500, 9000, 3000);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');
let deptSales = Array.of(12, 9, 3)
let deptLabels = Array.of('Hiking', 'Hunting','Running');

let yearlyTotal = 0;

function addYearlyTotal(x) {
    yearlyTotal = x + yearlyTotal;
}

monthlySales.forEach(addYearlyTotal);
//Using Spread Operator with Array

/*function addYearlyTotal(a, b, c) {
    return a + b + c;
}*/

// let yearlyTotal = addYearlyTotal(...monthlySales, 3, 9);
// alert(yearlyTotal);
yearlyLabel.innerHTML = "$" +  yearlyTotal;


let octNums = Array.of(1200, 1000, 9000);
let novNums = Array.of(1100, 2000, 9000);
let decNums = Array.of(4000, 1000, 5000);

// let total = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));
// alert(total);


function findOverOneThousand() {
    let firstThousand = monthlySales.find(element => element < 1000
    );

    console.log(firstThousand);
}

function resetToZero() {
    monthlySales.fill(0);
    monthlySalesChart.update();
}

var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 194, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Pie
var deptSale = new Chart(pieCtx, {
   type: 'pie',
   data: {
       labels: deptLabels,
       datasets: [{
           label: '# of sales',
           data: deptSales,
           backgroundColor: [
               'rgba(238, 194, 104, 1)',
               'rgba(75, 166, 223, 1)',
               'rgba(239, 118, 122, 1)'
           ],
           borderWidth: 0

       }]
   },
    options: {

    }
});