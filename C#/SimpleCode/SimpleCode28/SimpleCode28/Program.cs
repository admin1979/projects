using System;

namespace SimpleCode28
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myArray = { 2, 10, 5, 6, 77, 89 };

            // Console.WriteLine(myArray[^1]);

            int[] myArray2 = myArray[1..4];
            //int[] myArray2 = myArray[..4];

            for (int i = 0; i < myArray2.Length; i++)
            {
                Console.WriteLine(myArray2[i]);
            }

            Console.ReadKey();
        }
    }
}
