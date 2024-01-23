import java.util.Date;
public class AlfredQuotes {
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return "Hello "+name;
    }
    public String guestGreeting(String lastName,String name){
        return "Hello : " + name + " " + lastName;
    }
    public String dateAnnouncement() {
        // YOUR CODE HERE
        Date date = new Date();
        return "The Announcement Date is : "+date;
    }

    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        if(conversation.indexOf("alex")!=-1){
            return "Right away, sir";
        }else if(conversation.indexOf("alfred")!=-1){
            return "At your service. As you wish, naturally";
        }else if (conversation == ""){
            return "Right. And with that I shall retire";
        }
        return "";
    }

    // NINJA BONUS
    // See the specs to overload the guestGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

