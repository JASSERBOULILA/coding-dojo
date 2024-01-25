import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu ;
    private ArrayList<Order> orders;

    public CoffeeKiosk(){
        this.orders = new ArrayList<Order>();
        this.menu = new ArrayList<Item>();
    }

    public void addMenuItem(String name , double price){
        int index = menu.size();
        Item newItem = new Item(name, price, index);
        menu.add(newItem);
        
    }

    public void displayMenu(){
        for (Item item : menu) {
            System.out.println(item.getIndex() + " " + item.getName() + " -- $" + item.getPrice());
        }
    }
    public void newOrder() {

        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        Order order = new Order(name);
        System.out.println("Menu : ");
        displayMenu();
        // Your code:
        // Create a new order with the given input string
        // Show the user the menu, so they can choose items to add.

        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        // Write a while loop to collect all user's order items

        while(!itemNumber.equals("q")){
            // Get the item object from the menu, and add the item to the order
            // Ask them to enter a new item index or q again, and take their input
            try {
                int index = Integer.parseInt(itemNumber);
                if (index >= 0 && index < menu.size()) {
                    Item selectedItem = menu.get(index);
                    order.addItem(selectedItem);
                    System.out.println("Added " + selectedItem.getName() + " to the order.");
                } else {
                    System.out.println("Invalid item index. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid item index or q to quit.");
            }
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();


        }
        orders.add(order);
        // After you have collected their order, print the order details
        System.out.println("Order details for " + name + ":");
        for (Item item : order.getItems()) {
            System.out.println(item.getName() + " -- $" + item.getPrice());
        }


    }
    public void addMenuItemByInput() {
        System.out.println("Enter new menu item name:");
        String itemName = System.console().readLine();

        System.out.println("Enter new menu item price:");
        double itemPrice = 0.0;
        try {
            itemPrice = Double.parseDouble(System.console().readLine());
        } catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter a valid price.");
            return;
        }
        // this for add the item for the menu
        addMenuItem(itemName, itemPrice);
        System.out.println("Menu item added: " + itemName + " -- $" + itemPrice);
    }

    public static void main(String[] args) {
        CoffeeKiosk coffeeKiosk = new CoffeeKiosk();
        coffeeKiosk.addMenuItem("banana", 2.00);
        coffeeKiosk.addMenuItem("coffee", 1.50);
        coffeeKiosk.addMenuItem("latte", 4.50);
        coffeeKiosk.addMenuItem("cappuccino", 3.00);
        coffeeKiosk.addMenuItem("muffin", 4.00);

        coffeeKiosk.displayMenu();
        coffeeKiosk.newOrder();

        // NINJA BONUS
        coffeeKiosk.addMenuItemByInput();
        coffeeKiosk.displayMenu();
    }
}
