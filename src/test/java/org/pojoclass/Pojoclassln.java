package org.pojoclass;

import org.baseclass.BaseclassCreation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pojoclassln extends BaseclassCreation {
	
	public Pojoclassln() {
		PageFactory.initElements(driver, this);
		
	}

	@CacheLookup
	@FindBy(id="fld-e")
	private WebElement txtuser;

	public WebElement getTxtuser() {
		return txtuser;
	}

    @FindBy(id="fld-p1")
	private WebElement txtpass;
	

	public WebElement getTxtpass() {
		return txtpass;
	}
	
	@FindBy(xpath="//button[text()='Sign In']")
	private WebElement clkbtn;

	public WebElement getClkbtn() {
		return clkbtn;
	}
	
}
