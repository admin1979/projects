using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrays27
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myArray = { 111, 7, 44, 667, 34, 56, 66, 70 };

            int result = myArray.Min(); // Находит Минимальное или Max значение в массиве

            Console.WriteLine(result);

            Console.ReadLine();
        }
    }
}
