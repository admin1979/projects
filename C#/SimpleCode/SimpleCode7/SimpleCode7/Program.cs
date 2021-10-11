using System;
/*using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;*/
using System.Globalization;

namespace SimpleCode7 // 7 урок ПРЕОБРАЗОВАНИЕ СТРОК | PARSE STRING | TRYPARSE STRING
{
    class Program
    {
        static void Main(string[] args)
        {
            /*string str = "5.9";

            NumberFormatInfo numberFormatInfo = new NumberFormatInfo()
            {
                NumberDecimalSeparator = ".",
            };

            double a = double.Parse(str, numberFormatInfo);*/

            string str = "1 fdfgg feffg";

            int a;

            bool result = int.TryParse(str,out a);

            if (result)
            {
                Console.WriteLine("Операция прошла успешно, значение = " + a);
            }
            else
            {
                Console.WriteLine("Не удалось конвертировать");
            }
        }
    }
}
