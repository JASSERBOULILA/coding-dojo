import java.util.HashMap;
import java.util.Set;
public class Map {
    public static void main(String[] args){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("0", "ANTI FRAGILE");
        trackList.put("1", "Dojo Cat Need To Know");
        trackList.put("2", "Balti");
        // get the keys by using the keySet method
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.printf("Track : %s : Lyrics : %s \n" , key,trackList.get(key));
        }
    }
}
