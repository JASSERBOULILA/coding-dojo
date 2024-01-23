public class AlfredTest {
        /*
         * This main method will always be the launch point for a Java application
         * For now, we are using the main to test all our
         * AlfredQuotes methods.
         */
        public static void main(String[] args) {
                // Make an instance of AlfredQuotes to access all its methods.
                AlfredQuotes alfredBot = new AlfredQuotes();

                // Make some test greetings, providing any necessary data
                String testGreeting = alfredBot.basicGreeting();
                // THIS FOR GETTING THE NAME FROM THE CONSOLE
                String name = System.console().readLine("What Your Name");
                //
                String testGuestGreeting = alfredBot.guestGreeting(name);
                String testDateAnnouncement = alfredBot.dateAnnouncement();
                String converstation = System.console().readLine("converstation : ");
                String alexisTest = alfredBot.respondBeforeAlexis(
                                converstation);
                String alfredTest = alfredBot.respondBeforeAlexis(
                                converstation);
                String notRelevantTest = alfredBot.respondBeforeAlexis(
                                converstation);
                System.out.println("Your Full Name pls ?");
                String lastname = System.console().readLine("What Your Full Name : ");
                String greeting = alfredBot.guestGreeting(name, lastname);

                // Print the greetings to test.
                System.out.println(testGuestGreeting);
                System.out.println(testDateAnnouncement);
                System.out.println(alexisTest);
                System.out.println(greeting);
        }
}
