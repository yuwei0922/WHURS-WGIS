let labelswitch = document.querySelector('.check-box')
let toggle_switch = document.querySelector('.check-handler')
let switchBefore = window.getComputedStyle(toggle_switch, '::before');
let submitcheck = document.querySelector('.submitcheck')

let exceltitle = document.querySelector('.exceltitle')
let boolen = true
let pietitle = document.getElementById('pietitle')
let startitle = document.querySelector('.startitle')
let hottitle = document.getElementById('hottitle')
let numbertitle = document.querySelectorAll('#numberandline .numberview h5')
let linetitle = document.querySelector('.linetitle')
let selectcountry = document.querySelector('#selectcountry')
let timedot = document.querySelectorAll(".timecontainer .dot")
let yeardot
let numbersum = document.querySelectorAll(".numbersum")
let yearresult1990
let yearresult1995
let yearresult2000
let yearresult2005
let resultsum
let colss = document.querySelectorAll('.numberview .cols')


let countrytablename = document.querySelectorAll('.countryname')
let countrytable1990 = document.querySelectorAll('.country1990')
let countrytable1995 = document.querySelectorAll('.country1995')
let countrytable2000 = document.querySelectorAll('.country2000')
let countrytable2005 = document.querySelectorAll('.country2005')



for (let i = 0; i < timedot.length; i++) {
    timedot[i].addEventListener('click', function () {
        for (let j = 0; j < timedot.length; j++) {
            timedot[j].style.background = 'white'
        }
        this.style.background = 'blue';
        yeardot = `${1990+i*5}`
    })
}

let pietablehead = document.querySelectorAll('#pietable .head')
let pietablebody = document.querySelectorAll('#pietable .body')

function worldexcel() {
    var myChart = echarts.init(document.getElementById('community'));
    var option = {
        title: {
            text: '迁入迁出可视化',
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            type: 'piecewise',
            pieces: [{
                    min: 6,
                    max: 6,
                    color: '#A40004'
                },
                {
                    min: 5,
                    max: 5,
                    color: '#ff3d00'
                },
                {
                    min: 4,
                    max: 4,
                    color: '#ff6e40'
                },
                {
                    min: 3,
                    max: 3,
                    color: '#ff9473'
                },
                {
                    min: 2,
                    max: 2,
                    color: '#f9b196'
                },
                {
                    min: 1,
                    max: 1,
                    color: '#fee7d6'
                }
            ]
        },

        series: [{
            name: '社区',
            type: 'map',
            mapType: 'world',
            left: '20px',
            selectedMode: 'multiple',
            showLegendSymbol: false,
            data: [
                {
                    name: 'China',
                    value: 6
                },
                {
                    name: 'Canada',
                    value: 5
                },
                {
                    name: 'Japan',
                    value: 4
                },
                {
                    name: 'United States',
                    value: 3
                },
                {
                    name: 'Australia',
                    value: 2
                },
                {
                    name: 'Angola',
                    value: 1
                },
                {
                    name: 'Bahrain',
                    value: 5
                },
                {
                    name: 'Egypt',
                    value: 4
                },
                
               
            ]
        }]
    };
    myChart.setOption(option);
}


function barexcel(data11, data12, data13, data14) {
    // Bar chart
    new Chart(document.getElementById("chartjs-dashboard-bar"), {
        type: 'bar',
        data: {
            labels: [1990, 1995, 2000, 2005],
            datasets: [{
                label: "This year",
                backgroundColor: window.theme.primary,
                borderColor: window.theme.primary,
                hoverBackgroundColor: window.theme.primary,
                hoverBorderColor: window.theme.primary,
                data: [data11, data12, data13, data14],
                barPercentage: .75,
                categoryPercentage: .5
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20
                    }
                }],
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        color: "transparent"
                    }
                }]
            }
        }
    });
};


function linechart(ori1, ori2, ori3, ori4, data11, data12, data13, data14, data21, data22, data23, data24, data31, data32, data33, data34, data41, data42, data43, data44) {
    var myChart = echarts.init(document.getElementById('chartjs-dashboard-line'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '各国迁入总数变化'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { //坐标轴指示器
                type: 'cross', //十字准星指示器
                // label:{
                //     backgroundColor:'#ccc'
                // }
                crossStyle: {
                    color: "rgba(255,215,90)", //线的颜色
                    width: 1,
                    type: "solid",
                }
            },
        },
        legend: {
            data: ['迁入总数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            show: true,
            feature: { //区域缩放，区域缩放还原
                dataView: {
                    readOnly: false
                }, //数据视图
                magicType: {
                    type: ['line', 'bar']
                }, //切换为折线图，切换为柱状图
                restore: {}, //还原
                saveAsImage: {} //保存为图片
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1990, 1995, 2000, 2005]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: ori1,
                type: 'line',
                symbolSize: 5, // 设置折线上圆点大小
                symbol: 'circle', // 设置拐点为实心圆
                stack: 'Total',
                data: [data11, data12, data13, data14]
            },
            {
                name: ori2,
                type: 'line',
                symbolSize: 5, // 设置折线上圆点大小
                symbol: 'circle', // 设置拐点为实心圆
                stack: 'Total',
                data: [data21, data22, data23, data24]
            },
            {
                name: ori3,
                type: 'line',
                symbolSize: 5, // 设置折线上圆点大小
                symbol: 'circle', // 设置拐点为实心圆
                stack: 'Total',
                data: [data31, data32, data33, data34]
            },
            {
                name: ori4,
                type: 'line',
                symbolSize: 5, // 设置折线上圆点大小
                symbol: 'circle', // 设置拐点为实心圆
                stack: 'Total',
                data: [data41, data42, data43, data44]
            },
        ]
    };
    // 使刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function linezong(data11, data12, data13, data14) {
    var myChart = echarts.init(document.getElementById('chartjs-dashboard-linezong'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '各国迁入总数变化'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { //坐标轴指示器
                type: 'cross', //十字准星指示器
                // label:{
                //     backgroundColor:'#ccc'
                // }
                crossStyle: {
                    color: "rgba(255,215,90)", //线的颜色
                    width: 1,
                    type: "solid",
                }
            },
        },
        legend: {
            data: ['迁入总数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            show: true,
            feature: { //区域缩放，区域缩放还原
                dataView: {
                    readOnly: false
                }, //数据视图
                magicType: {
                    type: ['line', 'bar']
                }, //切换为折线图，切换为柱状图
                restore: {}, //还原
                saveAsImage: {} //保存为图片
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1990, 1995, 2000, 2005]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: "总数",
            type: 'line',
            symbolSize: 5, // 设置折线上圆点大小
            symbol: 'circle', // 设置拐点为实心圆
            stack: 'Total',
            data: [data11, data12, data13, data14]
        }, ]
    };
    // 使刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function newchart(ori1, ori2, ori3, data1, data2, data3) {
    new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: 'pie',
        data: {
            labels: [ori1, ori2, ori3],
            datasets: [{
                data: [data1, data2, data3],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger
                ],
                borderWidth: 5
            }]
        },
        options: {
            responsive: !window.MSInputMethodContext,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });
    pietablebody[0].innerHTML = data1
    pietablebody[1].innerHTML = data2
    pietablebody[2].innerHTML = data3
    pietablehead[0].innerHTML = ori1
    pietablehead[1].innerHTML = ori2
    pietablehead[2].innerHTML = ori3
}
let con = ''
let result = []
//获取伪元素
submitcheck.addEventListener('click', function () {
    let sum1990 = 0
    let sum1995 = 0;
    let sum2000 = 0;
    let sum2005 = 0
    let sum = [0, 0, 0, 0]
    let year
    let beforecontent = switchBefore.content;
    if (beforecontent == '"入"') {
        boolen = true
        pietitle.innerHTML = '迁入国家排行饼图'
        hottitle.innerHTML = '迁入国家排行热点图'
        for (let i = 0; i < numbertitle.length; i++) {
            numbertitle[i].innerHTML = `${i*5+1990}年迁入总量`
        }
        linetitle.innerHTML = '迁入数据变化折线图'
        startitle.innerHTML = '迁入国家排行榜'
        exceltitle.innerHTML = '迁入国家直方图'
        con = (selectcountry.value + '_in').toLowerCase()
        $.when($.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/countryflow?table=${con}&flag=0`,
            changeOrigin: true,
            dataType: "json",
            success: function (re) {
                result = re
                res = result.slice(0, result.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if (((res[j]).countryflow_1995 + (res[j]).countryflow_1990 + (res[j]).countryflow_2005 + (res[j]).countryflow_2000) < ((res[j + 1]).countryflow_1995 + (res[j + 1]).countryflow_1990 + (res[j + 1]).countryflow_2005 + (res[j + 1]).countryflow_2000)) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }
                }
                resultsum = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_2000 < (res[j + 1]).countryflow_2000) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }

                }
                yearresult2000 = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_1995 < (res[j + 1]).countryflow_1995) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }

                }
                yearresult1995 = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_2005 < (res[j + 1]).countryflow_2005) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }

                }
                yearresult2005 = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_1990 < (res[j + 1]).countryflow_1990) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }
                }
                yearresult1990 = res.slice(0, res.length)
            }
        })).done(function () {
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < 4; j++) {
                    year = `countryflow_${j*5+1990}`
                    sum[j] += (result[i])[year]
                }
            }
            for (let i = 0; i < 4; i++) {
                numbersum[i].innerHTML = sum[i]
            }
            for (let i = 1; i < 4; i++) {
                if (sum[i] && sum[i - 1]) {
                    cosl = sum[i] - sum[i - 1]
                    if (cosl > 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = ` 增加<i class="mdi mdi-arrow-bottom-right">${cosl/sum[i-1]}%</i>`
                    } else if (cosl < 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = ` 减少<i class="mdi mdi-arrow-bottom-right">${cosl/sum[i-1]}%</i>`
                    } else {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = ` 无变化`
                    }
                } else if (sum[i] || sum[i - 1]) {
                    if (sum[i] == 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = `减少<i class="mdi mdi-arrow-bottom-right">${sum[i-1]}</i>`
                    }
                    if (sum[i - 1] == 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = ` 增加<i class="mdi mdi-arrow-bottom-right">${sum[i]}%</i>`
                    }
                } else {
                    colss[i].innerHTML = `<i class="mdi mdi-arrow-bottom-right">无变化</i>`
                }
            }
            switch ((yeardot - 1990) / 5 + 1) {
                case 1:
                    pieyear = yearresult1990;
                    newchart(pieyear[0].country_orig, pieyear[1].country_orig, pieyear[2].country_orig, pieyear[0].countryflow_1990, pieyear[1].countryflow_1990, pieyear[2].countryflow_1990)
                    break;
                case 2:
                    pieyear = yearresult1995
                    newchart(pieyear[0].country_orig, pieyear[1].country_orig, pieyear[2].country_orig, pieyear[0].countryflow_1995, pieyear[1].countryflow_1995, pieyear[2].countryflow_1995)
                    break;
                case 3:
                    pieyear = yearresult2000
                    newchart(pieyear[0].country_orig, pieyear[1].country_orig, pieyear[2].country_orig, pieyear[0].countryflow_2000, pieyear[1].countryflow_2000, pieyear[2].countryflow_2000)
                    break;
                case 4:
                    pieyear = yearresult2000
                    newchart(pieyear[0].country_orig, pieyear[1].country_orig, pieyear[2].country_orig, pieyear[0].countryflow_2005, pieyear[1].countryflow_2005, pieyear[2].countryflow_2005)
                    break;
            }
            for (let i = 0; i < countrytablename.length; i++) {
                countrytablename[i].innerHTML = resultsum[i].country_orig
                countrytable1990[i].innerHTML = resultsum[i].countryflow_1990
                countrytable1995[i].innerHTML = resultsum[i].countryflow_1995
                countrytable2000[i].innerHTML = resultsum[i].countryflow_2000
                countrytable2005[i].innerHTML = resultsum[i].countryflow_2005
            }

            for (let i = 0; i < resultsum.length; i++) {
                sum1990 += resultsum[i].countryflow_1990
                sum1995 += resultsum[i].countryflow_1995
                sum2000 += resultsum[i].countryflow_2000
                sum2005 += resultsum[i].countryflow_2005
            }
            linezong(sum1990, sum1995, sum2000, sum2005)
            barexcel(sum1990, sum1995, sum2000, sum2005)
            linechart(pieyear[0].country_orig, pieyear[1].country_orig, pieyear[2].country_orig, pieyear[3].country_orig, pieyear[0].countryflow_1990, pieyear[0].countryflow_1995, pieyear[0].countryflow_2000, pieyear[0].countryflow_2005, pieyear[1].countryflow_1990, pieyear[1].countryflow_1995, pieyear[1].countryflow_2000, pieyear[1].countryflow_2005, pieyear[2].countryflow_1990, pieyear[2].countryflow_1995, pieyear[2].countryflow_2000, pieyear[2].countryflow_2005, pieyear[3].countryflow_1990, pieyear[3].countryflow_1995, pieyear[3].countryflow_2000, pieyear[3].countryflow_2005)
        })
    } else {
        boolen = false
        pietitle.innerHTML = '迁出国家排行饼图'
        hottitle.innerHTML = '迁出国家排行热点图'
        for (let i = 0; i < numbertitle.length; i++) {
            numbertitle[i].innerHTML = `${i*5+1990}年迁出总量`
        }
        linetitle.innerHTML = '迁出数据变化折线图'
        startitle.innerHTML = '迁出国家排行榜'
        exceltitle.innerHTML = '迁出国家直方图'
        con = (selectcountry.value + '_out').toLowerCase()
        $.when($.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/countryflow?table=${con}&flag=0`,
            changeOrigin: true,
            dataType: "json",
            success: function (re) {
                result = re
                res = result.slice(0, result.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if (((res[j]).countryflow_1995 + (res[j]).countryflow_1990 + (res[j]).countryflow_2005 + (res[j]).countryflow_2000) < ((res[j + 1]).countryflow_1995 + (res[j + 1]).countryflow_1990 + (res[j + 1]).countryflow_2005 + (res[j + 1]).countryflow_2000)) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }
                }
                resultsum = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_2000 < (res[j + 1]).countryflow_2000) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }

                }
                yearresult2000 = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_1995 < (res[j + 1]).countryflow_1995) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }

                }
                yearresult1995 = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_2005 < (res[j + 1]).countryflow_2005) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }

                }
                yearresult2005 = res.slice(0, res.length)
                for (var i = 1; i < res.length; i++) {
                    for (var j = 0; j < res.length - i; j++) {
                        if ((res[j]).countryflow_1990 < (res[j + 1]).countryflow_1990) {
                            let temp = res[j]; //定义一个临时变量temp
                            res[j] = res[j + 1]
                            res[j + 1] = temp;
                        }
                    }
                }
                yearresult1990 = res.slice(0, res.length)
            }
        })).done(function () {
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < 4; j++) {
                    year = `countryflow_${j*5+1990}`
                    sum[j] += (result[i])[year]
                }
            }
            for (let i = 0; i < 4; i++) {
                numbersum[i].innerHTML = sum[i]
            }

            for (let i = 1; i < 4; i++) {
                if (sum[i] && sum[i - 1]) {
                    cosl = sum[i] - sum[i - 1]
                    if (cosl > 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = ` 增加<i class="mdi mdi-arrow-bottom-right">${cosl/sum[i-1]}%</i>`
                    } else if (cosl < 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = ` 减少<i class="mdi mdi-arrow-bottom-right">${cosl/sum[i-1]}%</i>`
                    } else {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = ` 无变化`
                    }
                } else if (sum[i] || sum[i - 1]) {
                    if (sum[i] == 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = `减少<i class="mdi mdi-arrow-bottom-right">${sum[i-1]}</i>`
                    }
                    if (sum[i - 1] == 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = ` 增加<i class="mdi mdi-arrow-bottom-right">${sum[i]}</i>`
                    }
                } else {
                    colss[i].innerHTML = `<i class="mdi mdi-arrow-bottom-right">无变化</i>`
                }
            }
            switch ((yeardot - 1990) / 5 + 1) {
                case 1:
                    pieyear = yearresult1990;
                    newchart(pieyear[0].country_dest, pieyear[1].country_dest, pieyear[2].country_dest, pieyear[0].countryflow_1990, pieyear[1].countryflow_1990, pieyear[2].countryflow_1990)
                    break;
                case 2:
                    pieyear = yearresult1995
                    newchart(pieyear[0].country_dest, pieyear[1].country_dest, pieyear[2].country_dest, pieyear[0].countryflow_1995, pieyear[1].countryflow_1995, pieyear[2].countryflow_1995)
                    break;
                case 3:
                    pieyear = yearresult2000
                    newchart(pieyear[0].country_dest, pieyear[1].country_dest, pieyear[2].country_dest, pieyear[0].countryflow_2000, pieyear[1].countryflow_2000, pieyear[2].countryflow_2000)
                    break;
                case 4:
                    pieyear = yearresult2000
                    newchart(pieyear[0].country_dest, pieyear[1].country_dest, pieyear[2].country_dest, pieyear[0].countryflow_2005, pieyear[1].countryflow_2005, pieyear[2].countryflow_2005)
                    break;
            }
            for (let i = 0; i < countrytablename.length; i++) {
                countrytablename[i].innerHTML = resultsum[i].country_dest
                countrytable1990[i].innerHTML = resultsum[i].countryflow_1990
                countrytable1995[i].innerHTML = resultsum[i].countryflow_1995
                countrytable2000[i].innerHTML = resultsum[i].countryflow_2000
                countrytable2005[i].innerHTML = resultsum[i].countryflow_2005
            }
            for (let i = 0; i < resultsum.length; i++) {
                sum1990 += resultsum[i].countryflow_1990
                sum1995 += resultsum[i].countryflow_1995
                sum2000 += resultsum[i].countryflow_2000
                sum2005 += resultsum[i].countryflow_2005
            }
            linezong(sum1990, sum1995, sum2000, sum2005)
            barexcel(sum1990, sum1995, sum2000, sum2005)
            linechart(pieyear[0].country_dest, pieyear[1].country_dest, pieyear[2].country_dest, pieyear[3].country_dest, pieyear[0].countryflow_1990, pieyear[0].countryflow_1995, pieyear[0].countryflow_2000, pieyear[0].countryflow_2005, pieyear[1].countryflow_1990, pieyear[1].countryflow_1995, pieyear[1].countryflow_2000, pieyear[1].countryflow_2005, pieyear[2].countryflow_1990, pieyear[2].countryflow_1995, pieyear[2].countryflow_2000, pieyear[2].countryflow_2005, pieyear[3].countryflow_1990, pieyear[3].countryflow_1995, pieyear[3].countryflow_2000, pieyear[3].countryflow_2005)
        })
    }
})