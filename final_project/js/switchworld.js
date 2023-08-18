let labelswitchw = document.querySelector('.check-boxworld')
let toggle_switchw = document.querySelector('.check-handlerworld')
let switchBeforew = window.getComputedStyle(toggle_switchw, '::before');
let submitcheckw = document.querySelector('.submitcheckworld')

// let exceltitleworld=document.querySelector('.exceltitleworld')
let boolenw = true
let pietitleworld = document.getElementById('pietitleworld')
// let startitleworld = document.querySelector('.startitleworld')
// let hottitleworld=document.getElementById('hottitleworld')
let numbertitleworld = document.querySelectorAll('#numberandlineworld .numberviewworld h5')
// let linetitleworld = document.querySelector('.linetitleworld')
let selectworld = document.querySelector('#selectworld')
let timedotworld = document.querySelectorAll(".timecontainerworld .dot")
let numbersum = document.querySelectorAll(".numbersum")
let colss = document.querySelectorAll('.numberviewworld .mdi-arrow-bottom-right');
// let yeardotworld

// for (let i = 0; i < timedotworld.length; i++) {
//     timedotworld[i].addEventListener('click', function () {
//         for (let j = 0; j < timedotworld.length; j++) {
//             timedotworld[j].style.background = 'white'
//         }
//         this.style.background = 'blue';
//         yeardotworld = `${1990 + i * 5}`
//     })
// }

//定义饼图
let pietablehead = document.querySelectorAll('#pietable .head')
let pietablebody = document.querySelectorAll('#pietable .body')
function newchart(ori1, ori2, ori3, ori4, data1, data2, data3, data4) {
    new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: 'pie',
        data: {
            labels: [ori1, ori2, ori3, ori4],
            datasets: [{
                data: [data1, data2, data3, data4],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger,
                    window.theme.success
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
    pietablebody[3].innerHTML = data4
    pietablehead[0].innerHTML = ori1
    pietablehead[1].innerHTML = ori2
    pietablehead[2].innerHTML = ori3
    pietablehead[3].innerHTML = ori4
}


//定义折线图
function linechart(data11, data12, data13, data14) {
    var myChart = echarts.init(document.getElementById('chartjs-dashboard-lineworld'));
    // 指定图表的配置项和数据
    var option = {
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
            data: ['迁移总数']
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

let conworld = ''
let resultworld = []
//获取伪元素
submitcheckw.addEventListener('click', function () {
    let beforecontentw = switchBeforew.content;
    if (beforecontentw == '"入"') {
        boolenw = true
        pietitleworld.innerHTML = '迁入数量饼图'
        // hottitleworld.innerHTML='迁入区域折线图'
        for (let i = 0; i < numbertitleworld.length; i++) {
            numbertitleworld[i].innerHTML = `${i * 5 + 1990}年迁入总量`
        }
        // linetitleworld.innerHTML = '迁入区域折线图'
        // startitleworld.innerHTML = '迁入区域时间展示'
        // exceltitleworld.innerHTML='迁入区域直方图'
        conworld = (selectworld.value + '_in')
        $.ajax({
            type: "get",
            url: `http://43.143.132.59:8080//regionflow?region=${conworld}`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                resultworld = res
                console.log(res)
            }
        }).done(function () {
            newchart("1990", "1995", "2000", "2005", resultworld[0].time1990, resultworld[0].time1995, resultworld[0].time2000, resultworld[0].time2005);
            linechart(resultworld[0].time1990, resultworld[0].time1995, resultworld[0].time2000, resultworld[0].time2005);
            let sum = [0, 0, 0, 0];
            sum[0] = resultworld[0].time1990;
            sum[1] = resultworld[0].time1995;
            sum[2] = resultworld[0].time2000;
            sum[3] = resultworld[0].time2005;
            for (let i = 0; i < 4; i++) {
                numbersum[i].innerHTML = sum[i]
            }
            for (let i = 1; i < 4; i++) {
                if (sum[i] && sum[i - 1]) {
                    cosl = sum[i] - sum[i - 1]
                    if (cosl > 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = `${cosl / sum[i - 1]}%`
                    } else if (cosl < 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = `${cosl / sum[i - 1]}%`
                    } else {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = ` 无变化`
                    }
                } else if (sum[i] || sum[i - 1]) {
                    if (sum[i] == 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = `${sum[i - 1]}%`
                    }
                    if (sum[i - 1] == 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = `${sum[i]}%`
                    }
                } else {
                    colss[i].innerHTML = `无变化`
                }
            }

        })
    }
    else {
        boolenw = false
        pietitleworld.innerHTML = '迁出数量饼图'
        // hottitleworld.innerHTML='迁出区域折线图'
        for (let i = 0; i < numbertitleworld.length; i++) {
            numbertitleworld[i].innerHTML = `${i * 5 + 1990}年迁出总量`
        }
        // linetitleworld.innerHTML = '迁出区域折线图'
        // startitleworld.innerHTML = '迁出区域排行榜'
        // exceltitleworld.innerHTML='迁出区域直方图'
        conworld = (selectworld.value + '_out')
        $.ajax({
            type: "get",
            url: `http://43.143.132.59:8080//regionflow?region=${conworld}`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                resultworld = res
            }
        }).done(function () {
            newchart("1990", "1995", "2000", "2005", resultworld[0].time1990, resultworld[0].time1995, resultworld[0].time2000, resultworld[0].time2005);
            linechart(resultworld[0].time1990, resultworld[0].time1995, resultworld[0].time2000, resultworld[0].time2005);
            let sum = [0, 0, 0, 0];
            sum[0] = resultworld[0].time1990;
            sum[1] = resultworld[0].time1995;
            sum[2] = resultworld[0].time2000;
            sum[3] = resultworld[0].time2005;
            for (let i = 0; i < 4; i++) {
                numbersum[i].innerHTML = sum[i]
            }
            for (let i = 1; i < 4; i++) {
                if (sum[i] && sum[i - 1]) {
                    cosl = sum[i] - sum[i - 1]
                    if (cosl > 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = `${cosl / sum[i - 1]}%`
                    } else if (cosl < 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = `${cosl / sum[i - 1]}%`
                    } else {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = ` 无变化`
                    }
                } else if (sum[i] || sum[i - 1]) {
                    if (sum[i] == 0) {
                        colss[i].classList.add('text-danger')
                        colss[i].innerHTML = `${sum[i - 1]}%`
                    }
                    if (sum[i - 1] == 0) {
                        colss[i].classList.add('text-success')
                        colss[i].innerHTML = `${sum[i]}%`
                    }
                } else {
                    colss[i].innerHTML = `无变化`
                }
            }
        })
    }
})



