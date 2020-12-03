using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _27._4
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myArray = { 111, 23, 45, 111, 67, 23, 10, 10, 456, 78, 90, 321 };

            int[] result = myArray.OrderBy(i => i).ToArray(); //сортировка элементов массива в порядке возрастания
            Console.WriteLine("############################");
            int[] result1 = myArray.OrderByDescending(i => i).ToArray(); //сортировка элементов массива в порядке убывания

            Console.WriteLine(result);
            Console.WriteLine(result1);

            Console.ReadKey();
        }
    }
}
