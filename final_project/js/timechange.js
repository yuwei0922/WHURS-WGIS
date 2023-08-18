let timedotnumber = document.querySelectorAll(".timenumber .dot")
let ducenternumber = document.querySelector('.ducenternumber')
let dunumber = document.querySelector('.dunumber')
let strengthnumber = document.querySelector('.strengthnumber')
let yeardot1
let tabledegree
let tablecen
let tablestrengh
let tablecom


let resultdegree
let resultcen
let resultstrength
let resultcommuity

let selectcountry1 = document.querySelector('#selectcountry')
var myChart = echarts.init(document.getElementById('chartjs-dashboard-line-com'));
var centralityChart = echarts.init(document.getElementById('chartjs-dashboard-line'));

function paihang(yeardot1) {
    var myChart = echarts.init(document.getElementById('paimingcharts'));
    if (yeardot1 == 1990) {
        var ydata = ["Ireland", "New Zealand", "Switzerland", "Netherlands", "Australia", "Italy", "France", "Canada", "Russia", "USA"];
        var xdata = [181518, 194793, 285425, 357922, 781753, 954248, 1026997, 1072195, 2312389, 6998762];
    } else if (yeardot1 == 1995) {
        var ydata = ["Ireland", "New Zealand", "Netherlands", "South Africa", "Australia", "Italy", "France", "Canada", "Russia", "USA"];
        var xdata = [135269, 196853, 371285, 401875, 711138, 881603, 1040607, 1306593, 2289701, 8768879];
    } else if (yeardot1 == 2000) {
        var ydata = ["Greece", "Netherlands", "Switzerland", "Brazil", "Australia", "Canada", "France", "Italy", "UK", "USA"];
        var xdata = [233701, 440739, 473434, 604858, 1160474, 1349258, 1646388, 1867347, 2172455, 9365480];
    } else {
        var ydata = ["Sweden", "Netherlands", "Switzerland", "Brazil", "Canada", "Australia", "France", "Italy", "UK", "USA"];
        var xdata = [37726, 427468, 481076, 598502, 1403437, 1498749, 1627498, 2035683, 2366197, 8681796];
    }
    var option = {
        title: {
            text: '迁移总数'
        },
        tooltip: {
            trigger: "axis",
        },
        grid: {
            left: "80",
            right: "40",
            bottom: "20",
            top: "50",
            containLabel: false,
        },
        xAxis: {
            type: "value",
            show: false,
        },
        yAxis: {
            type: "category",
            data: ydata,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 70,
                width: 60,
                align: "left",
                overflow: "truncate",
                formatter: function (value, index) {
                    let ind = index + 1;
                    if (ind == ydata.length) {
                        return "{one|" + (ydata.length - index) + "} {a|" + value + "}";
                    } else if (ind + 1 == ydata.length) {
                        return "{two|" + (ydata.length - index) + "} {b|" + value + "}";
                    } else if (ind + 2 == ydata.length) {
                        return (
                            "{three|" + (ydata.length - index) + "} {c|" + value + "}"
                        );
                    }
                    if (ydata.length - index > 9) {
                        return (
                            "{five|" + (ydata.length - index) + "} {d|" + value + "}"
                        );
                    }
                    return "{four|" + (ydata.length - index) + "} {d|" + value + "}";
                },
                rich: {
                    a: {
                        color: "#59c9f9",
                    },
                    b: {
                        color: "#59c9f9",
                    },
                    c: {
                        color: "#59c9f9",
                    },
                    d: {
                        color: "#59c9f9",
                    },
                    // 第一名
                    one: {
                        backgroundColor: "#E86452",
                        color: "white",
                        width: 12,
                        height: 16,
                        padding: [1, 0, 0, 5],
                        borderRadius: 10,
                        fontSize: 11,
                    },
                    // 第二名
                    two: {
                        backgroundColor: "#FF9845",
                        color: "white",
                        width: 12,
                        height: 16,
                        padding: [1, 0, 0, 5],
                        borderRadius: 10,
                        fontSize: 11,
                    },
                    // 第三名
                    three: {
                        backgroundColor: "#F6BD16",
                        color: "white",
                        width: 12,
                        height: 16,
                        padding: [1, 0, 0, 5],
                        borderRadius: 10,
                        fontSize: 11,
                    },
                    // 一位数
                    four: {
                        backgroundColor: "rgba(0,0,0,0.15)",
                        color: "white",
                        width: 12,
                        height: 16,
                        padding: [1, 0, 0, 5],
                        borderRadius: 10,
                        fontSize: 11,
                    },
                    // 两位数
                    five: {
                        backgroundColor: "rgba(0,0,0,0.15)",
                        color: "white",
                        width: 16,
                        height: 16,
                        padding: [1, 0, 0, 1],
                        borderRadius: 10,
                        fontSize: 11,
                    },
                },
            },
        },
        series: [{
            name: '迁移人口数量',
            type: "bar",
            showBackground: true,
            label: {
                show: true,
                position: "right",
                color: "rgba(0,0,0,0.45)",
            },
            barWidth: 20,
            itemStyle: {
                color: "#5B8FF9",
            },
            data: xdata
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


function Replace(oldVal, newVal, json) {
    for (var i in json) {
        for (var j in json[i]) {
            if (j == oldVal) {
                json[i][newVal] = json[i][j] //修改属性名为newVal
                delete json[i][oldVal] //删除oldVal
            }
        }
    }
};

for (let i = 0; i < timedotnumber.length; i++) {
    timedotnumber[i].addEventListener('click', function () {
        this.style.cursor = 'pointer'
        for (let j = 0; j < timedotnumber.length; j++) {
            timedotnumber[j].style.background = 'white'
        }
        this.style.background = 'blue';
        yeardot1 = `${1990 + i * 5}`
        tabledegree = 'degree_' + yeardot1
        tablecen = 'centrality_' + yeardot1
        tablestrengh = 'strength_' + yeardot1
        tablecom = 'community_' + yeardot1
        $.when($.ajax({
            type: "get",
            url: `http://43.143.132.59:8080/degree?table=${tabledegree}`,
            changeOrigin: true,
            dataType: "json",
            success: function (res) {
                resultdegree = res
            }
        }),
            $.ajax({
                type: "get",
                url: `http://43.143.132.59:8080/strength?table=${tablestrengh}`,
                changeOrigin: true,
                dataType: "json",
                success: function (res) {
                    resultstrength = res
                }
            }),
            $.ajax({
                type: "get",
                url: `http://43.143.132.59:8080/centrality?table=${tablecen}`,
                changeOrigin: true,
                dataType: "json",
                success: function (res) {
                    resultcen = res
                }
            }).done(function () {
                paihang(yeardot1)
                let top10 = [];
                for (let i = 0; i < 10; i++) {
                    top10[i] = JSON.parse(JSON.stringify(resultcen[i]));
                }
                //打印前十
                console.log(top10);
                //设置图表
                centralityChart.hideLoading();
                //更换字段名
                Replace("country", "name", top10);
                Replace("centrality", "value", top10);
                // let mi = top10[9].value;
                // let ma = top10[0].value;
                // for (let i = 0; i < 10; i++) {
                //     top10[i].value = 100 * (top10[i].value - mi) / (ma - mi);
                // }
                option = {
                    title: {
                        text: '移民热点',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        showDelay: 0,
                        transitionDuration: 0.2
                    },
                    visualMap: {
                        top: '70%',
                        left: '5%',
                        type: 'continuous',
                        align: "right",
                        min: top10[9].value,
                        max: top10[0].value,
                        inRange: {
                            color: [
                                '#ffb3a7',
                                '#f20c00'
                            ]
                        },
                        text: [top10[0].value.toString(), top10[9].value.toString()],
                        calculable: false
                    },
                    series: [{
                        name: '移民热点',
                        type: 'map',
                        map: 'world',
                        data: top10
                    }]
                };
                centralityChart.setOption(option);
            }),
            $.ajax({
                type: "get",
                url: `http://43.143.132.59:8080/community?table=${tablecom}`,
                changeOrigin: true,
                dataType: "json",
                success: function (res) {
                    resultcommuity = res
                }
            })).done(function () {
                for (let i = 0; i < resultdegree.length; i++) {
                    if (resultdegree[i].country == selectcountry1.value) {
                        dunumber.innerHTML = resultdegree[i].degree;
                        strengthnumber.innerHTML = resultstrength[i].strength
                        ducenternumber.innerHTML = resultcen[i].centrality.toFixed(6)
                    }
                }
                var maximum = 0;
                for (let i = 0; i < resultcommuity.length; i++) {
                    let pojo = resultcommuity[i];
                    if (pojo.value > maximum) {
                        maximum = pojo.value;
                    }
                }
                myChart.hideLoading();
                option = {
                    title: {
                        text: 'Community Detection',
                        subtext: 'powered by Python',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        showDelay: 0,
                        transitionDuration: 0.2
                    },
                    visualMap: {
                        top: '70%',
                        left: '5%',
                        type: 'piecewise',
                        align: "right",
                        min: 0,
                        max: maximum,
                        inRange: {
                            color: [
                                '#bd6b08',
                                '#00686b',
                                '#c82d31',
                                '#625ba1',
                                '#898989',
                                '#9c9800',
                                '#d223e7',
                                '#a195c5',
                                '#103667',
                                '#f19272'
                            ]
                        },
                        text: [maximum.toString(), '0'],
                        calculable: true
                    },
                    series: [{
                        name: '社区检测',
                        type: 'map',
                        map: 'world',
                        data: resultcommuity
                    }]
                };
                myChart.setOption(option);
            })
    })
}