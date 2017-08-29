package com.ssm.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ssm.crud.pojo.Employee;
import com.ssm.crud.service.EmployeeService;

/**
 * 处理员工的CRUD请求
* @author zhuxindong  E-mail:501801307@qq.com
* @date 创建时间：2017年8月28日 下午8:45:26
* @version 1.0
*/

@Controller
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	

	@RequestMapping("/emps.html")
	public String getEmps(@RequestParam(value="pn",defaultValue="1")Integer pn,
							Model model){
		
		/**
		 * 利用pagehelper分页插件来分页
		 */
		PageHelper.startPage(pn, 5);
		
		List<Employee> employees = employeeService.getAll();
		
		PageInfo page = new PageInfo(employees,5);
		
		model.addAttribute("pageinfo", page);
		
		return "list";
		
	}
	
	
	
	
}
