package org.runner;

import org.baseclass.JVMReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Rerun\\FailedTestcase.txt", glue = "org.stepdefinition", dryRun = false, monochrome = true, tags = {
		"@Regresstion" }, plugin = { "html:target\\Report1", "junit:target\\Report1\\bestBuyOnline.xml",
				"json:target\\Report1\\bestBuyOnline.json" })

public class Rerunner extends JVMReport {

	@AfterClass

	public static void callReport() {

		generateJvmReport(System.getProperty("user.dir") + "\\target\\Report1\\bestBuyOnline.json");
	}

}
