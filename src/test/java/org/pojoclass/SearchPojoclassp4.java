package org.pojoclass;

import org.baseclass.BaseclassCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPojoclassp4 extends BaseclassCreation{
	
	
	public SearchPojoclassp4() {
	
		PageFactory.initElements(driver, this);
		

	}
	@CacheLookup
	@FindBy(xpath="(//img[@alt='United States'])[1]")
	private WebElement toclick;
	public WebElement getToclick() {
		return toclick;
	}
	
	
	
	

}
