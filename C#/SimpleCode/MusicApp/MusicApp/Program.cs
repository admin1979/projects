using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicApp
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 10; i >= 0; i--)
            {
                System.Threading.Thread.Sleep(400);
                Console.WriteLine(i);
            }
            
            for (int j = 0; j < 100; j++)
            {
                System.Threading.Thread.Sleep(100);
                Console.Beep(40, 300);
                Console.WriteLine("BOOM!!!");
            }      
        }
    }
}
