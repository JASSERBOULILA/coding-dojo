public class Mamal {
    private int energy ;


    public Mamal(){
        this.energy = 100;
    }

    public int displayEnergy(){
        System.out.println("your energy is :" + this.energy);
        return this.energy;
    }

    public int getEnergy(){
        return this.energy;
    }


    public void setEnergy(int energy){
        this.energy = energy;
    }
}
