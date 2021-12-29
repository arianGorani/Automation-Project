package Pages.Scholastic;

import Pages.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class myLists extends WebCommands {

    //      Locators

    By BooksTitles = By.xpath("//table[@class='item-list']//tbody//tr//td[@class='item-details']//div[@class='product-list-item']//a");

    //      Methods

    public List<String> listOfBookTitles = new ArrayList<>();


    public void getListOfBooksTitles() {
        List<WebElement> myList = getElements(BooksTitles);

        for (WebElement element : myList ){
            String elem = element.getText();
            listOfBookTitles.add(elem);
        }
        System.out.println("Recommendations to Students Lists\n" + listOfBookTitles);
        System.out.println(listOfBookTitles.size());
    }




}
