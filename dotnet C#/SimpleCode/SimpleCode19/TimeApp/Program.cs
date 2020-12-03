using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace TimeApp
    //как измерить время выполнения кода
{
    class Program
    {
        static void Main(string[] args)
        {
            var sw = new Stopwatch();

            sw.Start();

            for (int i = 0; i < 1000; i++)
            {
                Console.WriteLine(i);
            }

            sw.Stop();

            Console.WriteLine($"Прошло времени: {sw.ElapsedMilliseconds}");

            Console.ReadLine();

            sw.Restart();


            sw.Stop();

            Console.WriteLine($"Прошло времени: {sw.ElapsedMilliseconds}");

        }
    }
}
