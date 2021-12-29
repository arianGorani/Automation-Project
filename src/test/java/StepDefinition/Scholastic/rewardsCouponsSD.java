package StepDefinition.Scholastic;

import Pages.Scholastic.rewardsCoupons;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class rewardsCouponsSD {

    rewardsCoupons rewCou = new rewardsCoupons();

    @Then("^I verify Tax amount$")
    public void verifyTaxAmount(){
        String expectedTax = "$0.00";
        String tax = rewCou.getTaxText();

        Assert.assertEquals(tax,expectedTax,"Taxes are not the same ");
    }

}
