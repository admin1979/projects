using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Channels;
using System.Text;
using System.Threading.Tasks;

namespace dzCalc2
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.Clear();
                double a , b;

                try
                {
                    Console.WriteLine("введите первое число и нажмите Enter");
                    a = double.Parse(Console.ReadLine());

                    Console.WriteLine("введите второе число и нажмите Enter для получения результата");
                    b = double.Parse(Console.ReadLine());
                }
                catch (Exception)
                {
                    Console.WriteLine("Не удалось преобразовать строку в число");
                    Console.ReadLine();
                    continue;
                }

                
                Console.WriteLine("введите оператор и нажмите Enter");
                string oper = Console.ReadLine();

                switch (oper)
                {
                    case "+":
                        Console.WriteLine($"={a + b}");
                        break;
                    case "-":
                        Console.WriteLine($"={a - b}");
                        break;
                    case "*":
                        Console.WriteLine($"={a * b}");
                        break;
                    case "/":
                        if (b == 0)
                            Console.WriteLine(0);
                        else
                            Console.WriteLine($"={a / b}");
                        break;
                    default:
                        Console.WriteLine("нет такого оператора");
                        break;
                }
                Console.ReadLine();
            }
        }
    }
}

//=====================================> Урок 16