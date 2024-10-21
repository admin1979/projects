class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return f"{self.name} говорит гав!"

class Cat(Animal):
    def make_sound(self):
        return f"{self.name} говорит мяу!"

dog = Dog("Бадди", 3)
print(dog.make_sound())  # Выведет: Бадди говорит гав!

cat = Cat("Том", 2)
print(cat.make_sound())  # Выведет: Том говорит мяу!
