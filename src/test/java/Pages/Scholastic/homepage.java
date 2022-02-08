package Pages.Scholastic;


import DriverWrapper.Web;
import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;

public class homepage extends WebCommands {

    Web web = new Web();

    //  Locators

    By getStarted = By.xpath("(//div[@id='navLinksOnly']/ancestor::li/a)[1]");

    By createAnAccount = By.xpath("(//div[@id='navLinksOnly']/ancestor::li/a)[2]");

    By SignIn = By.xpath("((//div[@class='toggle-content'])[1]//ul//li//a[contains(text(),'Sign In')])[1]");

    By MyAccountDropDown = By.xpath("//a[@class='firstname toggle-item']");

    By ProfileFromDropDown = By.xpath("(//a[@title='Profile' and contains(text(), 'Profile')])[2]");

    By searchBar = By.xpath("//a[@id='header-search-open']//img");

    By searchBarType = By.xpath("//input[@id='q']");

    By searchButton = By.xpath("(//input[@id='q']/following::button)[1]");

    By HomePage = By.xpath("(//a[@title='Scholastic Home']//img)[1]");

    By MyList = By.xpath("//a[contains(text(),'items')]");

    By recommendationsForStudents = By.xpath("//li[@class='recommend']");

    By enterOrders = By.xpath("//div[@class='sidecar-top']/following-sibling::div//a[@id='enter-orders']");

    By yourTeacherOrder = By.xpath("//div[@class='sidecar-top']/following-sibling::div//a[@id='enter-orders']/following-sibling::div//li[@id='your-teacher-order']");

    By studentFlyerOrders = By.xpath("//div[@class='sidecar-top']/following-sibling::div//a[@id='enter-orders']/following-sibling::div//li[@id='student-flyer-orders']");








    //  Methods

    public void lunchWebsite(){
        web.openUrl2("https://clubs.scholastic.com/");
<<<<<<< HEAD
    }

    public void clickGetStarted(){
        clickThis(getStarted);
=======
>>>>>>> test_brench
    }

    public void clickCreateAnAccount(){
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

    public void clickSearchBar(){
        clickThis(searchBar);
        Sleep.sleep(1000);
    }

    public void typeInSearchBar(String input){
        type(searchBarType,input);
        Sleep.sleep(1000);
    }

    public void clickSearchButton(){
        clickThis(searchButton);
        Sleep.sleep(1000);
    }

    public void clickHomePage(){
        clickThis(HomePage);
        Sleep.sleep(1000);
    }

    public void clickMyList(){
        clickThis(MyList);
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
