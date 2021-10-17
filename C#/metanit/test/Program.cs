using System;

namespace test
{
    class Person
    {
        public string name;
        public int age = 18;

        public void GetInfo()
        {
            Console.WriteLine($"Имя:{name}\n Возраст:{age}");
        }
    }

    class House
    {
        public string houseName;
        public int houseAge;

        public House() { houseName = "Мой милый дом";houseAge = 5;}

        public void HouseInfo()
        {
            Console.WriteLine($"Название дома: {houseName}\nВозраст дома: {houseAge}");
        }
    }

     class Automobile
    {
        public string name;
        public int year;
        public string color;
        
        public void AutoInfo()
        {
            Console.WriteLine($"Марка автомобиля:{name}\nГод выпуска:{year}\nЦвет:{color}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Person tom = new Person();
            tom.GetInfo();

            tom.name = "Tom";
            tom.age = 34;
            tom.GetInfo();
            //Console.ReadKey();

            Automobile audi = new Automobile();

            audi.name = "Audi-70";
            audi.year = 30;
            audi.color = "red";
            audi.AutoInfo();

            House houseMy = new House();
            houseMy.houseAge = 555;
            houseMy.houseName = "Мой дом";
            houseMy.HouseInfo();
        }
    }
}

