package Pages.Scholastic;

import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;

public class studentFlyerOrders extends WebCommands {

    //      Locators

    By studentNameField = By.id("student-name");

    By itemNumberField = By.id("item-number");

    By addButton = By.xpath("//button[text()='ADD']");

    By QTY_box = By.xpath("//input[@class='input-qty numericenteronly']");

    By reviewCartButton = By.xpath("//button[contains(text(),'Review Cart')]");

    By errorBoxFromAddButton = By.xpath("//span[@id='error-message-tooltip']");

    By yourTeacherOrderVertical = By.xpath("//div[@class='tabnav hide-mobile']//a[contains(text(),'Your Teacher Order')]");


    //      Methods

    public void typeStudentName(String input){
        type(studentNameField,input);
    }

    public void typeItemNumberField(String input){
        type(itemNumberField,input);
    }

    public void clickAddButton(){
        clickThis(addButton);
    }

    public void typeQtyBox(String input){
        type(QTY_box,input);
    }

    public void clickReviewCartButton(){
        clickThis(reviewCartButton);
    }

    public String getTextFromErrorBox(){
        return getElementText(errorBoxFromAddButton);
    }

    public void clickYourTeacherOrderVertical(){
        Sleep.sleep(1000);
        clickThis(yourTeacherOrderVertical);
        Sleep.sleep(1000);
    }
}
