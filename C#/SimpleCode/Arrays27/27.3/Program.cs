using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _27._3
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myArray = { 111, 23, 45, 111, 67, 23, 10, 10, 456, 78, 90, 321 };

            int[] result = myArray.Distinct().ToArray(); //отбор уникальных элементов массива


            for (int i = 0; i < result.Length; i++)
            {
                Console.WriteLine(result[i]);
            }

            Console.ReadKey();
        }
    }
}
