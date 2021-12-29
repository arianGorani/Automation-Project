package Pages.Scholastic;


import DriverWrapper.Web;
import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;

public class homepage extends WebCommands {

    Web web = new Web();

    //  Locators

    By createAnAccount = By.xpath("//div[@id='navLinksOnly']/ancestor::li/a");

    By SignIn = By.xpath("//div[@id='navLinksOnly']/ancestor::li/preceding-sibling::li//a");

    By MyAccountDropDown = By.xpath("//a//span[@class='hide-mobile user-account-name']");

    By ProfileFromDropDown = By.xpath("//a[@title='Profile' and contains(text(), 'Profile')]");

    By searchBar = By.xpath("//input[@class='custom-placeholder valid']");

    By searchButton = By.xpath("//a[@class='checkicon custom-tooltip tooltipstered']/following-sibling::button[@type='submit']//i");

    By MyListDropDown = By.xpath("//span[contains(text(),'My Lists')]");

    By recommendationsForStudents = By.xpath("//li[@class='recommend']");

    By enterOrders = By.xpath("//div[@class='sidecar-top']/following-sibling::div//a[@id='enter-orders']");

    By yourTeacherOrder = By.xpath("//div[@class='sidecar-top']/following-sibling::div//a[@id='enter-orders']/following-sibling::div//li[@id='your-teacher-order']");

    By studentFlyerOrders = By.xpath("//div[@class='sidecar-top']/following-sibling::div//a[@id='enter-orders']/following-sibling::div//li[@id='student-flyer-orders']");








    //  Methods

    public void lunchWebsite(){
        web.openUrl2("https://clubs3qa1.scholastic.com/");
    }

    public void clickCreateAccount(){
        clickThis(createAnAccount);
    }

    public void clickSignIn(){
        Sleep.sleep(1000);
        clickThis(SignIn);
        Sleep.sleep(1000);
    }

    public void clickMyAccountDropdown(){
        clickThis(MyAccountDropDown);
        Sleep.sleep(1000);
    }

    public void clickProfileFromDropdown(){
        clickThis(ProfileFromDropDown);
    }


    public void typeInSearchBar(String input){
        type(searchBar,input);
        Sleep.sleep(1000);
    }

    public void clickSearchButton(){
        clickThis(searchButton);
        Sleep.sleep(1000);
    }

    public void clickMyListDropDown(){
        clickThis(MyListDropDown);
        Sleep.sleep(1000);
    }

    public void clickRecommendationsForStudents(){
        clickThis(recommendationsForStudents);
        Sleep.sleep(1000);
    }

    public void moveMouseToEnterOrders(){
        moveMouseOverElement(enterOrders);
    }

    public void clickYourTeacherOrder(){
        clickThis(yourTeacherOrder);
    }

    public void clickStudentFlyerOrders(){
        clickThis(studentFlyerOrders);
    }









}
