from flask import Flask # импортируем Flask

app = Flask(__name__) # создаем экземпляр класса Flask


from flask import render_template # импортируем render_template


@app.route('/') # создаем маршрут для главной страницы
def index(): # создаем функцию для главной страницы
    return render_template('index.html',title='Главная') # возвращаем страницу с ошибкой 404

@app.route('/about') # создаем маршрут для страницы "О нас"
def about(): # создаем функцию для страницы "О нас"
    return render_template('about.html') # возвращаем страницу about

@app.route('/text1') # создаем маршрут для страницы "Текст 1"
@app.route('/text1/<name>') #
def text1(name=None): # создаем функцию для страницы "Текст 1"
    return render_template('text1.html',person=name) # возвращаем шаблон text1.html, передавая параметр person со значением name

@app.route('/lorem') # создаем маршрут для страницы "Lorem"
def lorem(): # создаем функцию для страницы "Lorem"
    return render_template('lorem.html') # возвращаем страницу lorem 

@app.route('/form') # создаем маршрут для страницы "Форма"
def form(): # создаем функцию для страницы "Форма"
    return render_template('form.html') # возвращаем страницу form
from flask import request, redirect, url_for

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Здесь должна быть логика обработки данных формы
        # Например, сохранение пользователя в базу данных
        # Получаем данные из формы
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        
        # Проверяем, что пароли совпадают
        if password != confirm_password:
            return "Пароли не совпадают", 400
        
        # Здесь должна быть логика сохранения пользователя в базу данных
        # Например:
        # user = User(username=username, email=email, password=password)
        # db.session.add(user)
        # db.session.commit()
        
        # Выводим сообщение об успешной регистрации
        print(f"Пользователь {username} успешно зарегистрирован")
        return redirect(url_for('index'))
    return render_template('form.html')


from flask import make_response # импортируем make_response

@app.errorhandler(404) # создаем обработчик ошибки 404
def not_found(error): # создаем функцию для обработчика ошибки 404
    resp = make_response(render_template('error.html'), 404) # создаем ответ с ошибкой 404
    resp.headers['X-Something'] = 'A value' # добавляем заголовок X-Something
    return resp # возвращаем ответ

if __name__ == '__main__': # создаем условие для запуска приложения
    app.run(debug=True) # запускаем приложение в режиме отладки












