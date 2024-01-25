public class Bat extends Mamal{
    public Bat(){
        super();
    }

    public void fly(){
        setEnergy(getEnergy()-50);
        System.out.printf("The Bat Fly : %s",this.displayEnergy());
    }
     public void eatHumans(){
        setEnergy(getEnergy()+25);
         System.out.printf("The Bat Ate Humans And Regain His Energy : %s",this.displayEnergy());
     }
     public void attackTown(){
        setEnergy(getEnergy()-100);
        System.out.printf("The Bat Attack Was Succesfully : %s" , this.displayEnergy());
     }

}
