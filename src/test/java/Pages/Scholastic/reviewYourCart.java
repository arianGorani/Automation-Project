package Pages.Scholastic;

import Pages.WebCommands;
import Utils.GetSumFromList;
import Utils.Sleep;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class reviewYourCart extends WebCommands {

    //      Locators

    By usersNames = By.xpath("//h2//span");

    By usersTotals = By.xpath("//li[@class='std-total-price stdPriceTotal']");

    By totalOfQTY = By.xpath("//span[@class='total-qty stdPriceQty']");

    By X_DeleteButton = By.xpath("//div[@class='cart-sfo-content']//div[1]//table//tbody//tr[1]//td[@class='item-qty']//span//i");

    By yesButton = By.xpath("//div[@class='cart-sfo-content']//div[1]//table//tbody//tr[1]//td[@class='item-qty']//span//button[text()='Yes']");

    By proceedToCheckoutButton = By.xpath("//button[@id='dwfrm_cart_checkoutCart']");

    By proceedToCheckoutButtonFlayer = By.xpath("//div[@class='col promo-msg']//button");

    //      Methods


    public List<String> namesOfUsers = new ArrayList<>();
    public List<String> totalsOfUsers = new ArrayList<>();
    public List<Integer> totalInInt = new ArrayList<>();
    public List<String> totalsOfQTY = new ArrayList<>();
    public List<Integer> totalQTYinInt = new ArrayList<>();
    public int totalPrice;
    public int totalQTY;


    public void getUsersNames() {
        List<WebElement> names = getElements(usersNames);
        for (WebElement element : names) {
            String name = element.getText();
            namesOfUsers.add(name);
        }
        System.out.println(namesOfUsers);
    }

    public void getUsersTotals() {
        List<WebElement> names = getElements(usersTotals);
        for (WebElement element : names) {
            String total = element.getText();
            totalsOfUsers.add(total);
        }
        System.out.println(totalsOfUsers);
    }

    public void convertStringToInt(){
        for (int i=0; i<totalsOfUsers.size(); i++){
            String totalString = totalsOfUsers.get(i).replace("$","").replace(".00","");
            int totalInt = Integer.valueOf(totalString);
            totalInInt.add(totalInt);
        }
        totalPrice = GetSumFromList.sum(totalInInt);
        System.out.println(totalInInt + " Total Price: " + totalPrice);

    }

    public void getTotalOfQTY() {
        List<WebElement> names = getElements(totalOfQTY);
        for (WebElement element : names) {
            String total = element.getText();
            totalsOfQTY.add(total);
        }

        for (int i=0; i<totalsOfQTY.size(); i++){
            String totalString = totalsOfQTY.get(i);
            int totalInt = Integer.valueOf(totalString);
            totalQTYinInt.add(totalInt);
        }
        totalQTY = GetSumFromList.sum(totalQTYinInt);
        System.out.println(totalsOfQTY + " Total QTY: " + totalQTY + "\n\n");
    }

    public void clickXtoDelete(){
        Sleep.sleep(1000);
        clickThis(X_DeleteButton);
        Sleep.sleep(1000);
    }

    public void clickYesButton(){
        Sleep.sleep(1000);
        clickThis(yesButton);
        Sleep.sleep(2000);
    }

    //      Methods after deleting ITEM

    public List<String> namesOfUsersAfterDelete = new ArrayList<>();
    public List<String> totalsOfUsersAfterDelete = new ArrayList<>();
    public List<Integer> totalInIntAfterDelete = new ArrayList<>();
    public List<String> totalsOfQTYAfterDelete = new ArrayList<>();
    public List<Integer> totalQTYinIntAfterDelete = new ArrayList<>();
    public int totalPriceAfterDelete;
    public int totalQTYAfterDelete;

    public void getUsersNamesAfterDelete() {
        List<WebElement> names = getElements(usersNames);
        for (WebElement element : names) {
            String name = element.getText();
            namesOfUsersAfterDelete.add(name);
        }
        System.out.println(namesOfUsersAfterDelete);
    }

    public void getUsersTotalsAfterDelete() {
        List<WebElement> names = getElements(usersTotals);
        for (WebElement element : names) {
            String total = element.getText();
            totalsOfUsersAfterDelete.add(total);
        }
        System.out.println(totalsOfUsersAfterDelete);
    }

    public void convertStringToIntAfterDelete(){
        for (int i=0; i<totalsOfUsersAfterDelete.size(); i++){
            String totalString = totalsOfUsersAfterDelete.get(i).replace("$","").replace(".00","");
            int totalInt = Integer.valueOf(totalString);
            totalInIntAfterDelete.add(totalInt);
        }
        totalPriceAfterDelete = GetSumFromList.sum(totalInIntAfterDelete);
        System.out.println(totalInIntAfterDelete + " Total Price: " + totalPriceAfterDelete);

    }

    public void getTotalOfQTYAfterDelete() {
        List<WebElement> names = getElements(totalOfQTY);
        for (WebElement element : names) {
            String total = element.getText();
            totalsOfQTYAfterDelete.add(total);
        }

        for (int i=0; i<totalsOfQTYAfterDelete.size(); i++){
            String totalString = totalsOfQTYAfterDelete.get(i);
            int totalInt = Integer.valueOf(totalString);
            totalQTYinIntAfterDelete.add(totalInt);
        }
        totalQTYAfterDelete = GetSumFromList.sum(totalQTYinIntAfterDelete);
        System.out.println(totalsOfQTYAfterDelete + " Total QTY: " + totalQTYAfterDelete);
    }

    public void scrollProceedToCheckoutButton(){
        scrollToElement(getElement(proceedToCheckoutButton));
    }

    public void clickProceedToCheckoutButton(){
        Sleep.sleep(1000);
        clickThis(proceedToCheckoutButton);
        Sleep.sleep(1000);
    }

    public void clickProceedToCheckoutButtonFlayer(){
        Sleep.sleep(1000);
        clickThis(proceedToCheckoutButtonFlayer);
        Sleep.sleep(1000);
    }


}

