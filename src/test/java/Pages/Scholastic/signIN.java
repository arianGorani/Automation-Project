package Pages.Scholastic;

import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;

public class signIN extends WebCommands {

    //  Locators

    By SignInIframe = By.xpath("//iframe[@id='iframeMyScholastic']");

    By SignInEmailField = By.xpath("//input[@id='user-text-field']");

    By continueButton = By.xpath("//button[@id='signin-email-submit-button']");

    By SignInPasswordField = By.id("password-text-field");

    By SignInButton = By.xpath("//button[@id='password']");

    By xButtonNotification = By.xpath("//span[@class='notification-close']");




    //  Methods

    public void switchToSignInIframe(){
        Sleep.sleep(1000);
        switchToFrame(SignInIframe);
        Sleep.sleep(1000);
    }

    public void typeEmailInSignIn(String email){
        Sleep.sleep(1000);
        type(SignInEmailField,email);
        Sleep.sleep(1000);
    }

    public void clickContinueButton(){
        Sleep.sleep(1000);
        clickThis(continueButton);
        Sleep.sleep(1000);
    }

    public void typePasswordInSignIn(String pass){
        type(SignInPasswordField,pass);
        Sleep.sleep(1000);
    }

    public void clickSignInButton(){
        clickThis(SignInButton);
        Sleep.sleep(1000);
    }

    public void closeNotification(){
        Sleep.sleep(1000);
        clickThis(xButtonNotification);
    }

}
