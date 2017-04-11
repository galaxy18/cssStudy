var obj;
$(document).ready(function() {
 	obj = document.getElementById("frameContent"); //获取内容层
	var pgindex = 1; //当前页
//	window.onload = function() //重写窗体加载的事件
//	{
		var allpages = Math.ceil(parseInt(obj.scrollHeight)
				/ (parseInt(obj.offsetHeight)-25));//获取页面数量

		$.jqPaginator('.pagination', {
			totalPages : allpages,
			visiblePages : 10,
			currentPage : pgindex,
			onPageChange : function(num, type) {
				showPage(num);
				//$('#p1').text(type + '：' + num);
			}
		});
//	}
});
function showPage(pageINdex) {
	//obj.scrollTop = (pageINdex - 1) * parseInt(obj.offsetHeight); //根据高度，输出指定的页
	/*$('#frameContentContent').animate({left: "-130%", opacity: 0}, 400, function() {
		obj.scrollTop = (pageINdex - 1) * parseInt(obj.offsetHeight);
		$('#frameContentContent').css("left", "60%");
		$('#frameContentContent').animate({left:0, opacity: 1}, 400);
	});*/
	$('#frameContent').animate({scrollTop: (pageINdex - 1) * (parseInt(obj.offsetHeight)-25)}, 400);
	pgindex = pageINdex;
}