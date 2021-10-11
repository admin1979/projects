using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Globalization; // для использования запятой вместо точки в дробных числах

namespace DZ8lesson
{
    class Program
    {
        static void Main(string[] args)
        {

            NumberFormatInfo numberFormatInfo1 = new NumberFormatInfo()
            {
                NumberDecimalSeparator = ",",
            };
            // для использования запятой вместо точки в дробных числах



            // 1. Среднее арифметическое
            Console.WriteLine("введите 2 числа и нажмите Enter");
            string num1 = Console.ReadLine();
            string num2 = Console.ReadLine();
            double num1a = double.Parse(num1);
            double num2a = double.Parse(num2);
            Console.WriteLine($"среднее арифметическое введённых чисел: {(num1a+num2a)/2}");
            Console.ReadKey();

            // 2.
            Console.WriteLine("введите 1 число и нажмите Enter");
            string n1 = Console.ReadLine();
            Console.WriteLine("введите 2 число и нажмите Enter");
            string n2 = Console.ReadLine();
            Console.WriteLine("введите 3 число и нажмите Enter");
            string n3 = Console.ReadLine();
            double n1a = Convert.ToDouble(n1);
            double n2a = Convert.ToDouble(n2);
            double n3a = Convert.ToDouble(n3);

            Console.WriteLine($"сумма чисел = {n1a+n2a+n3a} ; произведение чисел = {n1a * n2a * n3a}");
            Console.ReadKey();

            // 3.
            Console.WriteLine("Узнай курс з(Z) и купонов(K), введи название валюты и нажми Enter");
            string str1 = Console.ReadLine();
            if (str1 == "Z")
            {
                Console.WriteLine("1 з = 0.1 х");
            }
            else if (str1 == "K")
            {
                Console.WriteLine("1 купон = 0.3 х");
            }
            else
            {
                Console.WriteLine("Нема такой валюты");
            }

            Console.WriteLine("введи количество купонов и получи на них х по стандарту");
            string k1 = Console.ReadLine();
            int k1a = Int32.Parse(k1);
            Console.WriteLine($"= {k1a * -0.5} х");

            Console.WriteLine("введи количество з и получи на них х по стандарту");
            string k2 = Console.ReadLine();
            int k2a = Int32.Parse(k2);
            Console.WriteLine($"= {k2a * -1} х");

            Console.ReadKey();


        }
    }
}
