package StepDefinition.Scholastic;

import Pages.Scholastic.profile;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class profileSD {

    Pages.Scholastic.profile profile = new profile();

    @And("^I click on Add a Card$")
    public void clickOnAddACard(){
        profile.clickAddACard();
    }

    @Then("^I verify I get error message 'You can only store three credit cards' while adding 4th cc$")
    public void getErrorMessage(){
        String errorStringFromWeb = profile.getErrorMessage();
        String expectedError ="You can only store three credit cards";

        Assert.assertEquals(errorStringFromWeb,expectedError,"The error message is not the same as expected");


    }




}
