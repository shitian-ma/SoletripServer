# coding: utf-8

from datetime import datetime

from flask import Flask
from flask import redirect
from flask import render_template
from flask import url_for

from views.backHandler import handler_view
from views.login import login_view
from views.order_list import order_view
from views.register import register_view
from views.todos import todos_view


app = Flask(__name__)

# 动态路由
app.register_blueprint(todos_view, url_prefix='/todos')
app.register_blueprint(login_view, url_prefix='/login')
app.register_blueprint(register_view, url_prefix='/register')
app.register_blueprint(order_view, url_prefix='/order')
app.register_blueprint(handler_view, url_prefix='/handler')
app.jinja_env.variable_start_string = '{{{'
app.jinja_env.variable_end_string = '}}}'


@app.route('/')
def index():
    return redirect(url_for('login.index'))


@app.route('/index2')
def index2():
    return render_template('index2.html')


@app.route('/time')
def time():
    return str(datetime.now())
