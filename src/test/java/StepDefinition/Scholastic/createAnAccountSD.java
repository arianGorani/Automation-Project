package StepDefinition.Scholastic;

import Pages.Scholastic.createAnAccount;
import Utils.Sleep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class createAnAccountSD {

    createAnAccount createAcc = new createAnAccount();

    String codeFromHomePage;
    String codeFromProfile;

    String fullTeacherNameFromProfile;
    String fullTeacherNameFromCreatingAccount;


    @And("^I select Teacher account$")
    public void clickTeacherAccount(){
        createAcc.clickTeacherAccount();
    }


    @And("^I click NEXT$")
    public void clickNextButton(){
        Sleep.sleep(1000);
        createAcc.clickNextButton();
        Sleep.sleep(1000);
    }

    @And("^I select 'Mr.' from Dropdown$")
    public void titleSelectDropDown(){
        Sleep.sleep(1000);
        createAcc.selectTitle();
        Sleep.sleep(1000);
        createAcc.selectMrFromDropdown();
    }

    @And("^I type '(.*)' in First Name$")
    public void setFirstName(String input){
        createAcc.setFirstNameField(input);
    }

    @And("^I type '(.*)' in Last Name$")
    public void setLastName(String input){
        createAcc.setLastNameField(input);
    }

    @And("^I type '(.*)' in Email Address$")
    public void setEmailAddress(String input){
        createAcc.setEmailAddressField(input);
    }

    @And("^I type '(.*)' in Password$")
    public void setPasswordField(String input){
        createAcc.setPasswordField(input);
    }

    @And("^I check on Terms of Use CheckBox$")
    public void checkOnTermsOfUseCheckBox(){
        createAcc.setTermsOFUserCheckBox();
    }

    @And("^I click NEXT button$")
    public void secondNextButton(){
        Sleep.sleep(1000);
        createAcc.secondNextButton();
        Sleep.sleep(1000);
    }

    @And("^I type '(.*)' in Zip Code$")
    public void setZipCode(String input){
        createAcc.setZipCodeField(input);
    }

    @And("^I click SEARCH$")
    public void clickSearchBox(){
        Sleep.sleep(1000);
        createAcc.clickSearchBox();
        Sleep.sleep(1000);
    }

    @And("^I type '(.*)' in School name$")
    public void setSchoolName(String input){
        Sleep.sleep(1000);
        createAcc.setSchoolNameField(input);
        Sleep.sleep(3000);
    }

    @And("^I choosing 'Scholastic Book Club' School$")
    public void clickScholasticBook(){
        Sleep.sleep(1000);
        createAcc.clickScholasticBookClubs();
        Sleep.sleep(3000);
        createAcc.getSchoolAddressFromCreatingAccountPage();
    }

    @And("^I choosing 'Adak School' School$")
    public void clickAdakSchool(){
        Sleep.sleep(1000);
        createAcc.clickAdakSchool();
        Sleep.sleep(3000);
        createAcc.getSchoolAddressFromCreatingAccountPage();
    }

    @And("^I select 'Teacher by Grade' from Dropdown$")
    public void selectRoleDropdown(){
        Sleep.sleep(1000);
        createAcc.setSelectRoleDropdown();
        Sleep.sleep(1000);
        createAcc.selectTeacherByGrade();
    }

    @And("^I select '1st Grade' from Dropdown$")
    public void selectGradeDropdown(){
        Sleep.sleep(1000);
        createAcc.setSelectGrade();
        Sleep.sleep(1000);
        createAcc.setSelect1StGrade();
    }

    @And("^I type '(.*)' number of students$")
    public void setNumberOfStudents(String input){
        createAcc.setNumberOfStudents(input);
        Sleep.sleep(1000);
    }

    @And("I select 'NA' on Preferred Reading Level")
    public void selectTypeDropdown(){
        Sleep.sleep(1000);
        createAcc.clickSelectTypeDropDown();
        Sleep.sleep(1000);
        createAcc.selectNaFromDropdown();
    }

    @And("I click Continue to Site Button")
    public void clickContinueToSiteButton(){
        Sleep.sleep(1000);
        createAcc.clickContinueToSite();
        codeFromHomePage = createAcc.getClassCodeFromHomePage();
        Sleep.sleep(2000);
    }

    @Then("^I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same$")
    public void verifyCodeIsSame(){

        codeFromProfile = createAcc.getClassCodeFromProfile();

        Assert.assertEquals(codeFromHomePage,codeFromProfile, "Codes are not the same");

        System.out.println("Code from Homepage: " + codeFromHomePage);
        System.out.println("Code from Profile: " + codeFromProfile);

    }

    @And("^I verify same teacher name is present on My Accounts$")
    public void verifyNamesFromHomepageAndProfile(){

        fullTeacherNameFromProfile = createAcc.getFullNameFromProfilePage().replace("Mr. ","");
        fullTeacherNameFromCreatingAccount = createAcc.firstName + " " + createAcc.lastName;

        System.out.println("\nFull name from Profile: " + fullTeacherNameFromProfile);
        System.out.println("Full name from Creating Account : " + fullTeacherNameFromCreatingAccount);

        Assert.assertEquals(fullTeacherNameFromProfile, fullTeacherNameFromCreatingAccount,"The names are not the same.");
    }

    @And("^I verify same school address is present as selected while creating the account$")
    public void verifyAddressIsSame(){
        createAcc.getSchoolAddressFromProfile();

        System.out.println("\nAddress From Profile: \n" + createAcc.listOfSchoolAddressFromProfile);
        System.out.println("Address From Creating Account: \n" + createAcc.listOfSchoolAddressFromCreatingAccount);

        Assert.assertEquals(createAcc.listOfSchoolAddressFromProfile,createAcc.listOfSchoolAddressFromCreatingAccount,"The addresses are not the same ");

    }
    @And("^I select 'New York' from State Dropdown$")
    public void selectSchoolStateDropdown(){
        Sleep.sleep(1000);
        createAcc.clickSchoolStateField();
        Sleep.sleep(1000);
        createAcc.searchByStateDropdown();
        Sleep.sleep(1000);
        createAcc.clickNYSchoolStateField();
    }

    @And("^I select '(.*)' from City Dropdown$")
    public void selectSchoolCityDropdown(String input){
        Sleep.sleep(1000);
        createAcc.clickSchoolCityField();
        Sleep.sleep(1000);
        createAcc.typeCityNameDropdown(input);
        Sleep.sleep(1000);
        createAcc.clickNYSchoolCityField();
        Sleep.sleep(1000);
    }

    @And("^I click SEARCH Button$")
    public void clickSearchButton(){
        createAcc.clickSearchButtonUnderCity();
    }




}
