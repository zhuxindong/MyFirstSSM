create table tbl_emp(
	emp_id int not null auto_increment primary key,
	emp_name varchar(120) not null,
	gender char(1),
	email varchar(120),
	d_id int,
	foreign key(d_id) references tbl_dept(dept_id)
)default charset=utf8;