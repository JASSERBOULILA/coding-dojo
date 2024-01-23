public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = " your order will be ready shortly";
        String readyMessage = " your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double cappuccino = 2.5;
        double lattes = 3.5;
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
        // this will display the Cindhuri ordered a coffee.
        System.out.println(readyMessage + " : " +  customer1);
        // THIS FOR CHANGING THE PRICES ;
        cappuccino = 5.6;
        mochaPrice = 10;
        lattes = 9.3;
        // this Noah ordered a cappuccino.
        if(isReadyOrder4){
            System.out.println(customer4 + " : " + readyMessage + "  , And " + displayTotalMessage + " : " + cappuccino);
        }else{
            System.out.println(pendingMessage);
        }

        // This for Sam .
        double totalForSam = lattes*2;
        isReadyOrder2 = true;
        System.out.println(isReadyOrder2?customer2 + " : Your Total is $" +totalForSam : pendingMessage);
        // this for the Jimmy ;
        System.out.println("Jimmy you have been charged for cappuccino and the total is : "
                + cappuccino +
                "$ ,"
                + "and you have ordered the latte So Your New Total is " + (cappuccino+lattes) + "$" );
        // ** Your customer interaction print statements will go here ** //
    }
}