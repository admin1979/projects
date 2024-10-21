# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect, url_for, make_response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Конфигурация базы данных
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Модель пользователя
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

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

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        
        if password != confirm_password:
            return "Пароли не совпадают", 400
        
        # Проверка на существующего пользователя
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return "Пользователь с таким именем уже существует", 400
        
        existing_email = User.query.filter_by(email=email).first()
        if existing_email:
            return "Пользователь с таким email уже существует", 400
        
        new_user = User(username=username, email=email, password=password)
        try:
            db.session.add(new_user)
            db.session.commit()
            print(f"Пользователь {username} успешно зарегистрирован")
            return redirect(url_for('index'))
        except Exception as e:
            db.session.rollback()
            print(f"Ошибка при регистрации пользователя: {str(e)}")
            return f"Произошла ошибка при регистрации: {str(e)}", 500
    return render_template('form.html')

@app.errorhandler(404) # создаем обработчик ошибки 404
def not_found(error): # создаем функцию для обработчика ошибки 404
    resp = make_response(render_template('error.html'), 404) # создаем ответ с ошибкой 404
    resp.headers['X-Something'] = 'A value' # добавляем заголовок X-Something
    return resp # возвращаем ответ

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

    
