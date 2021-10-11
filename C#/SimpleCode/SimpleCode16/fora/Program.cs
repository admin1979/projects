using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fora
{
    class Program
    {
        static void Main(string[] args)
        {
            uint evenNubers = 0; // чётные числа
            uint oddNumbers = 0; // нечётные числа

            int evenNumberSum = 0; // сумма чётных чисел
            int oddNumberSum = 0; // сумма нечётных чисел 

            Console.WriteLine("Введите стартовое значение");
            int startValue = int.Parse(Console.ReadLine());
            Console.WriteLine("Введите конечное значение");
            int endValue = int.Parse(Console.ReadLine());

            for (int i = startValue; i <= endValue; i++)
            {
                Console.WriteLine(i);

                if (i % 2 == 0)
                {
                    evenNubers++;
                    evenNumberSum += endValue;
                }
                else
                {
                    oddNumbers++;
                    oddNumberSum += endValue;
                }
            }

            Console.WriteLine($"колличество чётных чисел: {evenNubers}");
            Console.WriteLine($"колличество нечётных чисел: {oddNumbers}");

            Console.WriteLine($"сумма чётных чисел: {evenNumberSum}");
            Console.WriteLine($"сумма нечётных чисел: {oddNumberSum}");

            Console.ReadKey();
        }
    }
}
