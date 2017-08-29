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

<title>员工列表</title>
</head>
<body>
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
				<button class="btn btn-primary">新增</button>
				<button class="btn btn-danger">删除</button>
			</div>
		</div>

		<!-- 表格数据 -->
		<div class="row">
			<div class="col-md-12">
				<table class="table table-hover table-striped">
					<tr>
						<th>#</th>
						<th>员工姓名</th>
						<th>性别</th>
						<th>邮箱</th>
						<th>部门</th>
						<th>操作</th>
					</tr>
					
					<c:forEach items="${pageinfo.list}" var="emp">
						<tr>
						 <th>${emp.empId}</th>
						 <th>${emp.empName}</th>
						 <th>${emp.gender=="M"?"男":"女"}</th>
						 <th>${emp.email}</th>
						 <th>${emp.department.deptName}</th>
						 <th>
						 	<button class="btn btn-primary btn-sm">
						 		<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
						 		新增
						 	</button>
						 	<button class="btn btn-danger btn-sm">
						 		<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
						 		删除
						 	</button>
						 </th>
					</tr>
					
					</c:forEach>
					
					
					
				</table>
				

			</div>

		</div>

		<!-- 分页信息 -->
		<div class="row">
			<!-- 文字分页信息 -->
			<div class="col-md-6">
				当前${pageinfo.pageNum}页，总共${pageinfo.pages}页,总共${pageinfo.total}条记录
			</div>

			<!-- 分页条 -->
			<div class="col-md-6">
				<nav aria-label="Page navigation">
				  <ul class="pagination">
				  
				  	<li><a href="emps.html?pn=1">首页</a></li>
				  
				  	<c:if test="${pageinfo.hasPreviousPage}">
				  		<li>
					      <a href="emps.html?pn=${pageinfo.pageNum-1}" aria-label="Previous">
					        <span aria-hidden="true">&laquo;</span>
					      </a>
					    </li>
				  	</c:if>
				  
				  	
				    
				    
				    <c:forEach items="${pageinfo.navigatepageNums}" var="page_Nums">
				    	<c:if test="${page_Nums == pageinfo.pageNum }">
				    		<li class="active"><a href="#">${page_Nums}</a></li>
				    	</c:if>
				    	
				    	<c:if test="${page_Nums != pageinfo.pageNum }">
				    		<li><a href="emps.html?pn=${page_Nums}">${page_Nums}</a></li>
				    	</c:if>
				    	
				    </c:forEach> 
				    
				    <c:if test="${pageinfo.hasNextPage}">
				    	<li>
					      <a href="emps.html?pn=${pageinfo.pageNum+1}" aria-label="Next">
					        <span aria-hidden="true">&raquo;</span>
					      </a>
					    </li>
				    </c:if>
				  
				    
				    <li><a href="emps.html?pn=${pageinfo.pages}">末页</a></li>
				  </ul>
				</nav>
			</div>
		</div>





	</div>
	
</body>
</html>