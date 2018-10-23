/*    var dlNum  =$("#selectList").find("dl");
    //for (i = 0; i < dlNum.length; i++) {
     //   $(".hasBeenSelected .clearList").append("<div class=\"selectedInfor selectedShow\" style=\"display:none\"><span></span><label></label><em></em></div>");
   // }
    
    var refresh = "true";*/
    
   // $(".listIndex label").live("click",function(){
//		var Asele=$(".listIndex").find("a");
//        var text =$(this).text();
//        var selectedShow = $(".selectedShow");
//        var textTypeIndex =$(this).parents("dl").index();//父级dl 的索引值
//        var textType =$(this).parent("dd").siblings("dt").text();//取上一层的文本
//        index = textTypeIndex;
//        $(".clearDd").show();
//        $(".selectedShow").eq(index).show();
//		$(this).find("a").addClass("selected");
//
//		$(this).find("input").attr("checked",true);
//		var infor='<div class=\"selectedInfor selectedShow\"><span>'+textType+'</span><label>'+text+'</label><em></em></div>'
//         $(".hasBeenSelected .clearList").append(infor);
//		selectedShow.eq(index).find("span").text(textType);
//        selectedShow.eq(index).find("label").text(text);
//		判断个数显示
//       var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
//		if (show > 1) {
//         $(".eliminateCriteria").show();
//    	}
//       
//    });
/*	 $(".listIndex label").toggle(function(){
		 var Asele=$(".listIndex").find("a");
        var text =$(this).text();
        var selectedShow = $(".selectedShow");
        var textTypeIndex =$(this).parents("dl").index();//父级dl 的索引值
        var textType =$(this).parent("dd").siblings("dt").text();//取上一层的文本
        index = textTypeIndex;
        $(".clearDd").show();
        $(".selectedShow").eq(index).show();
		$(this).find("a").addClass("selected");

		$(this).find("input").attr("checked",true);
		var infor='<div class=\"selectedInfor selectedShow\"><span>'+textType+'</span><label>'+text+'</label><em></em></div>';
         $(".hasBeenSelected .clearList").append(infor);
		 
	},function(){
		$(this).find("a").removeClass("selected");
		$(this).find("input").attr("checked",false);
		});*/

//	 $(".listIndex label").toggle(function(){
//			 var text =$(this).text();
//        var selectedShow = $(".selectedShow");
//       var textTypeIndex =$(this).parents("dl").index();
//       var textType =$(this).parent("dd").siblings("dt").text();
//	           index = textTypeIndex -(2);
//			 $(this).find("a").addClass("selected");
//			 $(this).find("input").attr("checked",true);
//			 selectedShow.eq(index).find("span").text(textType);
//			 $(".selectedShow").eq(index).show();
//			  $(".clearDd").show();
//			  var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
//			//if (show > 1) {
////					   $(".eliminateCriteria").show();
////				}
//		 },function(){
//			 $(this).find("a").removeClass("selected");
//	     	 $(this).find("input").attr("checked",false);
//			 });
/*
    $(".selectedShow em").live("click",function(){
        $(this).parents(".selectedShow").remove();
        var textTypeIndex =$(this).parents(".selectedShow").index();
        index = textTypeIndex;
        $("#selectList").eq(index).find("a").removeClass("selected");
		$("#selectList").eq(index).find("input").attr("checked",false);
        
      //if($(".listIndex .selected").length < 2){
       //    $(".eliminateCriteria").hide();
        //}
    });   
    $(".eliminateCriteria").live("click",function(){
        $(".selectedShow").remove();
        //$(this).hide();
        $(".listIndex a ").removeClass("selected")
		$(".listIndex a ").prev().attr("checked",false);
    }); */

window.onload = function(){ 
	inputSearchData();
};

function inputSearchData(){
	/**
	 * 加载筛选数据
	 */
	$.ajax({
		url : BasePath + 'controlunitdtoAction!notAuth_getScreenData.action',
		dataType : 'json',
		success : function(data) {
			var rs = data[0].children;
			if(rs!=null&&typeof(rs) != "undefined"&&rs.length>0){
				for(var i = 0;i<rs.length;i++){
					$('#shaixuan_tabs').append('<a id="sxTab_'+rs[i].id+'" class="tabs " onclick="setSelected(this);" href="javascript:void(0)" data-id="pLocation_'+rs[i].id+'">'+rs[i].text+'<I class="sect-up"></I></a>');
					var ch = rs[i].children;
					if(ch!=null&&typeof(ch) != "undefined"&&ch.length>0){
						$('#J_locationFilterWraper').append('<div class="filter-item filter-item-administrative" id="pLocation_'+rs[i].id+'" style="display:none;"><div><div class="filter-administrative-txt" id="sx_xzq_'+rs[i].id+'">');
						$('#sx_xzq_'+rs[i].id).append('<span class="name">行政区：</span>');
						for(var j = 0;j<ch.length;j++){
							$('#sx_xzq_'+rs[i].id).append('<a id="region_'+ch[j].id+'" class="region tag" href="javascript:search({\'name\':\'region\',\'val\':\''+ch[j].id+'\'});">'+ch[j].text+'</a>');
						}
						$('#J_locationFilterWraper').append('</div></div></div>');
					}
				}
			}
			//setSelected("#sxTab_"+rs[0].id);
		}
	});
}

/**
 * 标签切换
 * @param obj
 */
function setSelected(obj){
	$(obj).parent('div').find('a').removeClass("cur");
	$(obj).parent('div').find('a').find("i").attr("class", "sect-up");
	$(obj).addClass("cur");
	$(obj).find("i").attr("class", "sect-down");
	$("div[id^='pLocation_']").attr("style", "display:none;");
	var pLocation = $(obj).data('id');
	$("#" + pLocation).attr("style", "display:;");
	var this_id = $(obj).attr("id");
	regionVal = this_id.split("_")[1];
	search({'name':'sxTab','val':regionVal});
}

var regionVal;
var regionName;

function search(con) {
	if(con.name=="region"&&con.val==regionVal){
		return;
	}
	$('a[id^="'+con.name+'"]').each(function(){
		if($(this).attr("id")==con.name+"_"+con.val){
			$(this).addClass("selected");
		}else{
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");
			}
		}
	}); 
	regionVal = con.val;
	LoadPageInation();
}

function searchByOrgName(){
	regionName = $("#search_keyword").val();
	LoadPageInation();
}
