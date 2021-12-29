package StepDefinition.Scholastic;

import Pages.Scholastic.yourTeacherOrder;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class yourTeacherOrderSD {

    yourTeacherOrder YTO = new yourTeacherOrder();


    boolean isElementDisplayed;
    String jumperMessageFromHeader;
    String jumperMessageFromBody;

    @And("^I click on of Price-QTY box$")
    public void clickPriceQtyBox(){
        YTO.scroll();
        YTO.clickPriceQtyBox();

    }

    @Then("^I verify Teacher sees a jumper right above the box with message$")
    public void verifyTeacherSeesJumper(){

        String expectedJumperHeaderMessage = "IMPORTANT";
        String expectedJumperBodyMessage = "All student paper flyer orders MUST be entered in the Student Flyer Orders tab.";

        isElementDisplayed = YTO.isJumperElementDisplayed();

        jumperMessageFromHeader = YTO.getTexFromHeadJumper();
        jumperMessageFromBody = YTO.getTexFromBodyJumper();

        System.out.println("Is Jumper displayed: " + isElementDisplayed);
        System.out.println("\nExpected messages:");
        System.out.println(expectedJumperHeaderMessage);
        System.out.println(expectedJumperBodyMessage);
        System.out.println("\nMessages from jumper:");
        System.out.println(jumperMessageFromHeader);
        System.out.println(jumperMessageFromBody);


        Assert.assertTrue(isElementDisplayed, "Element is not displayed");
        Assert.assertEquals(expectedJumperHeaderMessage,jumperMessageFromHeader,"The messages are not the same");
        Assert.assertEquals(expectedJumperBodyMessage,jumperMessageFromBody,"The messages are not the same");
    }

    @When("^I enter data '(.*)' on Price-QTY box$")
    public void enterDattaOnQtyBox(String input){
        YTO.typeOnQtyBox(input);
    }

    @When("^I enter data '(.*)' on different Price-QTY box$")
    public void enterDattaOnDifferentQtyBox(String input){
        YTO.typeOnQtyBox1(input);
    }

    @And("^I click on another Price-QTY Box$")
    public void clickAnotherQtyBox(){
        YTO.clickDifferentPriceQtyBox();
    }

    @Then("^I verify Teacher does NOT see any jumper$")
    public void verifyTeacherDoesNotSeeJumper(){
        isElementDisplayed = YTO.isJumperElementDisplayed();
        Assert.assertFalse(isElementDisplayed,"Element is displayed");
        System.out.println("\nIs Jumper displayed: " + isElementDisplayed);
    }

    @And("^I click BY Flyer$")
    public void clickByFlyer(){
        YTO.clickByFlyer();
    }

    @And("^I click on REVIEW CART on YTO Page$")
    public void clickReviewCartInYTO(){
        YTO.scrollToReviewCartButton();
        YTO.clickReviewCartButton();
    }


}
