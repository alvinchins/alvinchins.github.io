$(document).ready(function(){
    if ($('.chart_page').length) {
        google.charts.load('current', {
            'packages':['geochart'],
            'mapsApiKey': 'AIzaSyCF45fCdt05f4nE-k1xqLbGGkVlg5LL39I'
            });
            google.charts.setOnLoadCallback(drawRegionsMap);
            function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'Post'],
                ['Australia', 12040],
                ['United States', 7238],
                ['New Zealand', 9344],
                ['Canada', 5472],
                ['France', 482],
                ['China', 137]
            ]);
            var options = {
                backgroundColor:'transparent',
                colorAxis: {colors: ['#282442','#2b73af']},
                datalessRegionColor: '#1a182b'
            };
            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
            chart.draw(data, options);
        }
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Number of Visitors',
                    data: [1210, 920, 3427, 1248, 4214, 6165, 5847, 3123, 2254, 4809, 5372, 4126],
                    backgroundColor: [
                        'transparent'
                    ],
                    borderColor: ['rgba(254,89,0,0.5)'],
                    pointBackgroundColor: 'Yellow'
                },{
                    label: 'Number of Returning Visitors',
                    data: [800, 500, 2527, 648, 2514, 3065, 4447, 2523, 1054, 3709, 3872, 2426],
                    backgroundColor: [
                        'transparent'
                    ],
                    borderColor: ['rgba(22,40,94,1)'],
                    pointBackgroundColor: 'lightblue'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }
        }); 

        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['0-6', '7-17', '18-28', '29-40', '41-65', '>66'],
                datasets: [{
                    data: [556, 3239, 7927, 10238, 4313, 621],
                    backgroundColor: [
                        'rgba(83,191,20, 0.2)',
                        'rgba(187,245,13, 0.2)',
                        'rgba(255,170,1, 0.2)',
                        'rgba(254,89,0, 0.2)',
                        'rgba(250,234,1, 0.2)',
                        'rgba(217,230,239, 0.2)'
                    ],
                    borderColor: [
                        'rgba(83,191,20, 1)',
                        'rgba(187,245,13, 1)',
                        'rgba(255,170,1, 1)',
                        'rgba(254,89,0, 1)',
                        'rgba(250,234,1, 1)',
                        'rgba(217,230,239, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'left'
                }
            }
        });

        var ctx = document.getElementById('myChart5').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Sight', 'Smell', 'Taste', 'Hear', 'Touch', 'IoT'],
                datasets: [{
                    label: 'Number of Posts',
                    data: [3260, 2978, 3745, 5512, 2793, 10032],
                    backgroundColor: [
                        'rgba(100,151,177, 0.2)',
                        'rgba(0,128,128, 0.2)',
                        'rgba(2,137,0, 0.2)',
                        'rgba(219,172,152, 0.2)',
                        'rgba(24,154,211, 0.2)',
                        'rgba(190,41,236, 0.2)'
                    ],
                    borderColor: [
                        'rgba(100,151,177, 1)',
                        'rgba(0,128,128, 1)',
                        'rgba(2,137,0, 1)',
                        'rgba(219,172,152, 1)',
                        'rgba(24,154,211, 1)',
                        'rgba(190,41,236, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'top'
                }
            }
        });

        var ctx = document.getElementById('myChart6').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Apple', 'Banana', 'Apricots', 'Blackberries', 'Kiwifruit', 'Loquat', 'Coconut', 'Avocado'],
                datasets: [{
                    label: 'Number of Hits',
                    data: [1023, 982, 645, 549, 428, 410, 324, 244],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(83,191,20, 0.2)',
                        'rgba(187,245,13, 0.2)',
                        'rgba(255,170,1, 0.2)',
                        'rgba(254,89,0, 0.2)',
                        'rgba(250,234,1, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(83,191,20, 1)',
                        'rgba(187,245,13, 1)',
                        'rgba(255,170,1, 1)',
                        'rgba(254,89,0, 1)',
                        'rgba(250,234,1, 1)'
                    ],
                    borderWidth: 1
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

        var ctx = document.getElementById('myChart8').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Number of New Posts',
                    data: [1210, 920, 3427, 1248, 4214, 6165, 5847, 3123, 2254, 4809, 5372, 4126],
                    backgroundColor: [
                        'rgba(24,154,211, 0.2)'
                    ],
                    borderColor: ['rgb(30,187,215)'],
                    pointBackgroundColor: 'white'
                },{
                    label: 'Number of Posts',
                    data: [11210, 12130, 15557, 16805, 21019, 27184, 33031, 36154, 38408, 43217, 48589, 52715],
                    backgroundColor: [
                        'rgba(67,62,144, 0.2)'
                    ],
                    borderColor: ['rgb(67,62,144)'],
                    pointBackgroundColor: 'white'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }
        }); 

        var ctx = document.getElementById('myChart9').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Pink', 'White', 'Green', 'Light', 'Brown', 'Shiny'],
                datasets: [{
                    data: [2312, 5543, 1231, 7675, 2313, 2835],
                    backgroundColor: [
                        'rgba(1,31,75, 0.2)',
                        'rgba(3,57,108, 0.2)',
                        'rgba(0,91,150, 0.2)',
                        'rgba(100,151,177, 0.2)',
                        'rgba(179,205,224, 0.2)',
                        'rgba(217,230,239, 0.2)'
                    ],
                    borderColor: [
                        'rgba(1,31,75, 1)',
                        'rgba(3,57,108, 1)',
                        'rgba(0,91,150, 1)',
                        'rgba(100,151,177, 1)',
                        'rgba(179,205,224, 1)',
                        'rgba(217,230,239, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'right'
                }
            }
        });

        var ctx = document.getElementById('myChart10').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Fresh', 'Sweet', 'Fragant', 'Good', 'Sour', 'Bitter'],
                datasets: [{
                    data: [7625, 2663, 3461, 4830, 1739, 924],
                    backgroundColor: [
                        'rgba(178,216,216, 0.2)',
                        'rgba(102,178,178, 0.2)',
                        'rgba(0,128,128, 0.2)',
                        'rgba(0,102,102, 0.2)',
                        'rgba(0,76,76, 0.2)',
                        'rgba(0,68,68, 0.2)'
                    ],
                    borderColor: [
                        'rgba(178,216,216, 1)',
                        'rgba(102,178,178, 1)',
                        'rgba(0,128,128, 1)',
                        'rgba(0,102,102, 1)',
                        'rgba(0,76,76, 1)',
                        'rgba(0,68,68, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'right'
                }
            }
        });

        var ctx = document.getElementById('myChart11').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Milky', 'Sweet', 'Juicy', 'Sour', 'Bitter', 'Moist'],
                datasets: [{
                    data: [6738, 9392, 5472, 1638, 7463, 7468],
                    backgroundColor: [
                        'rgba(173,255,0, 0.2)',
                        'rgba(116,214,0, 0.2)',
                        'rgba(2,137,0, 0.2)',
                        'rgba(0,210,127, 0.2)',
                        'rgba(0,255,131, 0.2)',
                        'rgba(127,255,193, 0.2)'
                    ],
                    borderColor: [
                        'rgba((173,255,0, 1)',
                        'rgba(116,214,0, 1)',
                        'rgba(2,137,0, 1)',
                        'rgba(0,210,127, 1)',
                        'rgba(0,255,131, 1)',
                        'rgba(127,255,193, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'right'
                }
            }
        });

        var ctx = document.getElementById('myChart12').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Crunchy', 'Crispy', 'No-Sound'],
                datasets: [{
                    label: '# of Posts',
                    data: [1260, 3978, 2745],
                    backgroundColor: [
                        'rgba(215,184,163, 0.2)',
                        'rgba(235,171,127, 0.2)',
                        'rgba(113,82,61, 0.2)'
                    ],
                    borderColor: [
                        'rgba(215,184,163, 1)',
                        'rgba(235,171,127, 1)',
                        'rgba(113,82,61, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'right'
                }
            }
        });

        var ctx = document.getElementById('myChart13').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Smooth', 'Soft', 'Hard', 'Firm', 'Dense'],
                datasets: [{
                    label: '# of Posts',
                    data: [2313, 2525, 4352, 1445, 1234],
                    backgroundColor: [
                        'rgba(113,199,236, 0.2)',
                        'rgba(30,187,215, 0.2)',
                        'rgba(24,154,211, 0.2)',
                        'rgba(16,125,172, 0.2)',
                        'rgba(0,80,115, 0.2)'
                    ],
                    borderColor: [
                        'rgba(113,199,236, 1)',
                        'rgba(30,187,215, 1)',
                        'rgba(24,154,211, 1)',
                        'rgba(16,125,172, 1)',
                        'rgba(0,80,115, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'right'
                }
            }
        });

        var ctx = document.getElementById('myChart14').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Temperature', 'Humidity', 'Wind', 'Light', 'Water'],
                datasets: [{
                    label: '# of Posts',
                    data: [13260, 12978, 13745, 15512, 12793],
                    backgroundColor: [
                        'rgba(239,187,255, 0.2)',
                        'rgba(216,150,255, 0.2)',
                        'rgba(190,41,236, 0.2)',
                        'rgba(128,0,128, 0.2)',
                        'rgba(102,0,102, 0.2)'
                    ],
                    borderColor: [
                        'rgba(239,187,255, 1)',
                        'rgba(216,150,255, 1)',
                        'rgba(190,41,236, 1)',
                        'rgba(128,0,128, 1)',
                        'rgba(102,0,102, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    position: 'right'
                }
            }
        });
    }

    if ($('.user_management').length) {
        $("#add-new-user").click(function(){
            $(".add-new-user").fadeIn();
        });

        $("#cancel_action").click(function(){
            $(".add-new-user").fadeOut();
        });

        $(".ar-roster-entry-operations>button:first-of-type").click(function(){
            $(".edit-user").fadeIn();
        });    

        $("#cancel_action_edit").click(function(){
            $(".edit-user").fadeOut();
        });

        $(".ar-roster-entry-operations>button:nth-of-type(2)").click(function(){
            $(".remove-user").fadeIn();
        });    

        $("#action_remove").click(function(){
            $(".remove-user").fadeOut();
        });

        $("#cancel_action_remove").click(function(){
            $(".remove-user").fadeOut();
        });
    }
});

function openNav() {
    document.getElementById("collapse-menu").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("collapse-menu").style.width = "0";
}