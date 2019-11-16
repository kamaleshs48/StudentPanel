$(document).ready(function () {
    $("#QuestionPaperId").val();
    var n = [{
        data: $("#leftQuestions").val(),
        color: "#FFC107",
        label: "Left Questions"
    }, {
        data: $("#correctQuestions").val(),
        color: "#8BC34A",
        label: "Correct Answers"
    }, {
        data: $("#wrongQuestions").val(),
        color: "#F44336",
        label: "Wrong Answers"
    }, ],
        t = [{
            data: 100 * $("#TimeTaken").val() / $("#Duration").val(),
            color: "#03A9F4",
            label: "Time Taken"
        }, {
            data: 100 * $("#leftTime").val() / $("#Duration").val(),
            color: "#8BC34A",
            label: "Time Left"
        }, ];
    $("#pie-chart")[0] && $.plot("#pie-chart", n, {
        series: {
            pie: {
                show: !0,
                stroke: {
                    width: 2
                }
            }
        },
        legend: {
            container: ".flc-pie",
            backgroundOpacity: .5,
            noColumns: 0,
            backgroundColor: "white",
            lineWidth: 0
        },
        grid: {
            hoverable: !0,
            clickable: !0
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%p.0%, %s",
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: !1,
            cssClass: "flot-tooltip"
        }
    });
    $("#donut-chart")[0] && $.plot("#donut-chart", t, {
        series: {
            pie: {
                innerRadius: .5,
                show: !0,
                stroke: {
                    width: 2
                }
            }
        },
        legend: {
            container: ".flc-donut",
            backgroundOpacity: .5,
            noColumns: 0,
            backgroundColor: "white",
            lineWidth: 0
        },
        grid: {
            hoverable: !0,
            clickable: !0
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%p.0%, %s",
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: !1,
            cssClass: "flot-tooltip"
        }
    })
});
$(document).ready(function () {
    var n = [];
    n.push({
        data: [
            [1, 60],
            [2, 30],
            [3, 50],
            [4, 100],
            [5, 10],
            [6, 90],
            [7, 85]
        ],
        label: "Tokyo",
        bars: {
            show: !0,
            barWidth: .08,
            order: 1,
            lineWidth: 0,
            fillColor: "#8BC34A"
        }
    });
    n.push({
        data: [
            [1, 20],
            [2, 90],
            [3, 60],
            [4, 40],
            [5, 100],
            [6, 25],
            [7, 65]
        ],
        label: "Seoul",
        bars: {
            show: !0,
            barWidth: .08,
            order: 2,
            lineWidth: 0,
            fillColor: "#00BCD4"
        }
    });
    n.push({
        data: [
            [1, 100],
            [2, 20],
            [3, 60],
            [4, 90],
            [5, 80],
            [6, 10],
            [7, 5]
        ],
        label: "Beijing",
        bars: {
            show: !0,
            barWidth: .08,
            order: 3,
            lineWidth: 0,
            fillColor: "#FF9800"
        }
    });
    $("#bar-chart")[0] && $.plot($("#bar-chart"), n, {
        grid: {
            borderWidth: 1,
            borderColor: "#eee",
            show: !0,
            hoverable: !0,
            clickable: !0
        },
        yaxis: {
            tickColor: "#eee",
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: "normal",
                color: "#9f9f9f"
            },
            shadowSize: 0
        },
        xaxis: {
            tickColor: "#fff",
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: "normal",
                color: "#9f9f9f"
            },
            shadowSize: 0
        },
        legend: {
            container: ".flc-bar",
            backgroundOpacity: .5,
            noColumns: 0,
            backgroundColor: "white",
            lineWidth: 0
        }
    });
    $(".flot-chart")[0] && ($(".flot-chart").bind("plothover", function (n, t, i) {
        if (i) {
            var r = i.datapoint[0].toFixed(2),
                u = i.datapoint[1].toFixed(2);
            $(".flot-tooltip").html(i.series.label + " of " + r + " = " + u).css({
                top: i.pageY + 5,
                left: i.pageX + 5
            }).show()
        } else $(".flot-tooltip").hide()
    }), $("<div class='flot-tooltip' class='chart-tooltip'><\/div>").appendTo("body"))
})