package Utils;

public class Sleep {

    public static void sleep(int input){
        try {
            Thread.sleep(input);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
