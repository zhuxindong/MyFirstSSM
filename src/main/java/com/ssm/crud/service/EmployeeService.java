package com.ssm.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssm.crud.dao.EmployeeMapper;
import com.ssm.crud.pojo.Employee;
import com.ssm.crud.pojo.EmployeeExample;
import com.ssm.crud.pojo.EmployeeExample.Criteria;
import com.ssm.crud.pojo.Msg;

/**
* @author zhuxindong  E-mail:501801307@qq.com
* @date ����ʱ�䣺2017��8��28�� ����8:49:09
* @version 1.0
*/

@Service
public class EmployeeService {

	@Autowired
	private EmployeeMapper employeeMapper;
	
	/**
	 * ��ѯ����Ա��(��ҳ��ѯ)
	 * @return
	 */
	public List<Employee> getAll(){
		
		return employeeMapper.selectByExampleWithDept(null);		
		
	}
	
	
	/**
	 * ������Ա��
	 * @param employee
	 */
	public void saveEmp(Employee employee) {
		// TODO Auto-generated method stub
		employeeMapper.insertSelective(employee);
	}

	
	/**
	 * �����û����Ƿ����
	 * @param empName
	 * @return true�������
	 */
	public boolean chechUser(String empName) {
		
		EmployeeExample example = new EmployeeExample();
		
		Criteria criteria = example.createCriteria();
		criteria.andEmpNameEqualTo(empName);
		
		long count = employeeMapper.countByExample(example);
		
		return count == 0;
	}


	public Employee getEmpById(Integer id) {
		Employee employee = employeeMapper.selectByPrimaryKey(id);
		return employee;
	}


	/**
	 * 员工更新
	 * @param employee
	 */
	public void updateEmp(Employee employee) {
		employeeMapper.updateByPrimaryKeySelective(employee);
	}


	
	
	
	
	
	
}
