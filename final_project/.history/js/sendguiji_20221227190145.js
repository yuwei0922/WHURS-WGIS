let submitcheck2 = document.querySelector('.submitcheck2')
let yearselect = document.querySelectorAll('.radiosel')
let inputori = document.getElementById('input-ori')
let inputdes = document.getElementById('input-des')
let yearcom = []
let resultcom = []
let resultcom_ = []
let countrynameori = []
let countrynamedes = []
let coun = []
let c
let c_
let objectcou=[]
let oritext
let destext

function migrationMap() {
    var migrationMapChart = echarts.init(document.getElementById('migrationMap'));
    // 国家经纬度数据
var ZGData = [
[{name: 'China'}, {name: "Canada",value: 80}],
[{name: 'China'}, {name: "United States",value: 100}],
[{name: 'China'}, {name: "Australia",value: 95}],
[{name: 'China'}, {name: "Switzerland",value: 30}],
[{name: 'China'}, {name: "Finland",value: 50}],
[{name: 'China'}, {name: "Germany",value: 150}],
[{name: 'China'}, {name: "Japan",value: 200}],
[{name: 'China'}, {name: "United Kingdom",value: 20}]
];

    // 矢量图小图标，可以在（https://www.iconfont.cn/）下载需要的图标
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    // 转换数据格式，将上面的Data数据加上经纬度
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            // 出发城市的经纬度
            var fromCoord = geoCoordMap[dataItem[1].name];
            // 到达城市的经纬度
            var toCoord = geoCoordMap[dataItem[0].name];
            // 如果都有对应的值，则生成下面一个json数组
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[1].name,
                    toName: dataItem[0].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    // 航线颜色
    var color = ['#46bee9'];
    var series = [];
    [['China', ZGData]].forEach(function (item, i) {
        console.log(item)
        series.push({
                name: item[0],
                type: 'lines',
                zlevel: 1,
                // 线特效的配置
                effect: {
                    show: true,
                    // 特效动画的时间
                    period: 6,
                    // 特效尾迹的长度
                    trailLength: 0.7,
                    // 特效标记的颜色
                    color: '#fff',
                    // 特效标记的大小
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        // 边的曲度
                        curveness: 0.2
                    }
                },

                data: convertData(item[1])
            },
            {
                name: item[0],
                type: 'lines',
                // 大的zlevel值的图会放在小的上面
                zlevel: 2,
                // 线两端的标记类型(空，箭头)
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                },
                data: convertData(item[1])
            },
            {
                name: item[0],
                // 带有涟漪特效动画的散点（气泡）图
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                // 涟漪特效相关配置
                rippleEffect: {
                    // 波纹的绘制方式,可选 'stroke' 和 'fill'
                    brushType: 'stroke'
                },
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    color: color[i]
                },
                // 格式化数据
                data: item[1].map(function (dataItem) {
                    // 给散点增加一个value维度，数组长度由2变成3，加上了散点发散效果（以值控制发散效果的大小）
                    console.log([dataItem[1].value])
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });

    var option = {
        backgroundColor: '#404a59',
        title: {
            text: '世界人口迁移图',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "lines") {
                    return params.data.fromName + " --> " + params.data.toName + "<br />" + "迁移总数：" + params.data.value;
                } else {
                    return params.name; } }
                },
        geo: {
            map: 'world',
            label: {
                show: false
            },
            roam: true,
            itemStyle: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },

            emphasis: {
                label: {
                    show: true
                },
                itemStyle: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };
    migrationMapChart.setOption(option)
}

submitcheck2.addEventListener('click', function () {
    resultcom = []
    resultcom_ = []
    for (let i = 0; i < yearselect.length; i++) {
        if (yearselect[i].checked) {
            yearcom.push(i)
        }
    }
    oritext = inputori.value;
    destext = inputdes.value;
    if (oritext || destext) {
        if (oritext) {
            lowori = (oritext + '_out').toLowerCase()
            $.when($.ajax({
                type: "get",
                url: `http://43.143.132.59:8080/countryflow?table=${lowori}&flag=0`,
                changeOrigin: true,
                dataType: "json",
                success: function (res) {
                    if (destext) {
                        for (let i = 0; i < res.length; i++) {
                            if (res[i].country_dest == destext) {
                                resultcom.push(res[i])
                            }
                        }
                    } else {
                        resultcom = res
                    }
                    resultcom.forEach(function (ele) {
                        var name1 = ele.country_dest;
                        var name2 = ele.country_orig;
                        var con = 0;
                        for (var i = 0; i < yearcom.length; i++) {
                            if (yearcom[i] == 0) {
                                con += ele.countryflow_1990
                            } else if (yearcom[i] == 1) {
                                con += ele.countryflow_1995
                            } else if (yearcom[i] == 2) {
                                con += ele.countryflow_2000
                            } else {
                                con += ele.countryflow_2005
                            }
                        }
                        countrynamedes.push(name1)
                        countrynameori.push(name2)
                        coun.push(con)
                    })
                    for(let i=0;i<coun.length;i++){
                        var fromCoord = geoCoordMap[countrynameori[i]];
                        // 到达城市的经纬度
                        var toCoord = geoCoordMap[countrynamedes[i]];
                        objectcou.push({
                            fromName:countrynameori[i],
                            toName: countrynamedes[i],
                            coords: [fromCoord, toCoord],
                            value: coun[i]
                    })
                    }
                }
            })).done(function () {
            })
        } else {
            lowdes = (destext + '_in').toLowerCase()
            $.ajax({
                type: "get",
                url: `http://43.143.132.59:8080/countryflow?table=${lowdes}&flag=0`,
                changeOrigin: true,
                dataType: "json",
                success: function (res) {
                    console.log(res)
                    if (oritext) {
                        for (let i = 0; i < res.length; i++) {
                            if (res[i].country_orig == oritext) {
                                resultcom_.push(res[i])
                            }
                        }
                    } else {
                        resultcom_ = res
                    }
                    resultcom_.forEach(function (ele) {
                        var name1 = ele.country_orig;
                        var con = 0;
                        for (var i = 0; i < yearcom.length; i++) {
                            if (yearcom[i] == 0) {
                                con += ele.countryflow_1990
                            } else if (yearcom[i] == 1) {
                                con += ele.countryflow_1995
                            } else if (yearcom[i] == 2) {
                                con += ele.countryflow_2000
                            } else {
                                con += ele.countryflow_2005
                            }
                        }
                        countryname.push(name1)
                        coun.push(con)
                    })
                    c_ = countryname.map((name, i) => ({
                        name,
                        value: coun[i]
                    }))
                }
            });
        }
    }
})