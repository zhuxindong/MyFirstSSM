package com.ssm.crud.pojo;

import java.util.HashMap;
import java.util.Map;

/**
* @author zhuxindong  E-mail:501801307@qq.com
* @date ����ʱ�䣺2017��8��30�� ����7:12:29
* @version 1.0
*/

public class Msg {
	
	/**
	 * ״̬��
	 * 100-�ɹ���200-ʧ��
	 */
	private int code;
	
	/**
	 * ��ʷ��Ϣ
	 */
	private String msg;
	
	/**
	 * �û����ص����������
	 */
	private Map<String, Object> extend = new HashMap<String, Object>();

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Map<String, Object> getExtend() {
		return extend;
	}

	public void setExtend(Map<String, Object> extend) {
		this.extend = extend;
	}

	
	public static Msg success(){
		
		Msg result = new Msg();
		
		result.setCode(100);
		result.setMsg("�����ɹ���");
		
		return result;
		
	}
	
	
	public static Msg fail(){
		
		Msg result = new Msg();
		
		result.setCode(200);
		result.setMsg("����ʧ�ܣ�");
		
		return result;
		
	}
	
	public Msg add(String key, Object value){
		this.extend.put(key, value);
		return this;
	}
	
	
	
	
	
}