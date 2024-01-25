public class Gorilla extends Mamal{
    public Gorilla(){
        super();
    }


    public void throwSomething(){
        setEnergy(getEnergy()-5);
        System.out.printf("Gorilla Has Throwing Something And his Energy has dropped : %s \n",this.getEnergy());
    }

    public void eatBanana(){
        setEnergy(getEnergy()+10);
        System.out.printf("Gorilla has eaten a Banana And Now His Energy is : %s \n" , this.getEnergy());
    }

    public void climb(){
        setEnergy(getEnergy()-10);
        System.out.printf("Gorilla has Climbed And Now His Energy is : %s \n" , this.getEnergy());
    }

}
