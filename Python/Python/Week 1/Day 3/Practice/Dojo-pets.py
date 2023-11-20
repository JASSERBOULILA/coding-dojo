class Ninja:
    def __init__(self,first_name,last_name,pet,treats,pet_food):
        self.fname=first_name
        self.lname=last_name
        self.pet=pet
        self.treat=treats
        self.pet_food=pet_food
    def walk(self):
        print("you have walked your pet")
    def feed(self):
        print('you have fed your pet')
    def bathe(self):
        print('you have bathed your pet')