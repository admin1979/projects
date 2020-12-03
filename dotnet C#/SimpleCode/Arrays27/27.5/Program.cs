using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _27._5
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myAr = { 23, 444, 667, 3, 6, 7 };

            Array.Sort(myAr); //Сортировка элементов по возрастанию с помощью метода Sort

            for (int i = 0; i < myAr.Length; i++)
            {
                Console.WriteLine(myAr[i]);
            }

            Console.ReadKey();
        }
    }
}
