import java.util.ArrayList;
import java.util.Arrays;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items;


    public Order(String name, double  total, boolean ready, ArrayList<Item> items) {
        this.name = name;
        this.ready = ready;
        this.items = items;
    }
    public Order(String name){
        this.name = name;
        this.items = new ArrayList<Item>();
    }
    public Order(){
        this.name = "Guest";
        this.items = new ArrayList<Item>();
    }

    public String getName() {
        return this.name;
    }


    public boolean getReady() {
        return this.ready;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Item> getItems() {
        return this.items;
    }

    public void addItem(Item item) {
        this.items.add(item);
        //this.total += item.getPrice();
    }
    public String getStatusMessage(){
        if(this.ready){
            return "Your order is ready";

        }else{
            return "Thank you for waiting. Your order will be ready soon";
        }
    }
    public double getOrderTotal(){
        ArrayList<Item> sum = getItems();
        double res = 0;
        for(int i = 0;i<sum.size();i++){
            res+=sum.get(i).getPrice();
        }
        return res;
    }
    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public void display(){
        String[] array = new String[this.items.size()];
        for(int i =0;i<this.items.size();i++){
            array[i] = String.valueOf(this.items.get(i).getName());
        }
        System.out.println("Custome Name : " +this.name + "\n" + Arrays.toString(array));
    }
//    public String data(){
//        String[] array = new String[items.size()];
//        for(int i =0;i<items.size();i++){
//            array[i] = String.valueOf(items.get(i).getName());
//            System.out.println("the array value is : " + items.get(i).getName());
//        }
//        return "The Order for " + this.name + " have this order :"  + Arrays.toString(array);
//    }


}
