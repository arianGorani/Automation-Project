package StepDefinition.Hotels;

import Pages.Hotels.homepage;
import Pages.Hotels.roomsPopUp;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class roomsPopUpSD {

    roomsPopUp roomPop = new roomsPopUp();
    homepage hp = new homepage();

    String numberOfAdultsStep3;
    String numberOfChildrenStep4;

    @And("^I select Adult as '(.*)'$")
    public void selectAdultDropdown(String input){
        numberOfAdultsStep3 = input;
        roomPop.setSelectAdultsNumber(input);
    }

    @And("^I select Children as '(.*)'$")
    public void selectChildrenDropdown(String input){
        numberOfChildrenStep4 = input;
        roomPop.setSelectChildrenNumber(input);
    }

    @And("^I select first child age '(.*)'$")
    public void selectChild1Age(String input){
        roomPop.setChild1Age(input);
    }

    @And("^I select second child age '(.*)'$")
    public void selectChild2Age(String input){
        roomPop.setChild2Age(input);
        roomPop.getTextNumAdultsChildren();
    }

    @Then("^I Verify On Rooms pop-up, number of adults and children are same as selected on step #3 and #4$")
    public void verifyNumAdultsChildren(){

        System.out.println(numberOfAdultsStep3 +" " + roomPop.adultsNumber);
        System.out.println(numberOfChildrenStep4 +" " + roomPop.childrenNumber);

        Assert.assertEquals(numberOfAdultsStep3,roomPop.adultsNumber,"Number of Adults are not the same");
        Assert.assertEquals(numberOfChildrenStep4,roomPop.childrenNumber,"Number of Children are not the same");
    }

    @When("^I click Apply Button$")
    public void clickApplyButton(){
        roomPop.clickApplyButton();
    }

    @Then("^I Verify total number of guests in sum of adults and children are same as selected on step #3 and #4$")
    public void verify(){
        int AdultsInt = Integer.valueOf(numberOfAdultsStep3);
        int ChildrenInt = Integer.valueOf(numberOfChildrenStep4);

        int totalNumOfGuestsFromSteps3n4 = AdultsInt + ChildrenInt;
        int totalNumGuestFromHomePage = hp.getGuestText();

        System.out.println(totalNumGuestFromHomePage + " " + totalNumOfGuestsFromSteps3n4);

        Assert.assertEquals(totalNumOfGuestsFromSteps3n4,totalNumGuestFromHomePage,"Guests number are not the same");

    }




}
