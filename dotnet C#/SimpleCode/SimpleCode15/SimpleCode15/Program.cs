using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode15
{
    class Program
    {
        static void Main(string[] args)


        {
            int a = int.Parse(Console.ReadLine());

            switch (a)
            {
                case 1:
                case 2:
                    Console.WriteLine("Вы ввели число 1 или 2");
                    break;
                default:
                    Console.WriteLine("Не знаю число");
                    break;
            }
        }
    }
}
