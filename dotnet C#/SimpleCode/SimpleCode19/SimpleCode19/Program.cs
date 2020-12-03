using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode19
{
    class Program
    {
        static void Main(string[] args)
        {
            /*int limit = int.Parse(Console.ReadLine());

            for (int i = 0; i <= limit; i++)
            {
                Console.WriteLine(i);
                System.Threading.Thread.Sleep(600);
                break;
            }
            Console.ReadKey();*/

            /*int i = 0;

            for (; i < 3; i++)
            {
                Console.WriteLine($"for 1 : {i}");
            }

            for (; i < 5; i++)
            {
                Console.WriteLine($"for 2 : {i}");
            }

            Console.ReadKey(); */

            /*for (int i = 0, j = 5; i < 10 && j <= 12; i++, j++)
            {
                Console.WriteLine($"i:{i} / j:{j}");
            }
            Console.ReadKey(); */

            for (int i = int.Parse(Console.ReadLine()); i >= 0; i--)
            {
                Console.WriteLine($"цикл в обратном порядке: {i}");
            }
            Console.ReadKey();
        }
    }
}
