package StepDefinition.Scholastic;

import Pages.Scholastic.homepage;
import Utils.Sleep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class homepageSD {

    homepage hp = new homepage();

    @Given("^I launch scholastic.com$")
    public void lunchWebSite(){
        hp.lunchWebsite();
    }

    @When("^I click Get Started and Create An Account$")
    public void clickCreateAnAccount(){
        hp.clickGetStarted();
        hp.clickCreateAnAccount();
    }


    @When("^I click on My Account$")
    public void clickMyAccountDropdown(){
        hp.clickMyAccountDropdown();
    }

    @When("^I click on Profile$")
    public void clickProfileDropdown(){
        hp.clickProfileFromDropdown();
    }

    @When("^I search for '(.*)'$")
    public void typeInSearchBar(String input){
        hp.clickSearchBar();
        hp.typeInSearchBar(input);
        hp.clickSearchButton();
    }

    @When("^I click My Lists from Home Page$")
    public void clickMyListsDropDown(){
        hp.clickHomePage();
        Sleep.sleep(1000);
        hp.clickMyList();
    }

    @When("^I click Recommendations for Students$")
    public void clickRecommendationsForStudents(){
        Sleep.sleep(1000);
        hp.clickRecommendationsForStudents();
    }

    @And("^I go to Enter Orders$")
    public void moveMouseToEnterOrders(){
        Sleep.sleep(1000);
        hp.moveMouseToEnterOrders();
    }

    @When("^I click Your Teacher order$")
    public void clickYourTeacherOrder(){
        Sleep.sleep(1000);
        hp.clickYourTeacherOrder();
    }

    @And("^I click Student Flyer Orders$")
    public void clickStudentFlyerOrders(){
        Sleep.sleep(1000);
        hp.clickStudentFlyerOrders();
    }



}