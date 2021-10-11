using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode13
{
    class Program
    {
        static void Main(string[] args)
        {
            double q;
            Console.WriteLine("введите число");
            q = double.Parse(Console.ReadLine());

            if (q % 2 ==0)
            {
                Console.WriteLine("число чётное");
            }
            else
            {
                Console.WriteLine("число не чётное");
            }

            Console.ReadKey();
        }
    }
}

// ==========> Урок 14 сокращённые логические операции
