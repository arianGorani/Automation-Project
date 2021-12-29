package Pages.Scholastic;

import Pages.WebCommands;
import org.openqa.selenium.By;

public class rewardsCoupons extends WebCommands {

    //      Locators

    By taxField = By.xpath("//span[@id='order_total_tax']");


    //      Methods

    public String getTaxText(){
        return getElementText(taxField);
    }
}
