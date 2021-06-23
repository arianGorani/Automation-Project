package Pages.Scholastic;

import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;

public class yourTeacherOrder extends WebCommands {


    //      Locators

    By PriceQtyBoxNr4 =  By.xpath("//input[@data-itemid='4S8']");

    By PriceQtyBoxNr6 =  By.xpath("//input[@data-itemid='6S8']");

    By PriceQtyBoxNr8 =  By.xpath("//input[@data-itemid='8S8']");

    By PriceQtyBoxNr2 =  By.xpath("//input[@data-itemid='2S8']");

    By jumperBox =  By.xpath("//div[@id='info-student-flyer-order-fee']");

    By headerMessageFromJumper =  By.xpath("//div[@class='info-modal-hd']");

    By bodyMessageFromJumper =  By.xpath("//div[@class='info-modal-content']");

    By byFlyer =  By.xpath("//ul[@class='hidden-xs']//a[text()='By Flyer']");

    By reviewCartButton =  By.xpath("//button[contains(text(),'Review Cart')]");



    //      Methods


    public void scroll(){
        scrollDownByPixel(500);
    }

    public void clickPriceQtyBox(){
        clickThis(PriceQtyBoxNr8);
    }

    public boolean isJumperElementDisplayed(){
        return isElementDisplayed(jumperBox);
    }

    public String getTexFromHeadJumper(){
        return getElementText(headerMessageFromJumper).toUpperCase().trim().replace("!","");
    }

    public String getTexFromBodyJumper(){
        return getElementText(bodyMessageFromJumper);
    }

    public void typeOnQtyBox(String input){
        type(PriceQtyBoxNr4,input);
        Sleep.sleep(1000);
    }

    public void typeOnQtyBox1(String input){
        type(PriceQtyBoxNr6,input);
        Sleep.sleep(1000);
    }

    public void clickDifferentPriceQtyBox(){
        clickThis(PriceQtyBoxNr2);
        Sleep.sleep(1000);
    }

    public void clickByFlyer(){
        Sleep.sleep(1000);
        clickThis(byFlyer);
        Sleep.sleep(2000);
    }

    public void scrollToReviewCartButton(){
        scrollToElement(getElement(reviewCartButton));
        Sleep.sleep(1000);
    }

    public void clickReviewCartButton(){
        clickThis(reviewCartButton);
        Sleep.sleep(1000);
    }



}
