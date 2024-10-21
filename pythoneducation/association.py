# Функция, которая приветствует посетителя
def greet_visitor(name):
    return f"Welcome to the zoo, {name}!"

# Класс, представляющий животное
class Animal:
    def __init__(self, name, species, sound):
        self.name = name        # Атрибут имени животного
        self.species = species  # Атрибут вида
        self.sound = sound      # Атрибут звука, который издает животное

    # Метод, который позволяет животному издать звук
    def make_sound(self):
        return f"{self.name} the {self.species} says {self.sound}!"

# Экземпляр класса Animal для льва
lion = Animal("Leo", "Lion", "roar")

# Экземпляр класса Animal для обезьяны
monkey = Animal("George", "Monkey", "ooh-ooh-ah-ah")

# Вызов функции приветствия
print(greet_visitor("Alice"))  # Выведет: Welcome to the zoo, Alice!

# Вызов метода make_sound для каждого животного
print(lion.make_sound())    # Выведет: Leo the Lion says roar!
print(monkey.make_sound())  # Выведет: George the Monkey says ooh-ooh-ah-ah
