package Pages.Hotels;

import Pages.WebCommands;
import org.openqa.selenium.By;



public class roomsPopUp extends WebCommands {

    //      Locators

    By selectAdultsNumber = By.xpath("//select[@name='q-room-0-adults']");

    By selectChildrenNumber = By.xpath("//select[@name='q-room-0-children']");

    By child1Age = By.xpath("//select[@name='q-room-0-child-0-age']");

    By child2Age = By.xpath("//select[@name='q-room-0-child-1-age']");

    By numAdultsChildren = By.xpath("//footer[@class='modal-ft']//div");

    By applyButton = By.xpath("//button[contains(text(),'Apply')]");

    //      Methods

    public String adultsNumber;
    public String childrenNumber;

    public void setSelectAdultsNumber(String input){
        selectFromDropdown(selectAdultsNumber,input);
    }

    public void setSelectChildrenNumber(String input){
        selectFromDropdown(selectChildrenNumber,input);
    }

    public void setChild1Age(String input){
        selectFromDropdown(child1Age,input);
    }

    public void setChild2Age(String input){
        selectFromDropdown(child2Age,input);
    }

    public void getTextNumAdultsChildren(){
        String text = getElementText(numAdultsChildren);

        String[] split = text.split(" ");
        String[] split2 = split[1].split("Room");

        adultsNumber = split2[1].substring(1);
        childrenNumber = split[3];

    }
    public void clickApplyButton(){
        clickThis(applyButton);
    }


}
