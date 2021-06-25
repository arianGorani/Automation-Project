package Pages.Hotels;

import DriverWrapper.Web;
import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;


public class homepage extends WebCommands {

    Web web = new Web();

    //      Locators

    By checkInButton = By.xpath("//span[contains(text(),'Check in')]");

    By guestsButton = By.xpath("//span[contains(text(),'Guests')]");

    By roomAndGuestText = By.xpath("//span[contains(text(),'Guests')]/following-sibling::span");

    By searchField = By.xpath("//span[contains(text(),'e.g. Las Vegas')]");

    By searchFieldInside = By.xpath("//input[@name='q-destination-srs7']");

    By allAutoSuggestionElement = By.xpath("//section[@class='modal-bd in-viewport-root']//li");

    By firstAutoSuggestionElement = By.xpath("//section[@class='modal-bd in-viewport-root']//li[1]");

    By couponFlayer = By.xpath("//div[@role='dialog']");

    By couponFlayer_X_button = By.xpath("//div[@role='dialog']//button[@aria-label='Close overlay']");

    By changeDatesButton = By.xpath("//button[contains(text(),'Change dates')]");



    //      Methods

    public boolean isCouponDisplayed(){
        Sleep.sleep(1000);
        return isElementDisplayed(couponFlayer);
    }
    public void closeCouponFlayer(){
        Sleep.sleep(1000);
        clickThis(couponFlayer_X_button);
    }

    public void lunchWebsite(){
        web.openUrl2("https://www.hotels.com/");
    }

    public void clickCheckInButton(){
        clickThis(checkInButton);
    }

    public void clickGuestsButton(){
        clickThis(guestsButton);
    }

    public int getGuestText(){
        String text = getElementText(roomAndGuestText);
        String[] split = text.split(" ");
        String numOfGuests = split[2];

        int numOfGuestsInt = Integer.valueOf(numOfGuests);

        return numOfGuestsInt;
    }

    public void clickSearchField(){
        clickThis(searchField);
    }

    public void typeSearchField(String input){
        type(searchFieldInside, input);
    }

    public void selectFromSearchField(String input){
        selectFromAutoSuggestion(allAutoSuggestionElement, input);
    }

    public void clickFirstAutoSuggestionElement(){
        clickThis(firstAutoSuggestionElement);
    }

    public void isButtonDisplayed(){
        if(!isElementDisplayed(changeDatesButton)){
            //scrollToElement(getElement(changeDatesButton));
            scrollToBottom();
        }
    }







}
