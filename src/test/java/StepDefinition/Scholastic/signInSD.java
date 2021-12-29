package StepDefinition.Scholastic;

import Pages.Scholastic.signIN;
import Pages.Scholastic.homepage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;

public class signInSD {

    homepage hp = new homepage();
    signIN signIn = new signIN();


    @And("^I log In with email '(.*)' and password '(.*)'$")
    public void clickSignIn(String email, String pass){
        hp.clickSignIn();
        signIn.switchToSignInIframe();
        signIn.typeEmailInSignIn(email);
        signIn.clickContinueButton();
        signIn.typePasswordInSignIn(pass);
        signIn.clickSignInButton();
        signIn.closeNotification();
    }

}
