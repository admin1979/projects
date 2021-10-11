using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TriangleDz5
{
    //треугольники в консоли с#
    class Program
    {
        static void Main(string[] args)
        {
             
            int a = 6;
            while (a > 0)
            {
                Console.WriteLine("Введите высоту треугольника:");
                int height = int.Parse(Console.ReadLine());
                Console.WriteLine("Введите ширину треугольника:");
                int width = int.Parse(Console.ReadLine());

                for (int j = 0; j < height; j++)
                {
                    for (int i = width; i <= j; i++)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                }

                Console.WriteLine(); //это разрыв между треугольниками

                Console.WriteLine("Введите высоту треугольника 2:");
                int height2 = int.Parse(Console.ReadLine());
                Console.WriteLine("Введите ширину треугольника 2:");
                int width2 = int.Parse(Console.ReadLine());


                for (int k = 0; k < height2; k++)
                {
                    for (int l = width2; l > k; l--)
                    {
                        Console.Write("#");
                    }
                    Console.WriteLine();
                }
                //Console.ReadLine();
                a--;
            }
        }
    }
}
