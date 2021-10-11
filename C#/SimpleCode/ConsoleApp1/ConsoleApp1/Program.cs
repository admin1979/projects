using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyProj;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            double result = MyLibrary.Multiply (3, 5);
            Console.WriteLine($"Результат сложения через библиотеку созданную мной библиотеку MyLibrary = {result}");
            Console.ReadKey();
        }
    }
}
