$(document).ready(function(){
	//一开始将侧边栏的子菜单隐藏
	$("#student1").hide();
	$("#topic1").hide();
	$(".zini1").hide();
	$(".wode1").hide();
	$(".wode").hide();
	$(".zini").show();
	$(".manage").hide();
	$(".protocol").hide();
	$(".thesistitle").hide();
	//当父菜单被点击的时候就显示或者隐藏
	$('.navigation button').eq(0).click(function(){
		$("#student1").toggle(200);
	});
	$('.navigation button').eq(1).click(function(){
		$("#liebiao1").toggle(200);
	});
	$('.navigation button').eq(2).click(function(){
		$(".selectstudent").show();
		$(".zini").show();
		$(".wode").hide();
		$(".zini1").hide();
		$(".wode1").hide();
		$(".protocol").hide();
		$(".thesistitle").hide();
		$(".manage").hide();
		
	});
	$('.navigation button').eq(3).click(function(){
		$(".selectstudent").show();
		$(".zini").hide();
		$(".wode").hide();
		$(".zini1").show();
		$(".wode1").hide();
		$(".protocol").hide();
		$(".thesistitle").hide();
		$(".manage").hide();
		
	});
	
	$('.navigation button').eq(4).click(function(){
		$("#liebiao2").toggle(200);
	});
	$('.navigation button').eq(5).click(function(){
		$(".selectstudent").show();
		$(".wode").show();
		$(".zini").hide();
		$(".wode1").hide();
		$(".zini1").hide();
		$(".protocol").hide();
		$(".thesistitle").hide();
		$(".manage").hide();
		
	});
	$('.navigation button').eq(6).click(function(){
		$(".selectstudent").show();
		$(".zini1").hide();
		$(".wode").hide();
		$(".zini").hide();
		$(".wode1").show();
		$(".protocol").hide();
		$(".thesistitle").hide();
		$(".manage").hide();
		
	});
	$('.navigation button').eq(7).click(function(){
		$("#topic1").toggle(200);
	});
	
	$('.navigation button').eq(8).click(function(){
		$(".manage").show()
		$(".allofthetopic").show();
		$(".deletetopic").hide();
		$(".deletestudent").hide();
		$(".selectstudent").hide();
		$(".protocol").hide();
		$(".thesistitle").hide();
		
	});
	$('.navigation button').eq(9).click(function(){
		$(".manage").show()
		$(".deletestudent").show();
		$(".allofthetopic").hide();
		$(".deletetopic").hide();
		$(".selectstudent").hide();
		$(".protocol").hide();
	$(".thesistitle").hide();
		
	});
	$('.navigation button').eq(10).click(function(){
		$(".manage").show()
		$(".deletetopic").show();
		$(".allofthetopic").hide();
		$(".deletestudent").hide();
		$(".selectstudent").hide();
		$(".protocol").hide();
	$(".thesistitle").hide();
		
	});
	$('.navigation button').eq(11).click(function(){
		$(".selectstudent").hide();
		$(".manage").hide();
		$(".protocol").show();
		$(".thesistitle").hide();
		
	});
	$(".navigation button").eq(12).click(function(){
		$(".selectstudent").hide();
		$(".manage").hide();
		$(".protocol").hide();
		$(".thesistitle").show();
	});

	
	//设置自动刷新时间函数每隔一秒就刷新
	setInterval("startRequest()",1000); 

	//触发分页的代码
	 $(".tcdPageCode").createPage({//总课题下的分页
        pageCount:10,//一共有多少页
        current:1,//当前页
        backFn:function(p){
            console.log(p);
        }
    });
    
     $(".tcdPageCode1").createPage({//自拟课题未选学生的分页
        pageCount:13,//一共有多少页
        current:1,//当前页
        backFn:function(p){
            console.log(p);
        }
    });
    $(".tcdPageCode2").createPage({//自拟课题已选学生的分页
        pageCount:5,//一共有多少页
        current:1,//当前页
        backFn:function(p){
            console.log(p);
        }
    });
    $(".tcdPageCode3").createPage({//我拟课题未选学生的分页
        pageCount:6,//一共有多少页
        current:1,//当前页
        backFn:function(p){
            console.log(p);
        }
    });
    $(".tcdPageCode4").createPage({//我拟课题已选学生的分页
        pageCount:8,//一共有多少页
        current:1,//当前页
        backFn:function(p){
            console.log(p);
        }
    });
    $(".tcdPageCode5").createPage({//审题页面的分页
        pageCount:9,//一共有多少页
        current:1,//当前页
        backFn:function(p){
            console.log(p);
        }
    });
});

$("#submit").click(function(){
	alert("确定提交？");
});


function startRequest() 
{ 
	$(".realtime").text((new Date()).toLocaleString()); 
}

//分页代码
(function($){
	var ms = {
		init:function(obj,args){
			return (function(){
				ms.fillHtml(obj,args);
				ms.bindEvent(obj,args);
			})();
		},
		//填充html
		fillHtml:function(obj,args){
			return (function(){
				obj.empty();
				//上一页
				if(args.current > 1){
					obj.append('<a href="javascript:;" class="prevPage">上一页</a>');
				}else{
					obj.remove('.prevPage');
					obj.append('<span class="disabled">上一页</span>');
				}
				//中间页码
				if(args.current != 1 && args.current >= 4 && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+1+'</a>');
				}
				if(args.current-2 > 2 && args.current <= args.pageCount && args.pageCount > 5){
					obj.append('<span>...</span>');
				}
				var start = args.current -2,end = args.current+2;
				if((start > 1 && args.current < 4)||args.current == 1){
					end++;
				}
				if(args.current > args.pageCount-4 && args.current >= args.pageCount){
					start--;
				}
				for (;start <= end; start++) {
					if(start <= args.pageCount && start >= 1){
						if(start != args.current){
							obj.append('<a href="javascript:;" class="tcdNumber">'+ start +'</a>');
						}else{
							obj.append('<span class="current">'+ start +'</span>');
						}
					}
				}
				if(args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5){
					obj.append('<span>...</span>');
				}
				if(args.current != args.pageCount && args.current < args.pageCount -2  && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+args.pageCount+'</a>');
				}
				//下一页
				if(args.current < args.pageCount){
					obj.append('<a href="javascript:;" class="nextPage">下一页</a>');
				}else{
					obj.remove('.nextPage');
					obj.append('<span class="disabled">下一页</span>');
				}
			})();
		},
		//绑定事件
		bindEvent:function(obj,args){
			return (function(){
				obj.on("click","a.tcdNumber",function(){
					var current = parseInt($(this).text());
					ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current);
					}
				});
				//上一页
				obj.on("click","a.prevPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current-1,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current-1);
					}
				});
				//下一页
				obj.on("click","a.nextPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current+1);
					}
				});
			})();
		}
	}
	$.fn.createPage = function(options){
		var args = $.extend({
			pageCount : 10,
			current : 1,
			backFn : function(){}
		},options);
		ms.init(this,args);
	}
})(jQuery);