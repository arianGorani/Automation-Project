package Pages.Scholastic;


import Pages.WebCommands;
import Utils.Sleep;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class createAnAccount extends WebCommands {


    //  Locators

    By selectTeacherAccount = By.xpath("//input[@id='acccountTeacther']/following-sibling::label");

    By nextButton = By.xpath("//a[text()='Next']");

    By selectTitleDropdown = By.xpath("//div[contains(text(),'Select Title')]");

    By selectTitleMR = By.xpath("//span[contains(text(),'Mr.')]");

    By firstNameField = By.id("dwfrm_profile_customer_firstname");

    By lastNameField = By.id("dwfrm_profile_customer_lastname");

    By emailAddressField = By.id("dwfrm_profile_customer_email");

    By passwordField = By.id("dwfrm_profile_login_password");

    By termsOFUserCheckBox = By.id("dwfrm_registration_termsofuseteacher");

    By secondNextButton = By.xpath("//button[contains(text(),'NEXT')]");

    By zipCodeField = By.id("dwfrm_myschool_schoolzip");

    By searchBox = By.id("button-search");

    By schoolNameField = By.id("dwfrm_searchschool_schoolvalue");

    By scholasticBookClubs = By.xpath("//span[text()='scholastic+book+clubs']");

    By selectRoleDropdown = By.xpath("//div[contains(text(),'Select Role')]");

    By selectTeacherByGrade = By.xpath("//span[contains(text(),'Teacher (by Grade)')]");

    By selectGrade = By.xpath("//div[contains(text(),'Select Grade')]");

    By select1StGrade = By.xpath("//span[contains(text(),'1st Grade')]");

    By numberOfStudents = By.id("dwfrm_myrole_students");

    By selectTypeDropdown = By.xpath("//div[contains(text(),'Select Type')]");

    By selectNaFromDropdown = By.xpath("//span[contains(text(),'NA')]");

    By continueToSiteButton = By.xpath("//button[contains(text(),'CONTINUE TO SITE')]");

    By classCodeInHomePage = By.xpath("//div[text()='Class Code']/following-sibling::div//div");

    By classCodeInProfile = By.xpath("//h3[contains(text(),'Class Code')]/following-sibling::span");

    By fullNameOnProfilePage = By.xpath("//h3[contains(text(),'Name')]/following-sibling::div//span[contains(text(), 'Mr.')]");

    By schoolAddressOnProfile;

    By schoolAddressOnCreatingAccountPage = By.xpath("//div[@class='form-row hide']/following-sibling::div[@class='school-selection']//div[contains(@class, 'school')]");

    By selectSchoolStateField = By.xpath("//div[contains(text(),'Select School State')]");

    By selectNYSchoolStateField = By.xpath("//span[text()=' New York']");

    By selectSchoolCityDropdown = By.id("dwfrm_myschool_schoolcity");

    By selectNYSchoolCityField = By.xpath("//span[text()='New York']");

    By searchButtonUnderCity = By.xpath("//button[@id='button-search' and @name='dwfrm_myschool_searchone']");

    By adakSchool = By.xpath("//div[@Class='registration-steps step-2']/following::ul//li[1]");



    //  Methods

    public String firstName;
    public String lastName;

    public List<String> listOfSchoolAddressFromProfile = new ArrayList<>();
    public List<String> listOfSchoolAddressFromCreatingAccount = new ArrayList<>();


    public void clickTeacherAccount(){
        clickThis(selectTeacherAccount);
    }

    public void clickNextButton(){
        clickThis(nextButton);
    }

    public void selectTitle(){
        clickThis(selectTitleDropdown);
    }

    public void selectMrFromDropdown(){
        clickThis(selectTitleMR);
    }

    public void setFirstNameField(String input){
        type(firstNameField,input);
        firstName = input;
    }

    public void setLastNameField(String input){
        type(lastNameField,input);
        lastName = input;
    }

    public void setEmailAddressField(String input){
        type(emailAddressField,input);
    }

    public void setPasswordField(String input){
        type(passwordField,input);
    }

    public void setTermsOFUserCheckBox(){
        clickThis(termsOFUserCheckBox);
    }

    public void secondNextButton(){
        clickThis(secondNextButton);
    }

    public void setZipCodeField(String input){
        type(zipCodeField,input);
    }

    public void clickSearchBox(){
        clickThis(searchBox);
    }

    public void setSchoolNameField(String input){
        type(schoolNameField,input);
    }

    public void clickScholasticBookClubs(){
        clickThis(scholasticBookClubs);
    }

    public void clickAdakSchool(){
        clickThis(adakSchool);
    }

    public void setSelectRoleDropdown(){
        clickThis(selectRoleDropdown);
    }

    public void selectTeacherByGrade(){
        clickThis(selectTeacherByGrade);
    }

    public void setSelectGrade(){
        clickThis(selectGrade);
    }

    public void setSelect1StGrade(){
        clickThis(select1StGrade);
    }

    public void setNumberOfStudents(String input){
        type(numberOfStudents,input);
    }

    public void clickSelectTypeDropDown(){
        clickThis(selectTypeDropdown);
    }

    public void selectNaFromDropdown(){
        clickThis(selectNaFromDropdown);
    }

    public void clickContinueToSite(){
        clickThis(continueToSiteButton);
    }

    public String getClassCodeFromHomePage(){
       return getElementText(classCodeInHomePage);
    }

    public String getClassCodeFromProfile(){
        return getElementText(classCodeInProfile);
    }

    public String getFullNameFromProfilePage(){
        return getElementText(fullNameOnProfilePage);
    }

    public void getSchoolAddressFromCreatingAccountPage(){
        List<WebElement> schoolAddress = getElements(schoolAddressOnCreatingAccountPage);

        for (WebElement element : schoolAddress ){
            String elem = element.getText();
            listOfSchoolAddressFromCreatingAccount.add(elem);
        }

    }

    public void getSchoolAddressFromProfile(){
        for (int i=1; i<=4;i++){
            schoolAddressOnProfile = By.xpath("//h3[text()='School']/following-sibling::div//span["+i+"]");
            listOfSchoolAddressFromProfile.add(getElementText(schoolAddressOnProfile));
        }
        String cityZip = listOfSchoolAddressFromProfile.get(2) +" "+listOfSchoolAddressFromProfile.get(3);
        listOfSchoolAddressFromProfile.remove(2);
        listOfSchoolAddressFromProfile.remove(2);
        listOfSchoolAddressFromProfile.add(cityZip);
    }


    public void clickSchoolStateField(){
        Sleep.sleep(1000);
        clickThis(selectSchoolStateField);
        Sleep.sleep(1000);
    }

    public void searchByStateDropdown(){
        if(!isElementDisplayed(selectNYSchoolStateField)){
            scrollToElement(getElement(selectNYSchoolStateField));
        }
    }

    public void clickNYSchoolStateField(){
        Sleep.sleep(2000);
        clickThis(selectNYSchoolStateField);
    }



    public void clickSchoolCityField(){
        clickThis(selectSchoolCityDropdown);
        Sleep.sleep(1000);
    }

    public void typeCityNameDropdown(String input){
        type(selectSchoolCityDropdown,input);
    }


    public void clickNYSchoolCityField(){
        Sleep.sleep(1000);
        clickThis(selectNYSchoolCityField);
    }

    public void clickSearchButtonUnderCity(){
        Sleep.sleep(1000);
        clickThis(searchButtonUnderCity);
        Sleep.sleep(10000);
    }







}
