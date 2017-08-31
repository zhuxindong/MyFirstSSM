<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<!-- 引入JQuery -->
<script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<!-- 引入Bootstrap -->
<script type="text/javascript" src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">

<script type="text/javascript" src="static/js/index.js"></script>

<title>员工列表</title>
</head>
<body>



	<!-- 添加员工的模态框 -->
	<div class="modal fade" id="empAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">添加员工</h4>
	      </div>
	      <div class="modal-body">
	        
			<form class="form-horizontal">

			  <div class="form-group">
			    <label class="col-sm-2 control-label">员工姓名</label>
			    <div class="col-sm-10">
			      <input type="text" name="empName" class="form-control" id="emp_name_input" placeholder="员工姓名">
			    </div>
			  </div>
			
			  <div class="form-group">
			    <label class="col-sm-2 control-label">邮箱</label>
			    <div class="col-sm-10">
			      <input type="text" name="email" class="form-control" id="emp_name_input" placeholder="员工邮箱">
			    </div>
			  </div>

			  
			<div class="form-group">
			    <label class="col-sm-2 control-label">性别</label>
			    <div class="col-sm-10">
			      <label class="radio-inline">
					  <input type="radio" name="gender" id="gender_add_input_m" value="M" checked="checked"> 男
					</label>
					<label class="radio-inline">
					  <input type="radio" name="gender" id="gender_add_input_f" value="F"> 女
					</label>
			    </div>
			</div>


			<div class="form-group">
			    <label class="col-sm-2 control-label">部门</label>
			    <div class="col-sm-4">
			       <!--提交部门ID -->
			      <select class="form-control" name="dId">
					  
				  </select>
			    </div>
			</div>

			  
			  
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-10">
			      <button type="submit" class="btn btn-default">Sign in</button>
			    </div>
			  </div>
			</form>





	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	        <button type="button" class="btn btn-primary">保存</button>
	      </div>
	    </div>
	  </div>
	</div>






	<!-- 搭建显示页面 -->
	<div class="container">
		<!-- 标题 -->
		<div class="row">
			<div class="col-md-12">
				<h1>SSM-CRUD</h1>
			</div>
			
		</div>

		<!-- 按钮 -->
		<div class="row">
			<div class="col-md-4 col-md-offset-8" >
				<button class="btn btn-primary" id="emp_add_btn">新增</button>
				<button class="btn btn-danger">删除</button>
			</div>
		</div>

		<!-- 表格数据 -->
		<div class="row">
			<div class="col-md-12">
				<table class="table table-hover table-striped" id="emps_table">
					<thead>
						<tr>
							<th>#</th>
							<th>员工姓名</th>
							<th>性别</th>
							<th>邮箱</th>
							<th>部门</th>
							<th>操作</th>
						</tr>
					</thead>
					
					<tbody>
						


					</tbody>

					<!-- 
						 	<button class="btn btn-primary btn-sm">
						 		<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
						 		新增
						 	</button>
						 	<button class="btn btn-danger btn-sm">
						 		<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
						 		删除
						 	</button> -->
						 
					
					
					
				</table>
				

			</div>

		</div>

		<!-- 分页信息 -->
		<div class="row">
			<!-- 文字分页信息 -->
			<div class="col-md-6" id="page_info_area">
				
			</div>

			<!-- 分页条 -->
			<div class="col-md-6" id="page_nav_area">
				<!-- <nav aria-label="Page navigation">
				  <ul class="pagination" id="pagination_ul">
				  	<li  id="nav_first"><a href="#">首页</a></li>
				    <li  id="nav_go_pre">
				      <a href="#" aria-label="Previous">
				        <span aria-hidden="true">&laquo;</span>
				      </a>
				    </li>
				    <li id="nav_1"><a href="#">#</a></li>
				    <li id="nav_2"><a href="#">#</a></li>
				    <li id="nav_3"><a href="#">#</a></li>
				    <li id="nav_4"><a href="#">#</a></li>
				    <li id="nav_5"><a href="#">#</a></li>
				    <li  id="nav_go_next">
				      <a href="#" aria-label="Next">
				        <span aria-hidden="true">&raquo;</span>
				      </a>
				    </li>
				    <li  id="nav_last"><a href="#">末页</a></li>
				  </ul>
				</nav> -->
			</div>
		</div>





	</div>
	











	

</body>
</html>