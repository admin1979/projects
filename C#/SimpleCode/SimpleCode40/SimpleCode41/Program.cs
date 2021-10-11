using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode41
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = null;

            str ??= "default string"; //требует 8-й версии C#

            Console.WriteLine("количество символов в строке" + str.Length);

            Console.ReadKey();
        }
    }
}
