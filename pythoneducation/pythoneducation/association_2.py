# Функция, которая приветствует посетителя
def greet_visitor(name): # функция
    return f"Welcome to the zoo, {name}!" # возвращает строку

# Класс, представляющий животное
class Animal: # класс
    def __init__(self, name, species, sound): # конструктор
        self.name = name        # Атрибут имени животного
        self.species = species  # Атрибут вида
        self.sound = sound      # Атрибут звука, который издает животное

    # Метод, который позволяет животному издать звук
    def make_sound(self): # метод
        return f"{self.name} the {self.species} says {self.sound}!" # возвращает строку

# Экземпляр класса Animal для льва
lion = Animal("Leo", "Lion", "roar")

# Экземпляр класса Animal для обезьяны
monkey = Animal("George", "Monkey", "ooh-ooh-ah-ah") # экземпляр класса

# Вызов функции приветствия
print(greet_visitor("Alice"))  # Выведет: Welcome to the zoo, Alice!

# Вызов метода make_sound для каждого животного
print(lion.make_sound())    # Выведет: Leo the Lion says roar!
print(monkey.make_sound())  # Выведет: George the Monkey says ooh-ooh-ah-ah
