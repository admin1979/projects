# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect, url_for, flash, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import logging

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'

db = SQLAlchemy(app)

# Модель пользователя
class User(db.Model):
    __tablename__ = 'user'  # Явно указываем имя таблицы
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# Создание таблиц
with app.app_context():
    db.create_all()
    print("База данных создана успешно")

@app.route('/') # создаем маршрут для главной страницы
def index(): # создаем функцию для главной страницы
    return render_template('index.html',title='Главная') # возвращаем страницу с ошибкой 404

@app.route('/about') # создаем маршрут для страницы "О нас"
def about(): # создаем функцию для страницы "О нас"
    return render_template('about.html') # возвращаем страницу about

@app.route('/text1') # сздаем маршрут для страницы "Текст 1"
@app.route('/text1/<name>') # создаем маршрут для страницы "Текст 1" с параметром name
def text1(name=None): # создаем функцию для страницы "Текст 1"
    return render_template('text1.html',person=name) # возвращаем шаблон text1.html, передавая параметр person со значением name

@app.route('/lorem') # создаем маршрут для страницы "Lorem"
def lorem(): # создаем функцию для страницы "Lorem"
    return render_template('lorem.html') # возвращаем страницу lorem 


@app.route('/form', methods=['GET', 'POST']) # создаем маршрут для страницы "Форма"
def form(): # создаем функцию для страницы "Форма"
    return render_template('form.html') # взвращаем страницу form  



@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        try:
            username = request.form.get('username')
            email = request.form.get('email')
            password = request.form.get('password')
            confirm_password = request.form.get('confirm_password')
            
            # Проверка наличия всех полей
            if not all([username, email, password, confirm_password]):
                flash('Пожалуйста, заполните все поля.')
                return redirect(url_for('register'))
            
            # Проверка совпадения паролей
            if password != confirm_password:
                flash('Пароли не совпадают.')
                return redirect(url_for('register'))
            
            # Проверяем, существует ли пользователь с таким именем или email
            existing_user = User.query.filter((User.username == username) | (User.email == email)).first()
            if existing_user:
                flash('Пользователь с таким именем или email уже существует.')
                return redirect(url_for('register'))
            
            # Создаем нового пользователя
            hashed_password = generate_password_hash(password)
            new_user = User(username=username, email=email, password=hashed_password)
            
            try:
                db.session.add(new_user)
                db.session.commit()
                flash('Регистрация успешно завершена. Теперь вы можете войти.')
                return redirect(url_for('login'))
            except Exception as e:
                db.session.rollback()
                app.logger.error(f"Ошибка при регистрации: {str(e)}")
                flash('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.')
        except Exception as e:
            app.logger.error(f"Ошибка при регистрации: {str(e)}")
            return f"Произошла ошибка: {str(e)}", 500
    
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            # Здесь вы можете добавить логику для создания сессии пользователя
            flash('Вы успешно вошли в систему.')
            return redirect(url_for('index'))
        else:
            flash('Неправильное имя пользователя или пароль.')
    
    return render_template('login.html')

@app.errorhandler(404) # создаем обработчик ошибки 404
def not_found(error): # создаем функцию для обработчика ошибки 404
    resp = make_response(render_template('error.html'), 404) # создаем ответ с ошибкой 404
    resp.headers['X-Something'] = 'A value' # добавляем заголовок X-Something
    return resp # возвращаем ответ

if __name__ == '__main__':
    app.run(debug=True)

    
