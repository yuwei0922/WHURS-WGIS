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
console.log(yearresult1990)
let colss = document.querySelectorAll('.numberview .cols')
for (let i = 0; i < timedot.length; i++) {
    timedot[i].addEventListener('click', function () {
        for (let j = 0; j < timedot.length; j++) {
            timedot[j].style.background = 'white'
        }
        this.style.background = 'blue';
        yeardot = `${1990+i*5}`
    })
}
let con = ''
let result = []
function up(a,b){
    return a.countryflow_1990-b.countryflow_1990                              
}
//获取伪元素
submitcheck.addEventListener('click', function () {
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
                        success: function (res) {
                            res.sort(up)
                            yearresult1990=res
                            for (var i = 1; i < res.length; i++) {
                                for (var j = 0; j < res.length - i; j++) {
                                    if ((res[j]).countryflow_2000 > (res[j+1]).countryflow_2000) {
                                        let temp = res[j];
                                        console.log(res[j]) //定义一个临时变量temp
                                        res[j]= res[j+1]
                                        res[j+1] = temp;
                                        console.log(res[j])
                                    }
                                }
                               
                            }
                            yearresult2000=res
                            for (var i = 1; i < res.length; i++) {
                                for (var j = 0; j < res.length - i; j++) {
                                    if ((res[j]).countryflow_1995 > (res[j+1]).countryflow_1995) {
                                        let temp = res[j]; //定义一个临时变量temp
                                        res[j]= res[j+1]
                                        res[j+1] = temp;
                                    }
                                }
                              
                            }
                            yearresult1995=res
                            for (var i = 1; i < res.length; i++) {
                                for (var j = 0; j < res.length - i; j++) {
                                    if ((res[j]).countryflow_2005 > (res[j+1]).countryflow_2005) {
                                        let temp = res[j]; //定义一个临时变量temp
                                        res[j]= res[j+1]
                                        res[j+1] = temp;
                                    }
                                }
                               
                            }
                            yearresult2005=res
                            for (var i = 1; i < res.length; i++) {
                                for (var j = 0; j < res.length - i; j++) {
                                    if (((res[j]).countryflow_1995+(res[j]).countryflow_1990+(res[j]).countryflow_2005+(res[j]).countryflow_2000 )>((res[j+1]).countryflow_1995+(res[j+1]).countryflow_1990+(res[j+1]).countryflow_2005+(res[j+1]).countryflow_2000  )) {
                                        let temp = res[j]; //定义一个临时变量temp
                                        res[j]= res[j+1]
                                        res[j+1] = temp;
                                    }
                                }
                            }
                            result=res
                        }})).done(function () {
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
                        new Chart(document.getElementById("chartjs-dashboard-pie"), {
                            type: 'pie',
                            data: {
                                labels: [, "Firefox", "IE"],
                                datasets: [{
                                    data: [4306, 3801, 1689],
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
                    })
                }
                else {
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
                        success: function (res) {
                            result = res
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
                    })
                }
            })