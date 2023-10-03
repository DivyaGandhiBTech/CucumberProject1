package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.baseclass.BaseclassCreation;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.pojoclass.Pojoclassln;
import org.pojoclass.Pojoclasslogin;
import org.pojoclass.SearchPojoclassp4;

import io.cucumber.java.en.*;

public class LoginbtnStepdefinition extends BaseclassCreation {


@When("User should click the USA")
public void user_should_click_the_USA() {
   
	SearchPojoclassp4  p = new SearchPojoclassp4();

	WebElement clk = p.getToclick();
	toClick(clk);

	applyImplicitWait();
	
}

@When("User should enter invalid username and valid password")
public void user_should_enter_invalid_username_and_valid_password(io.cucumber.datatable.DataTable d1) {
  
	Pojoclasslogin pc = new Pojoclasslogin();
	applyImplicitWait();
	WebElement ca = pc.getClickAccount();
	toClick(ca);

	WebElement clicksignin = pc.getClicksignin();
	toClick(clicksignin);

	applyImplicitWait();

	Pojoclassln pi = new Pojoclassln();

	WebElement txtuser = pi.getTxtuser();
	List<Map<String, String>> mp = d1.asMaps();
	String stn = mp.get(1).get("Address");
	fillTextBox(txtuser, stn);

	applyImplicitWait();
	
	WebElement txtpass = pi.getTxtpass();
	fillTextBox(txtpass,mp.get(2).get("Username"));
	
}

@When("User should click the login button")
public void user_should_click_the_login_button() {
	Pojoclassln pi = new Pojoclassln();

	WebElement clkbtn = pi.getClkbtn();
	toClick(clkbtn);
	
	
}

@When("User should print the title of login button")
public void user_should_print_the_title_of_login_button() {
    
	System.out.println(driver.getTitle());
	
}

@Then("User should navigate to correct credential page")
public void user_should_navigate_to_correct_credential_page() {
   
	String currentUrl = driver.getCurrentUrl();
	Assert.assertTrue("Verify credencial", currentUrl.contains("identity"));
	System.out.println("Testcase passed");
	
}

@When("User should enter valid username and invalid password")
public void user_should_enter_valid_username_and_invalid_password(io.cucumber.datatable.DataTable d) {
	
	Pojoclasslogin pc = new Pojoclasslogin();
	applyImplicitWait();
	WebElement ca = pc.getClickAccount();
	toClick(ca);

	WebElement clicksignin = pc.getClicksignin();
	toClick(clicksignin);

	applyImplicitWait();

	Pojoclassln pi = new Pojoclassln();

	WebElement txtuser = pi.getTxtuser();
	String srn = d.asList().get(2);
	fillTextBox(txtuser, srn);
	
	applyImplicitWait();

	WebElement txtpass = pi.getTxtpass();
	fillTextBox(txtpass, d.asList().get(1));
	
	
}




@When("User should enter invalid username {string} and invalid password{string}")
public void user_should_enter_invalid_username_and_invalid_password(String s1, String s2) {
   
	
	Pojoclasslogin pc = new Pojoclasslogin();
	applyImplicitWait();
	WebElement ca = pc.getClickAccount();
	toClick(ca);

	WebElement clicksignin = pc.getClicksignin();
	toClick(clicksignin);

	applyImplicitWait();

	Pojoclassln pi = new Pojoclassln();

	WebElement txtuser = pi.getTxtuser();
	fillTextBox(txtuser, s1);
	applyImplicitWait();

	WebElement txtpass = pi.getTxtpass();
	fillTextBox(txtpass, s2);
	
}


	

	
}
