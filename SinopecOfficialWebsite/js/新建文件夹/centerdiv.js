/* 酷站代码整理 http://www.5icool.org */
/**
 **		公用滚动方法 
 **     支持定时自动轮播、前后轮播、单独点击轮播
 **/
window.onload=function(){
(function($){
	$("div[data-scro='controler1'] b,div[data-scro='controler2'] a").click(function(){
		var T = $(this);
		if(T.attr("class")=="down") return false;
		J2ROLLING_ANIMATION.st({
			findObject : T,	//当前点击对象 默认写
			main : T.parent().parent().find("div[data-scro='list1']"),	//滚动目标容器窗口对象
			pagSource : T.parent().parent().find("div[data-scro='controler1'] b"),	//切换按钮对象
			className : "down",		//选中的样式
			duration : "slow",		//滚动速度 和jquery速度一致
			on : $(this)[0].tagName=="A" ? true : false		//用于判断是否开启无限滚动 or 来回切换
		});
		return false;
	});
	var J2SETTIME="", J2Time=true,J2ROLLING_ANIMATION = {
		init : function(){
			setTimeout(function(){$("#ul1").remove();},6200);
			this.start();
			this.time();	
		},
		st : function(o){
			if(J2Time){
				this.animate(o.findObject,o.main,o.className,o.duration,o.pagSource,o.on);
				J2Time = false;
			}
		},
		animate : function(T,M,C,S,P,O){
				var _prevDown = O ? P.parent().find("*[class='"+C+"']") : T.parent().find(T[0].tagName+"[class='"+C+"']"),
					_prevIndex = _prevDown.index(),
					_thisIndex = O ? (T.attr("class")=="next" ? _prevIndex+1 : _prevIndex-1) : T.index(),
					_list = M.find(".item"),
					p2n = 1;
				_prevDown.removeClass(C);
				if(O){
					if(_thisIndex==-1) _thisIndex=_list.size()-1;
					if(_thisIndex==_list.size()) _thisIndex=0;
					P.eq(_thisIndex).addClass(C);
				}else{
					T.addClass(C);
				}
				if(T.attr("class")=="prev" || _thisIndex<_prevIndex) p2n = false;
				if((T.attr("class")=="next" || _thisIndex>_prevIndex)&&T.attr("class")!="prev") p2n = true;
				
				!p2n ? _list.eq(_thisIndex).css("left",-M.width()) : '';
				_list.eq(_prevIndex).animate({left:p2n ? -M.width() : M.width()},S,function(){
					$(this).removeAttr("style");	
					J2Time = true;
				});
				_list.eq(_thisIndex).animate({left:"0px"},S);
		},
		start : function(){
			$("#section-focus-pic1 div[data-scro='controler1'] b,#section-focus-pic1 div[data-scro='controler2'] a").mouseover(function(){
				window.clearInterval(J2SETTIME);
			}).mouseout(function(){
				J2ROLLING_ANIMATION.time();
			});
		},
		time : function(){
			J2SETTIME = window.setInterval(function(){
				var num = 1;
				num = $("#section-focus-pic1 div[data-scro='controler1'] b[class='down']").index(),
					_list = $("#section-focus-pic1 div[data-scro='list1'] li");
				_list.eq(num).animate({"left":-$("#section-focus-pic1 div[data-scro='list1']").width()},"slow",function(){
					$(this).removeAttr("style");	
					$("#section-focus-pic1 div[data-scro='controler1'] b").removeClass("down").eq(num).addClass("down");
				});	
				num++;
				if(num==_list.size()){
					num=0;
				}
				_list.eq(num).animate({"left":"0px"},"slow");		
			},6000);
		}
	};
	$("a").click(function(){
		$(this).blur();				  
	});
	
	J2ROLLING_ANIMATION.init();	//是否开启自动轮播
})(this.jQuery || this.baidu);
}