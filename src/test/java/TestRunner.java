import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = {"src/test/resources/features"},

        glue = {"StepDefinition","DriverWrapper"},

        tags = {"@regression"},

        plugin = {"pretty", "html:Reports/Default"}

)

public class TestRunner {
}
