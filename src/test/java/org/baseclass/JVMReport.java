package org.baseclass;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	
	public static void generateJvmReport(String jsonpath) { 
		
		File f=new File(System.getProperty("user.dir")+"\\target\\Report\\cucumber");
		
		Configuration con=new Configuration(f,"bestbuy project");
		
		con.addClassifications("BrowserName", "chrome");
		con.addClassifications("Browser version", "116");
		con.addClassifications("Os", "window");
		con.addClassifications("sprint", "101");
		con.addClassifications("TimeZone","IST");
		
	List<String> li = new ArrayList<String>();
	li.add(jsonpath);
	
	ReportBuilder r = new ReportBuilder(li, con);
	r.generateReports();
			
	
		
		
		
		
		
		
		
		

	}
	
	
	
	

}
