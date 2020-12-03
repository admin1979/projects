using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode14
{
    class Program
    {
        public static bool GetTemperature()
        {
            return true;
        }

        public static bool GetCoolingStatus()
        {
            return true;
        }

        static void Main(string[] args)
        {
            if (GetTemperature() | GetCoolingStatus())
            {
                Console.WriteLine("Угроза повреждения процессора");
            }

            Console.ReadKey();
        }
    }
}
