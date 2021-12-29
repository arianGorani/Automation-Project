package Utils;

import java.util.List;

public class GetSumFromList {

    public static int sum(List<Integer> myList){
        int total = 0;
        for(int i=0; i<myList.size(); i++){
            total = myList.get(i) + total;
        }
        return total;
    }
}
