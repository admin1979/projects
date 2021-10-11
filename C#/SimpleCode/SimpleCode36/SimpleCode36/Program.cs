using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode36
{
    class Program
    {
        /// <summary>
        /// Возвращает сумму 2-x целых чисел
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <returns></returns>
        static int Sum(int a, int b)
        {
            return a + b;
        }
        /// <summary>
        /// возвращает сумму трёх целых чисел
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <param name="c"></param>
        /// <returns></returns>

        static int Sum(int a, int b, int c)
        {
            return a + b + c;
        }
        /// <summary>
        /// Возвращает сумму трёх дробных чисел!
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <returns></returns>
        static double Sum(double a, double b)
        {
            return a + b;
        }

        static void Main(string[] args)
        {
            int result1 = Sum(2, 3);
            int result2 = Sum(2, 3, 6);
            double result3 = Sum(2.6, 36.3);
            Console.WriteLine(result1);
            Console.WriteLine(result2);
            Console.WriteLine(result3);
            Console.ReadKey();
        }

    }
}
