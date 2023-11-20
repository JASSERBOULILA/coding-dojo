class Pet:
    def __init__(self,name,pet_type,tricks,health=100):
        self.name=name
        self.type=pet_type
        self.trick=tricks
        self.health=100
        self.energy=100
        
    def sleep(self):
        self.energy+=25
        return self
    
    def eat(self):
        self.health+=10
        self.energy+=5
        return self
    
    def play(self):
        self.health+=5
        return self
    
    def run(self):
        self.energy-=5
        
    def noise(self):
        if self.type=="cat":
            print('meow meow')
        elif self.type=="Dog":
            print('woof woof')
        else:
            print("moooooo")
            
            
            
pet=Pet("rex","Dog",['bite','lick'])
pet.sleep()
pet.eat()
pet.play()
pet.noise()
