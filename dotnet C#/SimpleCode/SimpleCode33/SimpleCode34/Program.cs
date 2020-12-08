using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode34
    //трёхмерные и более массивы
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,,] myArray = new int[4, 3, 5];

            myArray[0, 2, 3] = 55;

            Console.ReadKey();

        }
    }
}
