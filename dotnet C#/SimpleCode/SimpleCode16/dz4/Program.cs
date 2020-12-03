using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dz4
{
    class Program
    {
        static void Main(string[] args)
        {
            uint evenNubers = 0; // чётные числа
            uint oddNumbers = 0; // нечётные числа

            int evenNumberSum = 0; // сумма чётных чисел
            int oddNumberSum = 0; // сумма нечётных чисел 

            Console.WriteLine("Введите начальное значение");
            int initialValue = int.Parse(Console.ReadLine());
            Console.WriteLine("Введите конечное значение");
            int finalValue = int.Parse(Console.ReadLine());

            while (initialValue <= finalValue)
            {
                Console.WriteLine(initialValue);

                if (initialValue % 2 == 0)
                {
                    evenNubers++;
                    evenNumberSum += finalValue;
                }
                else
                {
                    oddNumbers++;
                    oddNumberSum += finalValue;
                }

                initialValue++;
            }

            Console.WriteLine($"колличество чётных чисел: {evenNubers}");
            Console.WriteLine($"колличество нечётных чисел: {oddNumbers}");

            Console.WriteLine($"сумма чётных чисел: {evenNumberSum}");
            Console.WriteLine($"сумма нечётных чисел: {oddNumberSum}");



            Console.ReadKey();
        }
    }
}
