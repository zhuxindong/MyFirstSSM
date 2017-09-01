package com.ssm.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssm.crud.dao.DepartmentMapper;
import com.ssm.crud.pojo.Department;

/**
* @author zhuxindong  E-mail:501801307@qq.com
* @date 创建时间：2017年9月1日 下午4:21:38
* @version 1.0
*/

@Service
public class DepartmentService {

	@Autowired
	private DepartmentMapper mapper;
	
	public List<Department> getAll(){
		
		return mapper.selectByExample(null);
		
		
	}
	
	
	
}
