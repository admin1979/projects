# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect, url_for, flash, make_response # импортируем необходимые модули
from flask_sqlalchemy import SQLAlchemy # импортируем SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash # импортируем функции для хеширования паролей
import logging # импортируем модуль для логирования

app = Flask(__name__) # создаем экземпляр Flask
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db' # конфигурируем базу данных
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # отключаем отслеживание изменений
app.secret_key = 'your_secret_key' # устанавливаем секретный ключ для сессий

db = SQLAlchemy(app) # создаем экземпляр SQLAlchemy

# Модель пользователя
class User(db.Model): # создаем модель пользователя
    __tablename__ = 'user'  # Явно указываем имя таблицы
    id = db.Column(db.Integer, primary_key=True) # создаем поле id
    username = db.Column(db.String(150), unique=True, nullable=False) # создаем поле username
    email = db.Column(db.String(150), unique=True, nullable=False) # создаем поле email
    password = db.Column(db.String(150), nullable=False) # создаем поле password

    def __repr__(self): # создаем метод для представления пользователя
        return f'<User {self.username}>' # возвращаем строковое представление пользователя

# Создание таблиц
with app.app_context(): # создаем контекст приложения
    db.create_all() # создаем все таблицы
    print("База данных создана успешно") # выводим сообщение о успешном создании базы данных

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


# Регистрация пользователя
@app.route('/register', methods=['GET', 'POST']) # создаем маршрут для страницы "Регистрация"
def register(): # создаем функцию для страницы "Регистрация"            
    if request.method == 'POST': # проверяем, является ли метод POST
        try: # пытаемся выполнить код
            username = request.form.get('username') # получаем значение поля username
            email = request.form.get('email') # получаем значение поля email
            password = request.form.get('password') # получаем значение поля password
            confirm_password = request.form.get('confirm_password') # получаем значение поля confirm_password
            
            # Проверка наличия всех полей
            if not all([username, email, password, confirm_password]): # проверяем, все ли поля заполнены
                flash('Пожалуйста, заполните все поля.') # выводим сообщение о необходимости заполнения всех полей
                return redirect(url_for('register')) # перенаправляем на страницу регистрации
            
            # Проверка совпадения паролей
            if password != confirm_password: # проверяем, совпадают ли пароли
                flash('Пароли не совпадают.') # выводим сообщение о несовпадении паролей
                return redirect(url_for('register')) # перенаправляем на страницу регистрации
            
            # Проверяем, существует ли пользователь с таким именем или email
            existing_user = User.query.filter((User.username == username) | (User.email == email)).first() # проверяем, существует ли пользователь с таким именем или email
            if existing_user: # если пользователь существует
                flash('Пользователь с таким именем или email уже существует.') # выводим сообщение о существовании пользователя
                return redirect(url_for('register')) # перенаправляем на страницу регистрации
            
            # Создаем нового пользователя
            hashed_password = generate_password_hash(password) # хешируем пароль
            new_user = User(username=username, email=email, password=hashed_password) # создаем нового пользователя
            
            try:
                db.session.add(new_user) # добавляем нового пользователя в сессию
                db.session.commit() # сохраняем изменения
                flash('Регистрация успешно завершена. Теперь вы можете войти.') # выводим сообщение о успешной регистрации
                return redirect(url_for('login')) # перенаправляем на страницу входа
            except Exception as e: # если возникла ошибка
                db.session.rollback() # откатываем изменения
                app.logger.error(f"Ошибка при регистрации: {str(e)}") # логируем ошибку
                flash('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.') # выводим сообщение о возникшей ошибке
        except Exception as e: # если возникла ошибка   
            app.logger.error(f"Ошибка при регистрации: {str(e)}") # логируем ошибку
            return f"Произошла ошибка: {str(e)}", 500 # возвращаем сообщение о возникшей ошибке
    
    return render_template('register.html') # возвращаем страницу register

@app.route('/login', methods=['GET', 'POST']) # создаем маршрут для страницы "Вход"
def login(): # создаем функцию для страницы "Вход"
    if request.method == 'POST': # проверяем, является ли метод POST
        username = request.form.get('username') # получаем значение поля username
        password = request.form.get('password') # получаем значение поля password
        
        user = User.query.filter_by(username=username).first() # проверяем, существует ли пользователь с таким именем
        if user and check_password_hash(user.password, password): # проверяем, совпадают ли пароли
            # Здесь вы можете добавить логику для создания сессии пользователя
            flash('Вы успешно вошли в систему.') # выводим сообщение о успешном входе
            return redirect(url_for('index')) # перенаправляем на главную страницу
        else: # если пользователь не найден или пароли не совпадают
            flash('Неправильное имя пользователя или пароль.') # выводим сообщение о неправильном входе
    
    return render_template('login.html') # возвращаем страницу login

@app.errorhandler(404) # создаем обработчик ошибки 404
def not_found(error): # создаем функцию для обработчика ошибки 404
    resp = make_response(render_template('error.html'), 404) # создаем ответ с ошибкой 404
    resp.headers['X-Something'] = 'A value' # добавляем заголовок X-Something
    return resp # возвращаем ответ

if __name__ == '__main__': # запускаем приложение   
    app.run(debug=True) # запускаем приложение в режиме отладки
    
