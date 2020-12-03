using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _27._2
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myArray = { 111, 7, 44, 667, 34, 56, 66, 70 };

            int result = myArray.Where(i => i % 2 == 0).Sum(); // Находит сумму чётных элементов массива
            int result1 = myArray.Where(i => i % 2 != 0).Min(); // Находит самое маленькое нечётное число в массиве

            Console.WriteLine($"сумма чётных элементов массива {result}");
            Console.WriteLine($"Находит самое маленькое нечётное число в массиве {result1}");

            Console.ReadLine();
        }
    }
}
