package StepDefinition.Scholastic;

import Pages.Scholastic.studentFlyerOrders;
import Utils.Sleep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class studentFlyerOrdersSD {

    studentFlyerOrders SFO = new studentFlyerOrders();

    @And("^I type '(.*)' in Student name and '(.*)' in ITEM# and click ADD$")
    public void typeStudentName(String name,String input){
        SFO.typeStudentName(name);
        Sleep.sleep(1000);
        SFO.typeItemNumberField(input);
        Sleep.sleep(1000);
        SFO.clickAddButton();
        Sleep.sleep(1000);
    }

    @And("I add '(.*)' in QTY box")
    public void typeQtyBox(String input){
        SFO.typeQtyBox(input);
        Sleep.sleep(1000);
    }

    @And("^I click on REVIEW CART$")
    public void clickReviewCartButton(){
        Sleep.sleep(1000);
        SFO.clickReviewCartButton();
        Sleep.sleep(1000);
    }

    @Then("^I verify Teacher gets error message for invalid item number in SFO$")
    public void verifyTeacherGetsError(){

        String expectedErrorMessage = "Please enter a valid item number.";
        String errorMessage = SFO.getTextFromErrorBox();

        System.out.println("Expected Error Message: " + expectedErrorMessage);
        System.out.println("Error Message: " + errorMessage);

        Assert.assertEquals(expectedErrorMessage,errorMessage,"The Error messages are not the same");
    }

    @And("^I click Your Teacher Order$")
    public void clickYourTeacherOrderVertical(){
        SFO.clickYourTeacherOrderVertical();
    }


}
