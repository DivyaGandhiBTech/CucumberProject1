package org.pojoclass;


import org.baseclass.BaseclassCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pojoclasslogin extends BaseclassCreation {
	
	public Pojoclasslogin() {
		
		PageFactory.initElements(driver, this);
		
	}
	
@CacheLookup
@FindBy(xpath="//span[@class='v-p-right-xxs line-clamp']")
private WebElement clickAccount;

public WebElement getClickAccount() {
	return clickAccount;
}

@FindBy(xpath="//a[text()='Sign In']")
private WebElement clicksignin;

public WebElement getClicksignin() {
	return clicksignin;
}





		
		
		
		
		
	}
	

