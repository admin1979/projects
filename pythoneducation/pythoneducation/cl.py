class Person: # класс
    def __init__(self, name, age, weight): # конструктор
        self.name = name    # атрибуты
        self.age = age      # атрибуты
        self.weight = weight    # атрибуты      

    def display(self):    # метод
        print(f"Name: {self.name}, Age: {self.age}, Weight: {self.weight}")


person1 = Person("John", 20, 70)    # экземпляр класса
person1.display()

sasha = Person("Sasha", 20, 50)    # экземпляр класса
sasha.display()

masha = Person("Masha", 20, 50)    # экземпляр класса
masha.display()

