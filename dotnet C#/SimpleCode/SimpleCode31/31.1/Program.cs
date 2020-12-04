using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _31._1
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

            int height = myArray.GetLength(0);
            int width = myArray.GetLength(1);

            for (int y = 0; y < height; y++)
            {
                for (int x = 0; x < width; x++)
                {
                    Console.Write(myArray[y, x] + "\t");
                }
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
