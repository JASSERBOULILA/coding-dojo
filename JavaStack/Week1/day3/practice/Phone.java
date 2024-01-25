public class Phone extends Device{

    public Phone(){
        super();
    }

    public void makeCall(){
        int battery = getBattery();
        setBattery(battery-5);
    }

    public  void playGame(){

        System.out.println(getBattery());
        if(getBattery()<=25){
            System.out.println("you cant play this game cause you have low battery : ");

        }else{
            setBattery(getBattery()-20);
        }

    }
    public void charge(){
        setBattery(getBattery()+50);
    }
}
