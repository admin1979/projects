using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCode33
{
    class Program
    {
        static void Main(string[] args)
        {
            int[][] myArray = new int[3][];
            int[,] myArray2 = new int[3, 5];

            int myArrayRank = myArray.Rank;
            int myArray2Rank = myArray2.Rank;

            int myArrayLenght = myArray.Length;
            int myArray2Lenght = myArray2.Length;

            Console.WriteLine(myArrayLenght);
            Console.WriteLine(myArray2Lenght);
            Console.WriteLine(myArrayRank);
            Console.WriteLine(myArray2Rank);

            Console.ReadKey();
        }
    }
}
