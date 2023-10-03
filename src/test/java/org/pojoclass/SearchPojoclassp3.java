package org.pojoclass;



import org.baseclass.BaseclassCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPojoclassp3 extends BaseclassCreation {
	
	public SearchPojoclassp3() {
		
		PageFactory.initElements(driver, this);
		
		}

	@CacheLookup
	@FindBy(xpath="(//button[@type='button'])[56]")
	private WebElement clickbtn;

	public WebElement getClickbtn() {
		return clickbtn;
	}

	}
	
	
	
	
	
	

