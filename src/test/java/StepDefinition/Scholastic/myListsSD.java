package StepDefinition.Scholastic;

import Pages.Scholastic.myLists;
import cucumber.api.java.en.Then;
import org.testng.Assert;


public class myListsSD {

    searchResultPageSD sResPage = new searchResultPageSD();

    myLists myList = new myLists();

//    String bookName = sResPage.bookTitle;
//    String bookNamePDP = sResPage.bookTitle1;

    @Then("^I Verify the item is added in Recommendations to Students Lists under My Lists$")
    public void verifyTheItemsAreAddedInList(){
        myList.getListOfBooksTitles();

        boolean containsTitle = false;

        System.out.println("Book title: " + sResPage.bookTitle);
        System.out.println("Book title PDP: " + sResPage.bookTitle1);

        for (String element : myList.listOfBookTitles)
            if (element.equalsIgnoreCase(sResPage.bookTitle1)) {
                containsTitle = true;
            }

        Assert.assertTrue(containsTitle,"The book did not added on My List");
    }

}
