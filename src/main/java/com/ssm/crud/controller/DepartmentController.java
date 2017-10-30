package com.ssm.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ssm.crud.pojo.Department;
import com.ssm.crud.pojo.Msg;
import com.ssm.crud.service.DepartmentService;

/**
* @author zhuxindong  E-mail:501801307@qq.com
* @date 创建时间：2017年9月1日 下午4:19:11
* @version 1.0
*/

@Controller
public class DepartmentController {
	
	@Autowired
	private DepartmentService departmentService;
	
	
	
	/**
	 * 查询所有部门信息
	 * 返回json数据
	 * @return
	 */
	@RequestMapping("/depts")
	@ResponseBody
	public Msg getDepts(){
		
		List<Department> list = departmentService.getAll();
		
		return Msg.success().add("depts", list);
		
		
	}
	
	

}
