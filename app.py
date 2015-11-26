# coding: utf-8

from datetime import datetime

from flask import Flask
from flask import render_template

from views.todos import todos_view

app = Flask(__name__)

# 动态路由
app.register_blueprint(todos_view, url_prefix='/todos')
app.jinja_env.variable_start_string = '{{{'
app.jinja_env.variable_end_string = '}}}' 



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index2')
def index2():
    return render_template('index2.html')

@app.route('/time')
def time():
    return str(datetime.now())