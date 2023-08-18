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

let oritext
let destext
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
                        coun.push(con)
                    })
                    c = countryname.map((name, i) => ({
                        name,
                        value: coun[i]
                    }))
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