let submitcheck2 = document.querySelector(".submitcheck2");
let yearselect = document.querySelectorAll(".radiosel");
let inputori = document.getElementById("input-ori");
let inputdes = document.getElementById("input-des");
let yearcom = [];
let resultcom = [];
let resultcom_ = [];
let countrynameori = [];
let countrynamedes = [];
let coun = [];
let c;
let b = [];
let b_=[]
let c_;
let objectcou = [];
let oritext;
let destext;
let dsd=[]
let ods=[]

function migrationMap(coundata) {
  var migrationMapChart = echarts.init(
    document.getElementById("migrationMap1")
  );
  // 国家经纬度数据
  // 矢量图小图标，可以在（https://www.iconfont.cn/）下载需要的图标
  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  // 转换数据格式，将上面的Data数据加上经纬度
  // 航线颜色
  var color = ["#46bee9"];
  var series = [];

  series.push(
    {
      name: coundata[0].fromName,
      type: "lines",
      zlevel: 1,
      // 线特效的配置
      effect: {
        show: true,
        // 特效动画的时间
        period: 6,
        // 特效尾迹的长度
        trailLength: 0.7,
        // 特效标记的颜色
        color: "#fff",
        // 特效标记的大小
        symbolSize: 3,
      },
      lineStyle: {
        normal: {
          color: color[1],
          width: 0,
          // 边的曲度
          curveness: 0.2,
        },
      },
      data: coundata,
    },
    {
      name: coundata[0].fromName,
      type: "lines",
      // 大的zlevel值的图会放在小的上面
      zlevel: 2,
      // 线两端的标记类型(空，箭头)
      symbol: ["none", "arrow"],
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15,
      },
      lineStyle: {
        color: color[0],
        width: 1,
        opacity: 0.6,
        curveness: 0.2,
      },
      data: coundata,
    },
    {
      name: coundata[0].fromName,
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
        // if(val[2]>1000000){
        //   return val[2]/100000
        // }  
        // else if(val[2]>100000){
        //     return val/30000
        // }else if(val[2]>50000){
        //   return val[2]/5000
        // }else if(val[2]>10000){
        //   return val[2]/1000
        // }
        // else if(val[2]>5000){
        //   return val[2]/500
        // }
        // else if(val[2]>1000){
        //   return val[2]/100
        // }
        // else if(val[2]>500){
        //   return val[2]/50
        // }
        // else if(val[2]>100){
        //   return val[2]/20
        // }
        return val[2]/50000
      },
      itemStyle: {
          color: color[0]
      },
      // 格式化数据
      data: b
  }
  );

  console.log(series);
  var option = {
    backgroundColor: "#404a59",
    title: {
      text: "世界人口迁移图",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            " --> " +
            params.data.toName +
            "<br />" +
            "迁移总数：" +
            params.data.value
          );
        } else {
          return params.name;
        }
      },
    },
    geo: {
      map: "world",
      label: {
        show: false,
      },
      roam: true,
      itemStyle: {
        areaColor: "#323c48",
        borderColor: "#404a59",
      },
      emphasis: {
        label: {
          show: true,
        },
        itemStyle: {
          areaColor: "#2a333d",
        },
      },
    },
    series: series,
  };
  migrationMapChart.setOption(option);
}

function migrationMap1(coundata) {
    var migrationMapChart = echarts.init(
      document.getElementById("migrationMap1")
    );
    // 国家经纬度数据
    // 矢量图小图标，可以在（https://www.iconfont.cn/）下载需要的图标
    var planePath =
      "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    // 转换数据格式，将上面的Data数据加上经纬度
    // 航线颜色
    var color = ["#46bee9"];
    var series = [];
  
    series.push(
      {
        name: coundata[0].toName,
        type: "lines",
        zlevel: 1,
        // 线特效的配置
        effect: {
          show: true,
          // 特效动画的时间
          period: 6,
          // 特效尾迹的长度
          trailLength: 0.7,
          // 特效标记的颜色
          color: "#fff",
          // 特效标记的大小
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[1],
            width: 0,
            // 边的曲度
            curveness: 0.2,
          },
        },
        data: coundata,
      },
      {
        name: coundata[0].toName,
        type: "lines",
        // 大的zlevel值的图会放在小的上面
        zlevel: 2,
        // 线两端的标记类型(空，箭头)
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          color: color[0],
          width: 1,
          opacity: 0.6,
          curveness: 0.2,
        },
        data: coundata,
      },
      {
        name: coundata[0].fromName,
        // 带有涟漪特效动画的散点（气泡）图
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        // 涟漪特效相关配置
        rippleEffect: {
          // 波纹的绘制方式,可选 'stroke' 和 'fill'
          brushType: "stroke",
        },
        label: {
          show: true,
          position: "right",
          formatter: "{b}",
        },
        symbolSize: function (val) {
          return val[2] / 50000;
        },
        itemStyle: {
          color: color[0],
        },
        // 格式化数据
        data: b_,
      }
    );
  
    console.log(series);
    var option = {
      backgroundColor: "#404a59",
      title: {
        text: "世界人口迁移图",
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "item",
        formatter: function (params, ticket, callback) {
          if (params.seriesType == "lines") {
            return (
              params.data.fromName +
              " --> " +
              params.data.toName +
              "<br />" +
              "迁移总数：" +
              params.data.value
            );
          } else {
            return params.name;
          }
        },
      },
      geo: {
        map: "world",
        label: {
          show: false,
        },
        roam: true,
        itemStyle: {
          areaColor: "#323c48",
          borderColor: "#404a59",
        },
        emphasis: {
          label: {
            show: true,
          },
          itemStyle: {
            areaColor: "#2a333d",
          },
        },
      },
      series: series,
    };
    migrationMapChart.setOption(option);
  }

submitcheck2.addEventListener("click", function () {
  objectcou = [];
  countrynameori = [];
  countrynamedes = [];
  coun = [];
  resultcom = [];
  resultcom_ = [];
  for (let i = 0; i < yearselect.length; i++) {
    if (yearselect[i].checked) {
      yearcom.push(i);
    }
  }
  oritext = inputori.value;
  destext = inputdes.value;
  if (oritext || destext) {
    if (oritext) {
      lowori = (oritext + "_out").toLowerCase();
      $.when(
        $.ajax({
          type: "get",
          url: `http://43.143.132.59:8080/countryflow?table=${lowori}&flag=0`,
          changeOrigin: true,
          dataType: "json",
          success: function (res) {
            if (destext) {
              for (let i = 0; i < res.length; i++) {
                if (res[i].country_dest == destext) {
                  resultcom.push(res[i]);
                }
              }
            } else {
              resultcom = res;
            }
            resultcom.forEach(function (ele) {
              var name1 = ele.country_dest;
              var name2 = ele.country_orig;
              var con = 0;
              for (var i = 0; i < yearcom.length; i++) {
                if (yearcom[i] == 0) {
                  con += ele.countryflow_1990;
                } else if (yearcom[i] == 1) {
                  con += ele.countryflow_1995;
                } else if (yearcom[i] == 2) {
                  con += ele.countryflow_2000;
                } else {
                  con += ele.countryflow_2005;
                }
              }
              countrynamedes.push(name1);
              countrynameori.push(name2);
              coun.push(con);
            });
            for (let i = 0; i < coun.length; i++) {
              var fromCoord = geoCoordMap[countrynameori[i]];
              // 到达城市的经纬度
              var toCoord = geoCoordMap[countrynamedes[i]];

              if (coun[i] != 0) {
                if (fromCoord && toCoord) {
                  dsd=toCoord
                  dsd.push(coun[i])
                  b.push({
                    toName:countrynamedes[i],
                    value:dsd
                  })
                  objectcou.push({
                    fromName: countrynameori[i],
                    toName: countrynamedes[i],
                    coords: [fromCoord, toCoord],
                    value: coun[i],
                  });
                } else if (fromCoord || toCoord) {
                  if (fromCoord) {
                    objectcou.push({
                      fromName: countrynameori[i],
                      toName: countrynamedes[i],
                      coords: [fromCoord, fromCoord],
                      value: coun[i],
                    });
                  } else {
                    dsd=toCoord
                    dsd.push(coun[i])
                    objectcou.push({
                      
                      fromName: countrynameori[i],
                      toName: countrynamedes[i],
                      coords: [toCoord, toCoord],
                      value: coun[i],
                    });
                    b.push({
                      toName:countrynamedes[i],
                      value:dsd
                    })
                  }
                } else {
                  objectcou.push({
                    fromName: countrynameori[i],
                    toName: countrynamedes[i],
                    coords: [geoCoordMap["China"], geoCoordMap["China"]],
                    value: coun[i],
                  });
                }
              }
            }
          },
        })
      ).done(function () {
        migrationMap(objectcou);
      });
    } else {
      lowdes = (destext + "_in").toLowerCase();
      $.ajax({
        type: "get",
        url: `http://43.143.132.59:8080/countryflow?table=${lowdes}&flag=0`,
        changeOrigin: true,
        dataType: "json",
        success: function (res) {
          console.log(res);
          if (oritext) {
            for (let i = 0; i < res.length; i++) {
              if (res[i].country_orig == oritext) {
                resultcom_.push(res[i]);
              }
            }
          } else {
            resultcom_ = res;
          }
          resultcom_.forEach(function (ele) {
            var name1 = ele.country_dest;
            var name2 = ele.country_orig;
            var con = 0;
            for (var i = 0; i < yearcom.length; i++) {
              if (yearcom[i] == 0) {
                con += ele.countryflow_1990;
              } else if (yearcom[i] == 1) {
                con += ele.countryflow_1995;
              } else if (yearcom[i] == 2) {
                con += ele.countryflow_2000;
              } else {
                con += ele.countryflow_2005;
              }
            }
            countrynamedes.push(name1);
            countrynameori.push(name2);
            coun.push(con);
          });
          for (let i = 0; i < coun.length; i++) {
            var fromCoord = geoCoordMap[countrynameori[i]];
            // 到达城市的经纬度
            var toCoord = geoCoordMap[countrynamedes[i]];

            if (coun[i] != 0) {
              if (fromCoord && toCoord) {
                ods=fromCoord
                ods.push(coun[i])
                b_.push({
                  toName:countrynameori[i],
                  value:ods
                })
                objectcou.push({
                  fromName: countrynameori[i],
                  toName: countrynamedes[i],
                  coords: [fromCoord, toCoord],
                  value: coun[i],
                });
              } else if (fromCoord || toCoord) {
                if (fromCoord) {
                  ods=fromCoord
                  ods.push(coun[i])
                  b_.push({
                    toName:countrynameori[i],
                    value:ods
                  })
                  objectcou.push({
                    fromName: countrynameori[i],
                    toName: countrynamedes[i],
                    coords: [fromCoord, fromCoord],
                    value: coun[i],
                  });
                } else {
                  objectcou.push({
                    fromName: countrynameori[i],
                    toName: countrynamedes[i],
                    coords: [toCoord, toCoord],
                    value: coun[i],
                  });
                }
              } else {
                objectcou.push({
                  fromName: countrynameori[i],
                  toName: countrynamedes[i],
                  coords: [geoCoordMap["China"], geoCoordMap["China"]],
                  value: coun[i],
                });
              }
            }
          }
          migrationMap1(objectcou,b);
        },
      });
    }
  }
});
