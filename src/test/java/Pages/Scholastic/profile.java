package Pages.Scholastic;

import Pages.WebCommands;
import org.openqa.selenium.By;

public class profile extends WebCommands {

    //  Lcators

    By addACard = By.xpath("//h3[text()='My Credit Cards']/following-sibling::div//a");

    By errorMessage = By.xpath("//div[@class='tooltipster-title']/following-sibling::div");



    //  Methods

    public void clickAddACard(){
        clickThis(addACard);
    }

    public String getErrorMessage(){
        String str = getElementText(errorMessage);
        return str;
    }

}
