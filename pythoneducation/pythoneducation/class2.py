class Person:
    def __init__(self, name, age, gender, height, weight):
        self.name = name
        self.age = age
        self.gender = gender
        self.height = height
        self.weight = weight

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

    def bmi(self):
        return self.weight / (self.height ** 2)

print(Person("Vasya", 25, "male", 180, 80).greet())