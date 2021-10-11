using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode40
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = null;

            Console.WriteLine(str ?? "нет данных");

            Console.ReadKey();
        }
    }
}
