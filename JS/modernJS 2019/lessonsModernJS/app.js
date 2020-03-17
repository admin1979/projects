const user = {
    firstName: 'Denis',
    age: 30,
    isAdmin: true,
    email: 'test@test.com',
    'user-adress': {
        city: 'Kharkov'
    },
    skills: ['thml', 'css', 'js'] 
};

let value;

value = user.firstName;
value = user['isAdmin'];



console.log(value);
