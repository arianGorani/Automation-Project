package Pages.Hotels;

import Pages.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class calendar extends WebCommands {

    //      Locators

    By allDaysInCalendar = By.xpath("//button[@aria-label='Next']/following-sibling::ul//li[1]//div//table//tbody//button");

    By backButtonInCalendar = By.xpath("//button[@aria-label='Next']/preceding-sibling::button");

    By allMonthsInCal = By.xpath("//h2[contains(text(),' 2021')]");

    By october = By.xpath("//h2[contains(text(),'October 2021')]");


    //      Methods

    public List<WebElement> getAllDaysElement(){
        return getElements(allDaysInCalendar);
    }

    public boolean isBackButtonDisable(){
        return isElementEnabled(backButtonInCalendar);
    }

    public void allMonthsCal(String input){
        List<WebElement> months = getElements(allMonthsInCal);
        for(WebElement element : months){
            String month = element.getText();
            if(month.equalsIgnoreCase(input)){
                clickThis(element);
            }

        }
    }

    public void clickOctober(){
        clickThis(october);
//        if(!isElementDisplayed(october)){
//            scrollToElement(getElement(october));
//        }
    }

}
