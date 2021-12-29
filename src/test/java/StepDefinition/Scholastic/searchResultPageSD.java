package StepDefinition.Scholastic;

import Pages.Scholastic.searchResultPage;
import Utils.Sleep;
import cucumber.api.java.en.And;

public class searchResultPageSD {

    searchResultPage sResult = new searchResultPage();
    public String bookTitle;
    public String bookTitle1;


    @And("^I click on Quick Look$")
    public void clickOnQuickLook(){
        Sleep.sleep(1000);
        bookTitle1 = sResult.getTitleOfTheBookPDP();
        sResult.moveMouseToQuickLook();
        Sleep.sleep(1000);
        sResult.clickQuickLook();
    }

    @And("^I click on Recommend button$")
    public void clickRecommendButton(){
        Sleep.sleep(1000);
        bookTitle = sResult.getTitleOfTheBook();
        System.out.println("Book Title from Quick Look Page\n" + bookTitle);
        Sleep.sleep(1000);
        sResult.clickRecommendButton();
    }

    @And("^I click on Recommendation to Students checkbox$")
    public void clickRecommendationsCheckBox(){
        Sleep.sleep(1000);
        sResult.clickRecommendationsToStudentsCheckBox();
    }

    @And("^I close two windows 'Add to My Lists' and 'Quick Look'$")
    public void closeTwoWindows(){
        sResult.click_X_buttonFromAddToMyLists();
        Sleep.sleep(1000);
        sResult.click_X_buttonFromQuickLookWindow();
    }

}
