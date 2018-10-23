$(function () {
    /**二级菜单*/
    $(".language").toggle(
        function () {
            $("#multi_language").show();
    },
        function () {
            $("#multi_language").hide();
        })
    $("#multi_language").mouseleave(function () {
        $("#multi_language").hide();
    })
    $("#nav_one").toggle(
        function () {
            $(".second_menu_container").hide();
            $(".second_menu_arrow").hide();
            $(".nav_arrow_one").show();
            $(".nav_one_contens").show();
        },
        function () {
            $(".nav_arrow_one").hide();
            $(".second_menu_container").hide();
        }
    )
    $("#nav_two").toggle(
        function () {
            $(".second_menu_container").hide();
            $(".second_menu_arrow").hide();
            $(".nav_arrow_two").show();
            $(".nav_two_contens").show();
        },
        function () {
            $(".nav_arrow_two").hide();
            $(".second_menu_container").hide();
        }
    )
    $("#nav_three").toggle(
        function () {
            $(".second_menu_container").hide();
            $(".second_menu_arrow").hide();
            $(".nav_arrow_three").show();
            $(".nav_three_contens").show();
        },
        function () {
            $(".nav_arrow_three").hide();
            $(".second_menu_container").hide();
        }
    )
    $("#nav_four").toggle(
        function () {
            $(".second_menu_container").hide();
            $(".second_menu_arrow").hide();
            $(".nav_arrow_four").show();
            $(".nav_four_contens").show();
        },
        function () {
            $(".nav_arrow_four").hide();
            $(".second_menu_container").hide();
        }
    )
    $("#nav_five").toggle(
        function () {
            $(".second_menu_container").hide();
            $(".second_menu_arrow").hide();
            $(".nav_arrow_five").show();
            $(".nav_five_contens").show();
        },
        function () {
            $(".nav_arrow_five").hide();
            $(".second_menu_container").hide();
        }
    )
    $("#nav_six").toggle(
        function () {
            $(".second_menu_container").hide();
            $(".second_menu_arrow").hide();
            $(".nav_arrow_six").show();
            $(".nav_six_contens").show();
        },
        function () {
            $(".nav_arrow_six").hide();
            $(".second_menu_container").hide();
        }
    )
    $("#nav_seven").toggle(
        function () {
            $(".second_menu_container").hide();
            $(".second_menu_arrow").hide();
            $(".nav_arrow_seven").show();
            $(".nav_seven_contens").show();
        },
        function () {
            $(".nav_arrow_seven").hide();
            $(".second_menu_container").hide()
        }
    )



    /**国际时间*/
function calcTime(city,country, offset,judge) {
var d = new Date();
utc = d.getTime() + (d.getTimezoneOffset() * 60000);
var nd = new Date(utc + (3600000 * offset));
var day = nd.getDate();
var month = nd.getMonth();
var year = nd.getYear();
var hr = nd.getHours(); //+ offset
var min = nd.getMinutes();
var sec = nd.getSeconds();
if(year < 1000){
year += 1900
}
var monthArray = new Array("01","02","03","04","05","06","07","08","09","10","11","12")
var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
if (year%4 == 0){
monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
}
if(year%100 == 0 && year%400 != 0){
monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
}
if (hr >= 24){
hr = hr-24
day -= -1
}
if (hr < 0){
hr -= -24
day -= 1
}
if (hr < 10){
hr = " " + hr
}
if (min < 10){
min = "0" + min
}
if (sec < 10){
sec = "0" + sec
}
if (day <= 0){
if (month == 0){
month = 11
year -= 1
}
else{
month = month -1
}
day = monthDays[month]
}
if(day > monthDays[month]){
day = 1
if(month == 11){
month = 0
year -= -1
}
else{
month -= -1
}
}
if(judge){
    return "<span class='current_zone_first'>"+city+"</span>"+"<br/>"+"<span class='current_zone_second'>"+country+"</span>"+"<br/>"+"<span class='current_zone_first'>"+hr + ":" + min + ":" + sec+"</span>"+"<br/>"+"<span class='current_zone_second'>"+day + "/" + monthArray[month] + "/" + year +"</span>"
}
else {
    return "<span class='first_type'>"+city+"</span>"+"<br/>"+"<span class='second_type'>"+country+"</span>"+"<br/>"+"<span class='first_type'>"+hr + ":" + min + ":" + sec+"</span>"+"<br/>"+"<span class='second_type'>"+day + "/" + monthArray[month] + "/" + year +"</span>"
}

}
function worldClockZone(){
    $('.beijing').html(calcTime('BeiJing','China','+8',1));
    $('.canberra').html(calcTime('Canberra','Australia','+11',0));
    $('.newyork').html(calcTime('New York','United States','-4',0));
    $('.tokyo').html(calcTime('Tokyo','Japan','+9',0));
    $('.london').html(calcTime('London','England','+0',0));
setTimeout(function(){worldClockZone()}, 1000);
}
    worldClockZone();
/**蓝主题国际时间*/
function blue_calcTime(city,country, offset,judge) {
    var d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * offset));
    var day = nd.getDate();
    var month = nd.getMonth();
    var year = nd.getYear();
    var hr = nd.getHours(); //+ offset
    var min = nd.getMinutes();
    var sec = nd.getSeconds();
    if(year < 1000){
        year += 1900
    }
    var monthArray = new Array("01","02","03","04","05","06","07","08","09","10","11","12")
    var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
    if (year%4 == 0){
        monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
    }
    if(year%100 == 0 && year%400 != 0){
        monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
    }
    if (hr >= 24){
        hr = hr-24
        day -= -1
    }
    if (hr < 0){
        hr -= -24
        day -= 1
    }
    if (hr < 10){
        hr = " " + hr
    }
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){
        sec = "0" + sec
    }
    if (day <= 0){
        if (month == 0){
            month = 11
            year -= 1
        }
        else{
            month = month -1
        }
        day = monthDays[month]
    }
    if(day > monthDays[month]){
        day = 1
        if(month == 11){
            month = 0
            year -= -1
        }
        else{
            month -= -1
        }
    }
    if(judge){
        return "<div class='blue_current_zone_first'>"+"<div style='float: left'>"+city+"</div>"+"<div style='float: right'>"+hr + ":" + min + ":" + sec+"</div>"+"</div>"+"<div class='blue_current_zone_second'>"+"<div style='float: left'>"+country+"</div>"+"<div style='float: right'>"+day + "/" + monthArray[month] + "/" + year +"</div>"+"</div>"
    }
    else {
        return "<div class='blue_first_type'>"+"<div style='float: left'>"+city+"</div>"+"<div style='float: right'>"+hr + ":" + min + ":" + sec+"</div>"+"</div>"+"<div class='blue_second_type'>"+"<div style='float: left'>"+country+"</div>"+"<div style='float: right'>"+day + "/" + monthArray[month] + "/" + year +"</div>"+"</div>"
    }

}
    function blue_worldClockZone(){
        $('.blue_beijing').html(blue_calcTime('BeiJing','China','+8',1));
        $('.blue_canberra').html(blue_calcTime('Canberra','Australia','+11',0));
        $('.blue_newyork').html(blue_calcTime('New York','United States','-4',0));
        $('.blue_tokyo').html(blue_calcTime('Tokyo','Japan','+9',0));
        $('.blue_london').html(blue_calcTime('London','England','+0',0));
        setTimeout(function(){blue_worldClockZone()}, 1000);
    }
    blue_worldClockZone();
/**新闻列表界面跳转新闻详情*/
$(".news_list_mid_mid_event_container").click(function () {
    window.open('news_detail.html','_self');
})
$(".news_list_mid_bottom_event_title").click(function () {
    window.open('news_detail.html','_self');
})
$(".news_detail_first_page").click(function () {
    window.open('index.html','_self');
})
$(".news_detail_second_page").click(function () {
    window.open('news_list.html','_self');
})
})