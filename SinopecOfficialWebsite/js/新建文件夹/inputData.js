function inputHomePageData(BasePath){
	/**
	 * 加载安全科普数据列表
	 */
	$.ajax({
		url : BasePath + 'aqkpAction!datagrid.action',
		data : {page : 1,rows : 6,type : 'aqkp',sort : 'createTime',order : 'desc'},
		dataType : 'json',
		success : function(data) {
			var rs = data.rows;
			for(var i = 0;i<rs.length;i++){
				var tt = rs[i].title;
				if(tt.length>12){
					tt = tt.substr(0,11)+"...";
				}
				var url = BasePath + "aqkpAction!aqkpView.action?id=" + rs[i].id;
				$('#aqkp_ul').append("<li><a href="+url+" target='_blank'>"+tt+"</a></li>");
			}
		}
	});
	
	/**
	 * 加载法律法规数据列表
	 */
	$.ajax({
		url : BasePath + 'aqkpAction!datagrid.action',
		data : {page : 1,rows : 6,type : 'flfg',sort : 'createTime',order : 'desc'},
		dataType : 'json',
		success : function(data) {
			var rs = data.rows;
			for(var i = 0;i<rs.length;i++){
				var tt = rs[i].title;
				if(tt.length>12){
					tt = tt.substr(0,11)+"...";
				}
				var url = BasePath + "aqkpAction!flfgView.action?id=" + rs[i].id;
				$('#flfg_ul').append("<li><a href="+url+" target='_blank'>"+tt+"</a></li>");
			}
		}
	});
	
	/**
	 * 加载餐饮文化数据列表
	 */
	$.ajax({
		url : BasePath + 'aqkpAction!datagrid.action',
		data : {page : 1,rows : 6,type : 'cywh',sort : 'createTime',order : 'desc'},
		dataType : 'json',
		success : function(data) {
			var rs = data.rows;
			for(var i = 0;i<rs.length;i++){
				var tt = rs[i].title;
				if(tt.length>12){
					tt = tt.substr(0,11)+"...";
				}
				var url = BasePath + "aqkpAction!cywhView.action?id=" + rs[i].id;
				$('#cywh_ul').append("<li><a href="+url+" target='_blank'>"+tt+"</a></li>");
			}
		}
	});
	/**
	 * 加载明厨亮灶数据列表
	 */
	$.ajax({
		url : BasePath + 'organizationAction!datagrid.action',
		data : {page : 1,rows : 4,remark : '',sort : 'viewNum',order : 'desc'},
		dataType : 'json',
		success : function(data) {
			var rs = data.rows;
			for(var i = 0;i<rs.length;i++){
				var tt = rs[i].orgSimpleText;
				if(tt!=null&&typeof(tt)!="undefined"&&tt.length>182){
					tt = tt.substr(0,180)+"...";
				}
				var orgViewUrl = BasePath + "organizationAction!mclzviewCameras.action?orgId=" + rs[i].orgId;
				var url = BasePath + "organizationAction!contentView.action?orgId=" + rs[i].orgId;
				var imgUrl = rs[i].imgUrl;
				var str = "";
				if(imgUrl==null||imgUrl==""||typeof(imgUrl)=="undefined"){
					imgUrl = "homepages/images/imgerro.jpg";
				}
				str+='<li><div class="doufukuai">';
				str+='<div class="doufukuai_img"><a href="'+url+'" target="_blank"><img src="'+BasePath + imgUrl+'" width="224" height="82" /></a></div>';
				str+='<div class="doufukuai_txt">'+tt+'</div>';
				str+='<div class="bnt_input"><a href="'+orgViewUrl+'" title="点击进入查看" target="_blank">点击查看</a></div></div></li>';
				$('#mclz_ul').append(str);
			}
		}
	});
	/**
	 * 加载轮播图片列表
	 */
	$.ajax({
		url : BasePath + 'imgAction!datagrid.action',
		data : {page : 1,rows : 5,imgState : 'sylb',sort : 'imgIndex',order : 'asc'},
		dataType : 'json',
		success : function(data) {
			var rs = data.rows;
			for(var i = 0;i<rs.length;i++){
				var imgUrl = rs[i].imgUrl;
				var imgClikUrl = rs[i].imgClikUrl;
				$('#slides').append('<li style="background:url(\''+imgUrl+'\') no-repeat center top"><a href="'+imgClikUrl+'" target="_blank"></a></li>');
			}
			var numpic = $('#slides li').size()-1;
			var nownow = 0;
			var inout = 0;
			var TT = 0;
			var SPEED = 15000;


			$('#slides li').eq(0).siblings('li').css({'display':'none'});


			var ulstart = '<ul id="pagination">',
				ulcontent = '',
				ulend = '</ul>';
			ADDLI();
			var pagination = $('#pagination li');
			var paginationwidth = $('#pagination').width();
			$('#pagination').css('margin-left',(470-paginationwidth))
			
			pagination.eq(0).addClass('current')
				
			function ADDLI(){
				//var lilicount = numpic + 1;
				for(var i = 0; i <= numpic; i++){
					ulcontent += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
				}
				
				$('#slides').after(ulstart + ulcontent + ulend);	
			}

			pagination.on('click',DOTCHANGE)
			
			function DOTCHANGE(){
				
				var changenow = $(this).index();
				
				$('#slides li').eq(nownow).css('z-index','900');
				$('#slides li').eq(changenow).css({'z-index':'800'}).show();
				pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
				$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(changenow).fadeIn(500);});
				nownow = changenow;
			}
			
			pagination.mouseenter(function(){
				inout = 1;
			})
			
			pagination.mouseleave(function(){
				inout = 0;
			})
			
			function GOGO(){
				
				var NN = nownow+1;
				
				if( inout == 1 ){
					} else {
					if(nownow < numpic){
					$('#slides li').eq(nownow).css('z-index','900');
					$('#slides li').eq(NN).css({'z-index':'800'}).show();
					pagination.eq(NN).addClass('current').siblings('li').removeClass('current');
					$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(NN).fadeIn(500);});
					nownow += 1;

				}else{
					NN = 0;
					$('#slides li').eq(nownow).css('z-index','900');
					$('#slides li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
					$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(0).fadeIn(500);});
					pagination.eq(NN).addClass('current').siblings('li').removeClass('current');

					nownow=0;

					}
				}
				TT = setTimeout(GOGO, SPEED);
			}
			
			TT = setTimeout(GOGO, SPEED); 
		}
	});
	
}

function inputToolBar(BasePath,PageName,logintype){
	/**
	 * 加载导航栏数据
	 */
	$.ajax({
		url : BasePath + 'barAction!datagrid.action',
		data : {sort : 'barIndex',order : 'asc'},
		dataType : 'json',
		success : function(data) {
			var rs = data.rows;
			var bar_str = "";
			if(logintype==null){
				logintype="0";
			}
			for(var i = 0;i<rs.length;i++){
				var lev = rs[i].barLev;
				if(lev.indexOf(logintype) >= 0){
					if(rs[i].barName==PageName){
						bar_str += "<li class='slt'><a href='"+ BasePath + rs[i].barUrl +"'>" + rs[i].barName + "</a></li>";
					}else{
						bar_str += "<li><a href='"+ BasePath + rs[i].barUrl +"'>" + rs[i].barName + "</a></li>";
					}
				}
			}
			$('#tool_bar').append(bar_str);
		}
	});
}

function inputfplayer(playerObj,BasePath,playUrl){
	playerObj.flowplayer(BasePath+"jslib/flowplayer/flowplayer.commercial.swf",{ 
	      clip: {url: playUrl, 
	        autoPlay: false,  
	        autoBuffering: true,
	        controls: { 
              playlist: false,//上一个、下一个按钮 
              play:true, //开始按钮 
              volume: true, //音量按钮 
              mute: true, //静音按钮 
              stop: true,//停止按钮 
              fullscreen: true, //全屏按钮 
              scrubber: true,//进度条 
              url: BasePath+"jslib/flowplayer/flowplayer.controls-3.2.4-dev.swf", //决定功能条的显示样式（功能条swf文件,根据项目定亦可引用:http://releases.flowplayer.org/swf/flowplayer.controls-3.2.12.swf） 
              time: true, //是否显示时间信息 
              autoHide: true, //功能条是否自动隐藏 
               tooltips: { 
                  buttons: false,//是否显示 
                  fullscreen: '全屏',//全屏按钮，鼠标指上时显示的文本 
                  stop:'停止', 
                  play:'开始', 
                  volume:'音量', 
                  mute: '静音', 
                  next:'下一个', 
                  previous:'上一个'
              }  
	        }
	      }});
}

function logout(BasePath) {
	$.post(BasePath + 'userAction!doNotNeedSession_logout.action', function() {
		var spanVal = '<a href="'+BasePath+'login.jsp" onclick="ShowLoginBox();" style="float:left;"><span style="color: #666666;float:left;">&nbsp;请登录</span></a><span style="float:left;"> &nbsp; &nbsp; &nbsp;|</span><span>&nbsp;免费注册&nbsp; &nbsp;</span>';
		$("#login_span").empty();
		$("#login_span").append(spanVal);
	});
}