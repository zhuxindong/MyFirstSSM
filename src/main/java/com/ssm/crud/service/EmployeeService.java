package com.ssm.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssm.crud.dao.EmployeeMapper;
import com.ssm.crud.pojo.Employee;
import com.ssm.crud.pojo.Msg;

/**
* @author zhuxindong  E-mail:501801307@qq.com
* @date 创建时间：2017年8月28日 下午8:49:09
* @version 1.0
*/

@Service
public class EmployeeService {

	@Autowired
	private EmployeeMapper employeeMapper;
	
	/**
	 * 查询所有员工(分页查询)
	 * @return
	 */
	public List<Employee> getAll(){
		
		return employeeMapper.selectByExampleWithDept(null);		
		
	}
	
	
	/**
	 * 保存新员工
	 * @param employee
	 */
	public void saveEmp(Employee employee) {
		// TODO Auto-generated method stub
		employeeMapper.insertSelective(employee);
	}
	
	
	
	
	
}
