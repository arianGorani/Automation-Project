package Pages.Hotels;

import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.ArrayList;
import java.util.List;
public class calendar extends WebCommands {



    //      Locators

    By allDaysInCalendar = By.xpath("//button[@aria-label='Next']/following-sibling::ul//li[1]//div//table//tbody//button");

    By backButtonInCalendar = By.xpath("//button[@aria-label='Next']/preceding-sibling::button");

    By allMonthsInCal = By.xpath("//h2[@align='top']");

    By october = By.xpath("//h2[contains(text(),'October 2021')]");

    By october10_2021 = By.xpath("//button[contains(@name, 'Oct 10 2021')]");

    By october31_2021 = By.xpath("//button[contains(@name, 'Oct 31 2021')]");

    By nextButton = By.xpath("//button[@aria-label='Next']");

    By searchButton = By.xpath("//button[contains(text(),'Search')]");



    //      Methods

    public List<WebElement> getAllDaysElement(){
        return getElements(allDaysInCalendar);
    }

    public boolean isBackButtonDisable(){
        return isElementEnabled(backButtonInCalendar);
    }

    public void clickNext(){
        clickThis(nextButton);
    }

    public void clickOctoCheckIn(){
        clickThis(october10_2021);
    }

    public void allMonthsCal(String input){
        List<String> monthsStrings = new ArrayList<>();
        List<WebElement> monthsList = getElements(allMonthsInCal);
        for(WebElement element : monthsList){
            String str = element.getText();
            monthsStrings.add(str);
            System.out.println(str);
        }
        String currentMonth = monthsStrings.get(0);
        String[] monthYearSplit = currentMonth.split(" ");
        String month = monthYearSplit[0];
        String year = monthYearSplit[1];


        while (!(month.equals("December") && year.equals("2021"))){
            clickNext();
            monthsStrings = new ArrayList<>();
            monthsList = getElements(allMonthsInCal);
            for(WebElement element : monthsList){
                String str = element.getText();
                monthsStrings.add(str);

            }
            currentMonth = monthsStrings.get(0);
            monthYearSplit = currentMonth.split(" ");
            month = monthYearSplit[0];
            year = monthYearSplit[1];
            System.out.println(currentMonth);

        }
    }



    public void clickOctoberCheckOut(){
        clickThis(october31_2021);
    }



    public void clickSearch(){
        clickThis(searchButton);
        Sleep.sleep(3000);
    }



}
