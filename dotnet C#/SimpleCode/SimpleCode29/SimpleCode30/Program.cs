using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//30 ДВУМЕРНЫЙ_МАССИВ___ОБЪЯВЛЕНИЕ___ИНИЦИАЛИЗАЦИЯ___ИНДЕКСЫ___C_

namespace SimpleCode30
{
    class Program
    {
        static void Main(string[] args)
        {
            //тип_данных [,] имя_массива;
            //int[,] myArray;
            //myArray = new int[3, 5];

            //или

            //int[,] myArray = new int[3, 5];

            //myArray[0, 2] = 99; //координаты как в морском бое и по ним число 99

            //Console.WriteLine(myArray[0,2]);

            //или

            int[,] myArray = new int[3, 5]
            {
                {4,54,66,67,8 },
                {5,8,1,2,6 },
                {23,56,7,899,90}
            };

            Console.WriteLine(myArray[0,3]);
            Console.ReadKey();
        }
    }
}
