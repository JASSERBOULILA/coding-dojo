import java.util.ArrayList;
import java.util.Arrays;

public class Order {
    private String name;
    private double total;
    private boolean ready;
    private ArrayList<Item> items;

    public Order(String name, double total, boolean ready, ArrayList<Item> items) {
        this.name = name;
        this.total = total;
        this.ready = ready;
        this.items = items;
    }

    public String getName() {
        return this.name;
    }

    public double getTotal() {
        return this.total;
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
        this.total += item.getPrice();
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public String data(){
        String[] array = new String[this.items.size()];
        for(int i =0;i<this.items.size();i++){
            array[i] = String.valueOf(this.items.get(i));
        }
        return "The Order for " + this.name + " have this order :"  + Arrays.toString(array) + "And the Total is :" + this.total;
    }


}
