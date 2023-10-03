package org.stepdefinition;

import org.baseclass.BaseclassCreation;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.pojoclass.SearchPojoclassp4;
import org.pojoclass.SearchPojoclassp1;
import org.pojoclass.SearchPojoclassp2;
import org.pojoclass.SearchPojoclassp3;

import io.cucumber.java.en.*;

public class SearchStepdefinition extends BaseclassCreation {

	@Given("User should launch the browser and load the Url.")
	public void user_should_launch_the_browser_and_load_the_Url() {

		openEdge();
		launchUrl("https://www.bestbuy.com/");
		maxwindow();
		applyImplicitWait();

	}

	@When("User should click the USA.")
	public void user_should_click_the_USA() {
		SearchPojoclassp4  p = new SearchPojoclassp4();

		WebElement clk = p.getToclick();
		toClick(clk);

		applyImplicitWait();
	}

	@When("User should search a particular product.")
	public void user_should_search_a_particular_product() {

		SearchPojoclassp1 p1 = new SearchPojoclassp1();

		WebElement search = p1.getSearch();
		fillTextBox(search, "laptop");

		WebElement searchbtn = p1.getSearchbtn();
		toClick(searchbtn);

	}

	@When("User should print the title of your page.")
	public void user_should_print_the_title_of_your_page() {

		SearchPojoclassp2  p2 = new SearchPojoclassp2();
		WebElement click = p2.getClick();
		toClick(click);

		System.out.println(driver.getTitle());

	}

	@When("User should click the click search button.")
	public void user_should_click_the_click_search_button() {

		SearchPojoclassp3  p3 = new SearchPojoclassp3();
		WebElement clckbtn = p3.getClickbtn();
		toClick(clckbtn);

	}

	@Then("User should navigate to correct credential page.")
	public void user_should_navigate_to_correct_credential_page() {

		String crturl = driver.getCurrentUrl();
		Assert.assertTrue("Verify credencial", crturl.contains("memory"));
		System.out.println("Testcase passed");

	}
	
	

}
