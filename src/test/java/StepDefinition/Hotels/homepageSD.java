package StepDefinition.Hotels;


import Pages.Hotels.homepage;
import Utils.Sleep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class homepageSD {

    homepage hp = new homepage();
    roomsPopUpSD roomSD = new roomsPopUpSD();

    @Given("^I launch Hotels.com$")
    public void lunchWebSite(){
        hp.lunchWebsite();
        if(hp.isCouponDisplayed()){
            hp.closeCouponFlayer();
        }
    }

    @When("^I click on Check In Calendar$")
    public void clickCheckInButton(){
        hp.clickCheckInButton();
    }

    @When("^I click on Guests$")
    public void clickOnGuests(){
        hp.clickGuestsButton();
    }

    @When("^I type '(.*)' in Search field$")
    public void selectFromSearchField(String input){
        Sleep.sleep(1000);
        hp.clickSearchField();
        hp.typeSearchField(input);

    }

    @And("^I choosing '(.*)'$")
    public void chooseFromAutoSuggestion(String input){
        Sleep.sleep(1000);
        //hp.selectFromSearchField(input);
        hp.clickFirstAutoSuggestionElement();
    }


}
