using System;
using System.Security.AccessControl;

/*using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;*/

namespace SimpleCode4 //SimpleCode5 это уже 6 урок
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите первое число");
            string q = Console.ReadLine();
            Console.WriteLine("Введите второе число");
            string w = Console.ReadLine();

            int e = Convert.ToInt32(q);
            int r = Convert.ToInt32(w);

            Console.WriteLine($"Сумма = {e+r}");
            Console.ReadKey();
        }
    }
}
