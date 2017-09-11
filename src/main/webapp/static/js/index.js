$(function(){

	to_page(1);

});

var total_Pages;

function build_emps_table(argument) {
	// body...
	$('#emps_table tbody').empty();
	var emps = argument.extend.pageinfo.list;
	total_Pages = argument.extend.pageinfo.pages;
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

	page_nav.appendTo('#page_nav_area');

}


$(function(){

	$('#emp_add_btn').click(function(event) {
	/* Act on the event */

	$.ajax({
		url: 'depts',
		type: 'GET',
		success:function(result){

			$('#dept_select').empty();

			$.each(result.extend.depts, function(index, val) {
				 /* iterate through array or object */
				 var dept_option = $('<option></option>').append(val.deptName).attr('value',val.deptId);

				 dept_option.appendTo('#dept_select');
			});


		}
	});
	
	



		$('#empAddModal').modal({
			backdrop:'static'
		});
	});
});




$(function(){

	$('#emp_save_btn').click(function(event) {
	/* Act on the event */

	if (!validate_add_form()) {

		return false;
	}


	$.ajax({
		url: 'emp',
		type: 'POST',
		data: $('#empAddModal form').serialize(),
		success:function(result){

			if (result.code == '100') { alert('保存成功!')}

			$('#empAddModal').modal('hide');

			to_page(total_Pages);

		}
	});



});

});


// 校验表单数据
function validate_add_form(argument) {
	// body...
	var emp_Name = $('#emp_name_input').val();
	var emp_email = $('#emp_email_input').val();

	var reg_name = /(^[a-zA-Z0-9_-]{3,16}$)|(^[\u2E80-\u9FFF]{2,6})/ ;
	var reg_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

	if (!reg_name.test(emp_Name)) {
		// alert("用户名可以使2到6位中文或3到16位英文和数字的组合！");
		show_validate_msg('#emp_name_input','error','用户名可以使2到6位中文或3到16位英文和数字的组合！');
		
		return false;
	}else{
		
		show_validate_msg('#emp_name_input','success','');
		
	}


	if (!reg_email.test(emp_email)) {
		// alert("邮箱格式不正确！");
		show_validate_msg('#emp_email_input','error','邮箱格式不正确！');
		
		return false;
	}else{

		show_validate_msg('#emp_email_input','success','');
		
	}


	return true;
}


function show_validate_msg(ele,status,msg) {
	// body...
	$(ele).parent().removeClass('has-success has-error');
	$(ele).next("span").text('');
	if ("success" == status) {

		$(ele).parent().addClass('has-success');
		$(ele).next("span").text(msg);

	}else if ("error" == status) {

		$(ele).parent().addClass('has-error');
		$(ele).next("span").text(msg);

	}

}