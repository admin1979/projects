using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dzCalc
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("введите первое число и нажмите Enter");
            double a = double.Parse(Console.ReadLine());
            Console.WriteLine("введите оператор и нажмите Enter");
            string oper = Console.ReadLine();
            Console.WriteLine("введите третье число и нажмите Enter для получения результата");
            double b = double.Parse(Console.ReadLine());


            if (oper == "+")
            {
                Console.WriteLine($"сумма = {a + b}");
            }

            if (oper == "-")
            {
                Console.WriteLine($"разница = {a - b}");
            }

            if (oper == "*")
            {
                Console.WriteLine($"результат умножения = {a * b}");
            }

            if (oper == "/")
            {
                if (b == 0)
                    Console.WriteLine($"= 0");
                else
                    Console.WriteLine($"результат деления ={a / b}");
            }

            else if(oper != "/" & oper != "*" & oper != "+" & oper != "-")
            {
                Console.WriteLine("оператор не найден");
            }

            Console.ReadKey();
        }
    }
}
