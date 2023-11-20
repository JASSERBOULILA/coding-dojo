from pet import Pet

class Dog(Pet):
    def __init__(self,name,tricks):
        super().__init__(name,"Dog",tricks)
        
dog1=Dog("loo",['swim',"sleep"])
dog1.noise()