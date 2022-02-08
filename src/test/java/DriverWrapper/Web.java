package DriverWrapper;

import Utils.TestConstant;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Web {

    // Methods related to Web-launch, close

    private static WebDriver driver;

    //@Before
    public void openUrl() {
        System.setProperty("webdriver.chrome.driver","./drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://clubs3qa1.scholastic.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
    }

    public void openUrl2(String url) {
//        System.setProperty("webdriver.chrome.driver","./drivers/chromedriver.exe");
//        driver = new ChromeDriver();
//        driver.get(url);
//        driver.manage().window().maximize();
//        driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);

        //String sauceUrl = "https://oauth-arian.gorani-ae229:9401ef4c-8147-4af1-8fc0-bc03eeec2c19@ondemand.us-west-1.saucelabs.com:443/wd/hub";

        String sauceUrl = "https://oauth-nini.usa20-2ea33:c2e3896a-09d9-42ed-abd5-c0cdb5ef2c81@ondemand.us-west-1.saucelabs.com:443/wd/hub";
        DesiredCapabilities caps = DesiredCapabilities.chrome();
        caps.setCapability("platform","windows 10");
        caps.setCapability("version", "latest");


        try {
            driver = new RemoteWebDriver(new URL(sauceUrl), caps);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        driver.get(url);
        driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
    }

    @After
    public void closePage() {
        driver.close();
    }


    public void quitPages() {
        driver.quit();
    }

    public static WebDriver getDriver() {
        return driver;
    }



}
