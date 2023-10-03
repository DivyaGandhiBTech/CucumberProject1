package org.pojoclass;

import org.baseclass.BaseclassCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPojoclassp2 extends BaseclassCreation{
	
	public SearchPojoclassp2() {
		PageFactory.initElements(driver, this);
	}
		
	@CacheLookup
	@FindBy(xpath="(//img[@class='product-image '])[1]")
	private WebElement click;

	public WebElement getClick() {
		return click;
	}

	
	
	

}
