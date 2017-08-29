package com.ssm.crud.test;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.github.pagehelper.PageInfo;
import com.ssm.crud.pojo.Employee;

/**
* @author zhuxindong  E-mail:501801307@qq.com
* @date 创建时间：2017年8月28日 下午9:06:55
* @version 1.0
*/

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:springmvc.xml"})
public class MVCTest {
	
	@Autowired
	WebApplicationContext context;
	
	/**
	 * 虚拟的mvc请求
	 */
	MockMvc mockMvc;
	
	@Before
	public void initMockMvc(){
		
		mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
		
	}
	
	@Test
	public void testPage() throws Exception{
		
		/**
		 * 模拟请求拿到返回值
		 */
		MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/emps.html").param("pn", "6"))
		.andReturn();
		
		MockHttpServletRequest request = result.getRequest();
		
		PageInfo pageInfo = (PageInfo) request.getAttribute("pageinfo");
		
		System.out.println("当前页码："+pageInfo.getPageNum());
		System.out.println("总页码："+pageInfo.getPages());
		System.out.println("总记录数："+pageInfo.getTotal());
		
		System.out.println("当前页面需要显示的页码：");
		int[] nums = pageInfo.getNavigatepageNums();
		for (int i : nums) {
			System.out.print(" "+i);
		}
		System.out.println("");
		/**
		 * 获取员工数据
		 */
		List<Employee> employees = pageInfo.getList();
		for (Employee employee : employees) {
			System.out.println("ID:"+employee.getEmpId()+"===>Name: "+employee.getEmpName());
		}
		
		
		
		
		
		
	}
	
	
	
	
	
	
	
	

}
