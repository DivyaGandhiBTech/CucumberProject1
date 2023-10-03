package org.stepdefinition;

import java.io.IOException;

import org.baseclass.BaseclassCreation;
import org.junit.AfterClass;
import org.junit.BeforeClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;

public class HooksClass extends BaseclassCreation {

	@BeforeClass()
public static void OnBuy() {
		
		openEdge();
		launchUrl("https://www.bestbuy.com/");
	

}

	@After(order = -1)
	public void afterScenario(Scenario s) throws IOException {

		String name = s.getName();
		String fileName = name.replace(" ", "_");
		takescreenshot(fileName);

	}

	@AfterClass()
	public static void online(){

		closeBrowser();

	}

}





