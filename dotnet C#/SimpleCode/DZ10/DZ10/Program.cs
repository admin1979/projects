using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DZ10
{
    class Program
    {
        static string StringOfChar(string value1, string value2, string value3)
        {
            return value1 + value2 + value3;
        }

        static void Main(string[] args)
        {
            string a, b, c;

            a = Console.ReadLine();
            b = Console.ReadLine();
            c = Console.ReadLine();

            Console.WriteLine(StringOfChar(a,b,c));

            Console.ReadKey();
        }
    }
}
