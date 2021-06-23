package Pages.Scholastic;

import Pages.WebCommands;
import org.openqa.selenium.By;

public class searchResultPage extends WebCommands {

    //      Locators

    By quickLook = By.xpath("//ul[@id='search-result-items']//li[@class='grid-tile new-row'][1]//a[text()='QUICK LOOK']");

    By moveMouseToQuickLook = By.xpath("//ul[@id='search-result-items']//li[@class='grid-tile new-row'][1]");

    By recommendButton = By.xpath("//span[text()='Recommend']");

    By recommendationsToStudentsCheckBox = By.xpath("//input[@class='wishlist-dialog-checkbox recommended']");

    By X_buttonFromAddToMyLists = By.xpath("//span[text()='X']");

    By X_buttonFromQuickLookWindow = By.xpath("//button[text()='Close']");

    By nameOfTheBook = By.xpath("//h1[@class='product-name']");

    By nameOfTheBookPDP = By.xpath("//ul[@id='search-result-items']//li[@class='grid-tile new-row'][1]//div//div[@class='product-tile-name']//a");






    //      Methods


    public void clickQuickLook(){
        clickThis(quickLook);
    }

    public void moveMouseToQuickLook(){
        moveMouseOverElement(moveMouseToQuickLook);
    }

    public void clickRecommendButton(){
        clickThis(recommendButton);
    }

    public void clickRecommendationsToStudentsCheckBox(){
        clickThis(recommendationsToStudentsCheckBox);
    }

    public void click_X_buttonFromAddToMyLists(){
        clickThis(X_buttonFromAddToMyLists);
    }

    public void click_X_buttonFromQuickLookWindow(){
        clickThis(X_buttonFromQuickLookWindow);
    }

    public String getTitleOfTheBook(){
        return getElementText(nameOfTheBook);
    }

    public String getTitleOfTheBookPDP(){
        return getElementText(nameOfTheBookPDP);
    }


}
