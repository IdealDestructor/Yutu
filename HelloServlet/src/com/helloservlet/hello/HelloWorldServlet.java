package com.helloservlet.hello;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.sql.*;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorldServlet extends HttpServlet {
	@Override 
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		doPost(request, response);
	}@Override 
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		//������һ��bardao�Ķ���barDAO��Ҫ�Ƕ����ݿ�����ӺͶ����ݿ�Ĳ���
        barDAO bardao=new barDAO();
        String keyword = request.getParameter("keyword");	
		//����bardao��select_all()�����Ѵ����ݿ��ж�ȡ���е����ݷ��ص���һ��ArrayList��ArrayList����ŵ���һ��barBean
        ArrayList<barBean> array = bardao.select_all(keyword);
        //���÷���ʱ�ı����ʽ
        response.setContentType("application/json; charset=utf-8");
        //����JSONArray.fromObject������array�еĶ���ת��ΪJSON��ʽ������
        JSONArray json=JSONArray.fromObject(array);
        System.out.println(json.toString());
        //���ظ�ǰ��ҳ��
        PrintWriter out = response.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();  
	         
	}
}
