$(function(){

	to_page(1);

});



function build_emps_table(argument) {
	// body...
	$('#emps_table tbody').empty();
	var emps = argument.extend.pageinfo.list;
	$.each(emps, function(index, val) {
		 /* iterate through array or object */
		 var empId_td = $('<td></td>').append(val.empId);
		 var empName_td = $('<td></td>').append(val.empName);
		 var gender = val.gender=='M'?'男':'女';
		 var gender_td = $('<td></td>').append(gender);
		 var email_td = $('<td></td>').append(val.email);
		 var deptName_td = $('<td></td>').append(val.deptName);

		 var editBtn = $('<button></button>').addClass('btn btn-info btn-sm')
		 				.append($('<span></span>').addClass('glyphicon glyphicon-pencil')).append("编辑");

		 var deleteBtn = $('<button></button>').addClass('btn btn-danger btn-sm')
		 				.append($('<span></span>').addClass('glyphicon glyphicon-trash')).append("删除");

		 var btn_td = $('<td></td>').append(editBtn).append(' ').append(deleteBtn);

		 $('<tr></tr>').append(empId_td).append(empName_td).append(gender_td).append(email_td).append(deptName_td)
		 				.append(btn_td)
		 				.appendTo('#emps_table tbody');

	});



}


function build_page_info(argument) {
	// body...
	$('#page_info_area').empty();
	$('#page_info_area').append('当前'+argument.extend.pageinfo.pageNum+'页，总共'+argument.extend.pageinfo.pages+'页，总共'+argument.extend.pageinfo.total+'条记录');
}



// function build_page_nav(argument) {
// 	// body...
// 	var clearactive = document.getElementsByTagName('li');
// 	for (var i = clearactive.length - 1; i >= 0; i--) {
// 		$(clearactive[i]).removeClass('active');
// 	}


// 	$('#nav_1 a').text(argument.extend.pageinfo.navigatepageNums[0]);
// 	$('#nav_1 a').click(function(event) {
// 		/* Act on the event */
// 		to_page(argument.extend.pageinfo.navigatepageNums[0])
// 	});
// 	if (argument.extend.pageinfo.navigatepageNums[0]==argument.extend.pageinfo.pageNum) {$('#nav_1').addClass('active')}

// 	$('#nav_2 a').text(argument.extend.pageinfo.navigatepageNums[1]);
// 	$('#nav_2 a').click(function(event) {
// 		/* Act on the event */
// 		to_page(argument.extend.pageinfo.navigatepageNums[1])
// 	});
// 	if (argument.extend.pageinfo.navigatepageNums[1]==argument.extend.pageinfo.pageNum) {$('#nav_2').addClass('active')}

// 	$('#nav_3 a').text(argument.extend.pageinfo.navigatepageNums[2]);
// 	$('#nav_3 a').click(function(event) {
// 		/* Act on the event */
// 		to_page(argument.extend.pageinfo.navigatepageNums[2])
// 	});
// 	if (argument.extend.pageinfo.navigatepageNums[2]==argument.extend.pageinfo.pageNum) {$('#nav_3').addClass('active')}

// 	$('#nav_4 a').text(argument.extend.pageinfo.navigatepageNums[3]);
// 	$('#nav_4 a').click(function(event) {
// 		/* Act on the event */
// 		to_page(argument.extend.pageinfo.navigatepageNums[3])
// 	});
// 	if (argument.extend.pageinfo.navigatepageNums[3]==argument.extend.pageinfo.pageNum) {$('#nav_4').addClass('active')}

// 	$('#nav_5 a').text(argument.extend.pageinfo.navigatepageNums[4]);
// 	$('#nav_5 a').click(function(event) {
// 		/* Act on the event */
// 		to_page(argument.extend.pageinfo.navigatepageNums[4])
// 	});
// 	if (argument.extend.pageinfo.navigatepageNums[4]==argument.extend.pageinfo.pageNum) {$('#nav_5').addClass('active')}

	
// 	if (argument.extend.pageinfo.hasPreviousPage == false) {$('#nav_go_pre').addClass('disabled')}
// 	if (argument.extend.pageinfo.hasNextPage == false) {$('#nav_go_next').addClass('disabled')}

// }


function to_page(argument) {
	// body...
	
	
	$.ajax({
		url: 'emps',
		type: 'GET',
		data: {"pn": argument},
		success:function(result){

			build_emps_table(result);

			build_page_info(result);

			build_page_nav(result);

			

		}
	});
}



function build_page_nav(argument) {

	$('#page_nav_area').empty();

	var page_ul = $('<ul></ul>').addClass('pagination');

	var firstPage_li = $('<li></li>').append($('<a></a>').append('首页').attr('href','#'));
	firstPage_li.click(function(event) {
		/* Act on the event */
		to_page(1);
	});



	var lastPage_li = $('<li></li>').append($('<a></a>').append('末页').attr('href','#'));
	lastPage_li.click(function(event) {
		/* Act on the event */
		to_page(argument.extend.pageinfo.pages);
	});




	if (argument.extend.pageinfo.hasPreviousPage == true) {
		var prePage_li = $('<li></li>').append($('<a></a>').append('&laquo;').attr('href','#'));

		prePage_li.click(function(event) {
			/* Act on the event */
			to_page(argument.extend.pageinfo.pageNum-1);
		});

	}
	
	if (argument.extend.pageinfo.hasNextPage == true) {
		var nextPage_li = $('<li></li>').append($('<a></a>').append('&raquo;').attr('href','#'));

		nextPage_li.click(function(event) {
			/* Act on the event */
			to_page(argument.extend.pageinfo.pageNum+1);
		});

	}
	

	page_ul.append(firstPage_li).append(prePage_li);

	$.each(argument.extend.pageinfo.navigatepageNums, function(index, val) {
		 /* iterate through array or object */
		 var num_li = $('<li></li>').append($('<a></a>').append(val).attr('href','#'));

		 if (argument.extend.pageinfo.pageNum == val) {num_li.addClass('active');}

		 num_li.click(function(event) {
		 	/* Act on the event */
		 	to_page(val);
		 });

		 page_ul.append(num_li);

	});

	page_ul.append(nextPage_li).append(lastPage_li);

	var page_nav = $('<nav></nav>').append(page_ul);

	page_nav.appendTo('#page_nav_area')

}


$(function(){

	$('#emp_add_btn').click(function(event) {
	/* Act on the event */
		$('#empAddModal').modal({
			backdrop:'static'
		});
	});
});