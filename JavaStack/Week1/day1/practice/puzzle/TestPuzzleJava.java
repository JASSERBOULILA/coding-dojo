import java.util.ArrayList;
import java.util.Arrays;

public class TestPuzzleJava {
    public static void main(String[] args){
        PuzzleJava  generator = new PuzzleJava();
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println(randomRolls);
        String randomLetters = generator.generateRandomLetter();
        //System.out.println( randomLetters);
        String generatePassword = generator.generatePassword();
        System.out.println(generatePassword);
        String getNewPassword = Arrays.toString(generator.getNewPasswordSet(10));
        System.out.println("The List of Password is : "  + getNewPassword);

    }
}
