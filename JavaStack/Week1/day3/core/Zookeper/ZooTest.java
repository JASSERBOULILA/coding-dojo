public class ZooTest {

    public static void main(String[] args){
        Gorilla gorilla = new Gorilla();

        gorilla.throwSomething();
        gorilla.throwSomething();
        gorilla.climb();
        System.out.println("The Gorilla Energy is  : " + gorilla.getEnergy());

        Bat bat= new Bat();

        bat.fly();
        bat.eatHumans();
        bat.attackTown();
        System.out.println("The Bat is : " + bat.getEnergy());
    }
}
