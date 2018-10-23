/*var location = (window.location+'').split('/'); 
var basePathUrl = location[0]+'//'+location[2]+'/'+location[3]+'/';*/

function addMyPlayObj(playUrl,htmlObjID,login_type){
	if(login_type==null){
		login_type="0";
	}
	var playlist = [//播放列表  注意第一个是流畅   第二个是高清
	                {
	    				autoPlay: true,
	    				autoBuffering:false,
	    				url: playUrl,
	    				live:true,
	    				maliu:0
	                }
	            ];
	var fullscreen = false;
	var maliu = false;
	var yuntai = false;
	if(login_type=="1"){//判断是否执法人员登录
		var mainPlayUrl = playUrl.replace("sub", "main");
		playlist = [//播放列表  注意第一个是流畅   第二个是高清
		            {
						autoPlay: true,
						autoBuffering:false,
						url: playUrl,
						live:true,
						maliu:0,
						leftYunTai:'qwe'
		            },
		            {
		               autoPlay: true,
						autoBuffering:false,
						url: mainPlayUrl,
						live:true,
						maliu:1,
						leftYunTai:'uyi'
		            }
		        ];
		fullscreen = true;
		maliu = true;
		yuntai = true;
	}
	flowplayer(htmlObjID, BasePath + "jslib/myflashflowplayer/flowplayer.commercial.swf", {
		loop: false,
        clip: {
            autoPlay: true,
            autoBuffering:true,
            leftYunTai:'dasd'
        },
        playlist: playlist,
        plugins: {
        	yuntai :{
					//url: '../flowplayer.yuntai.swf',
					//bottom:50,
					//backgroundColor: '#666666',
					//borderRadius: 10,
					//border:'1px solid #333333'
					//text:"das",
			},
            controls: {
                bottom: 0,//功能条距底部的距离
                height: 24, //功能条高度
                zIndex: 1,
                fontColor: '#ffffff',
                timeFontColor: '#333333',
                //playlist: true,//上一个、下一个按钮
                play:true, //开始按钮
                volume: true, //音量按钮
                mute: false, //静音按钮
                stop: false,//停止按钮
				//gaoqing:true,
				//liuchang:true,
                fullscreen: fullscreen, //全屏按钮
                scrubber: true,//进度条
                time: true, //是否显示时间信息
                autoHide: true, //功能条是否自动隐藏
                maliu:maliu,
				yuntai:yuntai,
                tooltips: {
                    buttons: true,//是否显示
                    fullscreen: '全屏',//全屏按钮，鼠标指上时显示的文本
                    stop:'停止',
                    play:'开始',
                    volume:'音量',
                    mute: '静音',
                    next:'下一个',
                    previous:'上一个'
                }
            }
        }
    });
}

function addPlayObj(playUrl,objID){
	var playlist = [//播放列表  注意第一个是流畅   第二个是高清
	                {
	    				autoPlay: true,
	    				autoBuffering:false,
	    				url: playUrl,
	    				live:true
	                }
	            ];
	var fullscreen = true;
	var maliu = false;
	flowplayer(objID, BasePath + "jslib/flowPlayer3.2.4/flowplayer.commercial-3.2.6-dev.swf", {
		loop: false,
        clip: {
            autoPlay: true,
            autoBuffering:true,
        },
        playlist: playlist,
        plugins: {
            controls: {
                bottom: 0,//功能条距底部的距离
                height: 24, //功能条高度
                zIndex: 1,
                fontColor: '#ffffff',
                timeFontColor: '#333333',
                //playlist: true,//上一个、下一个按钮
                play:true, //开始按钮
                volume: true, //音量按钮
                mute: false, //静音按钮
                stop: true,//停止按钮
				//gaoqing:true,
				//liuchang:true,
                fullscreen: fullscreen, //全屏按钮
                scrubber: true,//进度条
                time: true, //是否显示时间信息
                autoHide: true, //功能条是否自动隐藏
                maliu:maliu,
				yuntai:false,
                tooltips: {
                    buttons: true,//是否显示
                    fullscreen: '全屏',//全屏按钮，鼠标指上时显示的文本
                    play:'开始',
                    stop:'停止',
                    volume:'音量',
                    mute: '静音',
                    next:'下一个',
                    previous:'上一个'
                }
            }
        }
    });
}

function checkMonitor(div,camID,camName,ocxId,login_type){
	if(div!=null&&typeof(div) != "undefined"){
		div.empty();
		$.ajax({   
	        type: "POST",  
	        dataType: "json",  
	        url: BasePath+'cameraAction!notAuth_getPlayType.action',      //提交到一般处理程序请求数据  
	        data : {camId :camID},
	        success: function(data) {
	        	if (data.success){
	        		if(data.obj=="ocx控件"){
	        			div.append('<object classid="clsid:D5E14042-7BF6-4E24-8B01-2F453E8154D7" id="OcxObject" style="width: 600px;height: 335px;" name="OcxObject"></object>');
    					div.append('<div id="OcxDiv" style="position: absolute;left: 0px;top:0px;width: 600px;height: 335px;" hidden="true" align="center">未检测到控件或控件版本不对应，请  <a href="'+BasePath+'download/cmsocx.exe" style="color: red;">下载安装</a>  控件！</div>');
    					ocxObject = document.getElementById("OcxObject");
    					try{
    						ocxObject.SetOcxMode(0);
    						var previewXml = buildPreviewXml(ocxId,camName);
    						ocxObject.SetWndNum(1);
    						var ret = ocxObject.StartTask_Preview_InWnd(previewXml,0);
    					}catch (e) {
    						$("#OcxDiv").show();
    					}
	        		}else{
	        			var playerDivStr = '<div id="player"  style="width: 100%;height: 100%;bottom: 0px;margin: 0px;padding: 0px;background:url('+BasePath+'jslib/flowplayer/load.gif) no-repeat center;z-index:100;"></div>';
	        			div.append(playerDivStr);
	        			$.ajax({   
	        		        type: "POST",  
	        		        dataType: "text", 
	        		        url: BasePath+'cameraAction!getUrlByCmaId.action',       
	        		        data : {camId :camID},
	        		        success: function(data) {
	        		        	addMyPlayObj(data, "player",login_type);
	        		        },
	        		        error : function() {    
	        		            alert("error！");    
	        		        }  
	        		    }); 
	        		}
				}else{
					alert("视频加载出现错误！");
				}
	        }  
	    });
	}
}
