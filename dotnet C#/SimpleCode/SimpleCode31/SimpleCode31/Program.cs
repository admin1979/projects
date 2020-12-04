using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode31
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] myArray = new int[,]
            {
                {22,44,67,23,65},
                {555,5557,882,48,3},
                {2,6,98,0,0},
                {34,5,6,9,90}
            };

            foreach (var item in myArray)
            {
                Console.Write(item + " ");
            }

            Console.ReadKey();
        }
    }
}
