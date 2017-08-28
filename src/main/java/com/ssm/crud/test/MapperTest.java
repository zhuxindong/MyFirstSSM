package com.ssm.crud.test;

import java.util.UUID;

import org.apache.ibatis.session.SqlSession;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.ssm.crud.dao.DepartmentMapper;
import com.ssm.crud.dao.EmployeeMapper;
import com.ssm.crud.pojo.Department;
import com.ssm.crud.pojo.Employee;

/**
 *  测试DAO层
* @author zhuxindong  E-mail:501801307@qq.com
* @date 创建时间：2017年8月27日 下午8:16:51
* @version 1.0
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml"})
public class MapperTest {
	
	@Autowired
	DepartmentMapper departmentMapper;
	
	@Autowired
	EmployeeMapper employeeMapper;
	
	@Autowired
	SqlSession sqlSession;

	/**
	 * 测试departmentMapper
	 */
	@Test
	public void testCRUD(){
		
		//System.out.println(departmentMapper);
		
		//1.测试部门插入
//		Department department1 = new Department(null,"开发部");
//		Department department2 = new Department(null,"测试部");
//		
//		departmentMapper.insertSelective(department1);
//		departmentMapper.insertSelective(department2);
		
		
		
		//2.测试员工插入
//		Employee employee1 = new Employee(null, "Tom", "M", "Tom@qq.com", 9);
//		employeeMapper.insertSelective(employee1);
		
		//3.测试批量插入
		EmployeeMapper mapper = sqlSession.getMapper(EmployeeMapper.class);
		for(int i=0; i<1000; i++){
			String uid = UUID.randomUUID().toString().substring(0,5) + i;
			mapper.insertSelective(new Employee(null, uid, "M", uid+"@qq.com", 9));
			
		}
		System.out.println("success!");
		
	}
	
}
