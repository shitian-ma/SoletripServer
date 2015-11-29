# encoding: utf-8
'''
Created on 2015��11��28��

@author: shitian
'''
from flask import Blueprint
from flask import redirect
from flask import render_template
from flask import request
from flask import url_for
from leancloud.user import User


login_view = Blueprint('login', __name__)


class Roles(object):
    TYPE_ADMIN = 1
    TYPE_REQUSER = 2


class Login_User(object):
    '''
    classdocs
    '''

    def __init__(self):
        '''
        Constructor
        '''

    def checkRole(self, user, password):
        if user == 'admin':
            return Roles.TYPE_ADMIN
        if user == 'user':
            return Roles.TYPE_REQUSER
        return None

    def verify(self, user, password):
        User().login(user, password)

    def login(self, user, password):
        role = self.checkRole(user, password)
        if role == Roles.TYPE_ADMIN:
            # render_template('login.html')
            return redirect(url_for('handler.index'))
        elif role == Roles.TYPE_REQUSER:
            return redirect(url_for('order.index'))
        else:
            return redirect(url_for('register.index'))


@login_view.route('', methods=['POST'])
def post_response():
    user = request.form['user_name']
    pss = request.form['password']
    login_boolean = 'login' in request.form
    if not login_boolean:
        return redirect(url_for('register.index'))
    if len(user) < 1 or len(pss) < 1:
        obj_json = {}
        obj_json['error_message'] = "User name or password should be not null."
        return render_template('index.html', obj=obj_json)
    usr = Login_User()
    return usr.login(user, pss)


@login_view.route('')
def index():
    print "login page!"
    obj_json = {}
    obj_json['error_message'] = ""
    return render_template('index.html', obj=obj_json)
