package StepDefinition.Scholastic;

import Pages.Scholastic.reviewYourCart;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;


public class reviewYourCartSD {

    reviewYourCart revCart = new reviewYourCart();

    int harryTotalAmount;
    int harryTotalAmountUpdated;

    int harryQty;
    int harryQtyUpdated;

    int totalAmount;
    int totalAmountUpdated;

    boolean isHarryTotalSame;
    boolean isHarryQTYSame;
    boolean isTotalSame;



    @And("^I Click on 'X' button corresponding to 2S8 item for Harry$")
    public void getInfoBeforeDeleteItem(){
        revCart.getUsersNames();
        revCart.getUsersTotals();
        revCart.convertStringToInt();
        revCart.getTotalOfQTY();
        revCart.clickXtoDelete();
    }

    @And("^I click YES$")
    public void clickYesButton(){
        revCart.clickYesButton();
        revCart.getUsersNamesAfterDelete();
        revCart.getUsersTotalsAfterDelete();
        revCart.convertStringToIntAfterDelete();
        revCart.getTotalOfQTYAfterDelete();
    }

    @Then("^I verify For Harry, item 2S8 gets deleted, Respective amounts and quantities get updated$")
    public void verifyDataGotUpdated(){

        harryTotalAmount = revCart.totalInInt.get(0);
        harryTotalAmountUpdated = revCart.totalInIntAfterDelete.get(0);

        harryQty = revCart.totalQTYinInt.get(0);
        harryQtyUpdated = revCart.totalQTYinIntAfterDelete.get(0);

        totalAmount = revCart.totalPrice;
        totalAmountUpdated = revCart.totalPriceAfterDelete;

        System.out.println("\n\nHarry's total amount: $" + harryTotalAmount);
        System.out.println("Harry's total QTY: " + harryQty);
        System.out.println("Total amount: " + totalAmount);

        System.out.println("\nHarry's total amount updated: $" + harryTotalAmountUpdated);
        System.out.println("Harry's total QTY updated: " + harryQtyUpdated);
        System.out.println("Total amount updated: " + totalAmountUpdated);



        isTotalSame = harryTotalAmount == harryTotalAmountUpdated;
        isHarryQTYSame = harryQty == harryQtyUpdated;
        isTotalSame = totalAmount == totalAmountUpdated;

        Assert.assertFalse(isHarryTotalSame,"Harry's Total did NOT updated after deleting ITEM");
        Assert.assertFalse(isHarryQTYSame,"Harry's QTY did NOT updated after deleting ITEM");
        Assert.assertFalse(isTotalSame,"Total did NOT updated after deleting ITEM");

    }

    @And("^I click on PROCEED TO CHECKOUT$")
    public void clickProceedToCheckout(){
        revCart.scrollProceedToCheckoutButton();
        revCart.clickProceedToCheckoutButton();
    }

    @And("^I click on PROCEED TO CHECKOUT from FLYER$")
    public void clickProceedToCheckoutButtonFlayer(){
        revCart.clickProceedToCheckoutButtonFlayer();
    }


}
