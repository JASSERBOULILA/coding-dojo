import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args){
        Item item1 = new Item("mocha", 20.3);
        Item item2 = new Item("latte", 7);
        Item item3 = new Item("drip coffee", 8.5);
        Item item4 = new Item("cappuccino", 9);
        ArrayList<Item> itemlist1 = new ArrayList<>();
        itemlist1.add(item1);
        Order order1 = new Order("Cindhuri" , 19.3 , false , itemlist1);
        Order order2 = new Order("Jimmy", 19.3, false, new ArrayList<>());
        Order order3 = new Order("Noah", 19.3, false, new ArrayList<>());
        Order order4 = new Order("Sam", 19.3, false, new ArrayList<>());
        System.out.println(order1);
        //System.out.printf("Total: %s\n", order1.total);//it will give an error cause the total is private
        System.out.printf("Name: %s\n", order1.getName());
        System.out.printf("Total: %s\n", order1.getOrderTotal());
        System.out.printf("Ready: %s\n", order1.getReady());

        order2.addItem(item1);
        System.out.printf("Order 2 Total After adding : %s\n" , order2.getOrderTotal());
        order3.addItem(item4);
        System.out.printf("Order 3 Total After Adding : %s\n" , order3.getOrderTotal());
        order4.addItem(item2);
        System.out.printf("Order 4 Total After Adding : %s \n" , order4.getOrderTotal());
        order1.setReady(true);
        //Sam Ordered 2 latte
        order4.addItem(item2);
        order4.addItem(item2);
        order4.display();
        order2.setReady(true);
    }
}
