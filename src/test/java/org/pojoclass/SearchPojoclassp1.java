package org.pojoclass;

import org.baseclass.BaseclassCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPojoclassp1 extends BaseclassCreation {

	public SearchPojoclassp1() {
		PageFactory.initElements(driver, this);
	}
		
		
		
	
	@CacheLookup
	@FindBy(id="gh-search-input")
	private WebElement search;
	
	public WebElement getSearch() {
		return search;
	}
	@FindBy(className="header-search-button")
	private WebElement searchbtn;

	public WebElement getSearchbtn() {
		return searchbtn;
	}

	

}
