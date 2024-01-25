package Device;

public class DeviceTest {


    public static void main(String[] args){
        Phone iphone = new Phone();
        System.out.println("the iphone charger is  : " + iphone.getBattery());
        iphone.playGame();
        System.out.println("the iphone charger after playing is : " + iphone.getBattery());
        iphone.playGame();
        System.out.println("the iphone charger after second playing  :" + iphone.getBattery());
        iphone.charge();
        iphone.playGame();
        iphone.playGame();
        iphone.playGame();
        iphone.playGame();
        iphone.playGame();
        System.out.println("the iphone charger :" + iphone.getBattery());
        if(iphone.getBattery()<=10){
            System.out.println("Battery Critical");
        }
    }
}
