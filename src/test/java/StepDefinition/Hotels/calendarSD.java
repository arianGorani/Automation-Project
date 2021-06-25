package StepDefinition.Hotels;


import DriverWrapper.Web;
import Pages.Hotels.calendar;
import Pages.Hotels.homepage;
import Utils.DateMethods;
import Utils.Sleep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en_scouse.An;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class calendarSD {

    calendar cal = new calendar();
    homepage hp = new homepage();

    @Then("^I Verify past date and back button on Current month's calendar is disabled$")
    public void verify(){
        int currentDate = Integer.valueOf(DateMethods.getCurrentDateWithFormat("d"));
        List<WebElement> allDays =  cal.getAllDaysElement();
        boolean isBackButtonDisable = cal.isBackButtonDisable();

        for(int i=0; i<currentDate-1; i++){
            boolean daysDisable = allDays.get(i).isEnabled();
            System.out.println("Day " + (i+1) + " is Disable  "+!daysDisable);
            Assert.assertTrue(!daysDisable,"Day " + (i+1) + " is enable: ");
        }

        System.out.println("\nIs back button Disable: " + !isBackButtonDisable);
        Assert.assertTrue(!isBackButtonDisable, "Back button is Enable");
    }

    @And("^I choosing check in Date '(.*)'$")
    public void selectMonth(String input){
        hp.clickCheckInButton();
        cal.allMonthsCal(input);
    }

    @And("I choosing check out Date 'October 10 2021'")
    public void octoberCheckOut(){
        cal.clickOctoberCheckOut();
    }

    @An("^I click on SEARCH button$")
    public void clickSearchButton(){
        cal.clickSearch();
    }


}
