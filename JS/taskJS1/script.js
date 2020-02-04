let money = prompt ('Ваш бюджет на месяц?');
let time = prompt ("Введите дату в формате", "YYYY-MM-DD?");
console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};