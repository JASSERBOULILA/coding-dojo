class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance):
        # your code here! (remember, instance attributes go here)
        self.balance=balance
        self.int_rate=int_rate 
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
        self.balance+=amount
        print(f"your Balance is {self.balance}")
        return self
    def withdraw(self, amount):
        # your code here
        if(self.balance<0):
            print(f"Insufficient funds: Charging a $5 fee and deduct 5$")
        else:
            self.balance-=amount
            print(f"your Balance is {self.balance}")
        return self
    def display_account_info(self):
        # your code here
        print(f"your account info is {self.balance}")
        return self.balance
    def yield_interest(self):
        # your code here
        self.balance*=self.int_rate
        return self.balance
    @classmethod
    def instances(cls,balance):
        cls.balance=balance
        return f"the balance of your account is {cls.balance}"

user=BankAccount(0.5,2000)
user2=BankAccount(0.9,1500)
user3=BankAccount(0.1,1000)
print(user.balance)
print(user.withdraw(20))
print(user.display_account_info())
print(user.yield_interest())
user2.deposit(100).deposit(100).deposit(100).withdraw(10)
user3.deposit(100).deposit(100).withdraw(10).withdraw(10).withdraw(10).withdraw(10)
print(f"user1 :{user.instances(user.balance)} and user2:{user2.instances(user2.balance)} and : {user3.instances(user3.balance)}")
