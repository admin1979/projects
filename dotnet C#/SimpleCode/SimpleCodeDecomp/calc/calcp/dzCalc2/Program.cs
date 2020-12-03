// Decompiled with JetBrains decompiler
// Type: dzCalc2.Program
// Assembly: dzCalc2, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 63A1C422-6ACB-4EE2-98E5-803465C5E7E7
// Assembly location: C:\Users\pupke\source\SimpleCodeDecomp\calc\dzCalc2.exe

using System;

namespace dzCalc2
{
  internal class Program
  {
    private static void Main(string[] args)
    {
      while (true)
      {
        Console.Clear();
        double num1;
        double num2;
        try
        {
          Console.WriteLine("введите первое число и нажмите Enter");
          num1 = double.Parse(Console.ReadLine());
          Console.WriteLine("введите второе число и нажмите Enter для получения результата");
          num2 = double.Parse(Console.ReadLine());
        }
        catch (Exception ex)
        {
          Console.WriteLine("Не удалось преобразовать строку в число");
          Console.ReadLine();
          continue;
        }
        Console.WriteLine("введите оператор и нажмите Enter");
        string str = Console.ReadLine();
        if (!(str == "+"))
        {
          if (!(str == "-"))
          {
            if (!(str == "*"))
            {
              if (str == "/")
              {
                if (num2 == 0.0)
                  Console.WriteLine(0);
                else
                  Console.WriteLine(string.Format("={0}", (object) (num1 / num2)));
              }
              else
                Console.WriteLine("нет такого оператора");
            }
            else
              Console.WriteLine(string.Format("={0}", (object) (num1 * num2)));
          }
          else
            Console.WriteLine(string.Format("={0}", (object) (num1 - num2)));
        }
        else
          Console.WriteLine(string.Format("={0}", (object) (num1 + num2)));
        Console.ReadLine();
      }
    }
  }
}
