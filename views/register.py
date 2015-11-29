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


register_view = Blueprint('register', __name__)


def phone_number_check(phoneno):
    phoneno = phoneno.lstrip().rstrip()
    if phoneno.startswith("+"):
        phoneno = phoneno.lstrip('+')
    try:
        long(phoneno)
        return True
    except Exception:
        return False


def email_check(email):
    email_virable = True
    if email.count('@') != 1:
        email_virable = False
    if email.count('.') < 1:
        email_virable = False
    return email_virable


def password_check(pss, pssc):
    if pss != pssc:
        return False
    return True


def error_check(phoneno, email, pss, pssc, username):
    if len(username) < 1:
        return "User name should not be null."
    if not phone_number_check(phoneno):
        return "Phone number invalid!"
    if not email_check(email):
        return "Email invalid!"
    if not password_check(pss, pssc):
        return "Password invalid!"
    return None


@register_view.route('', methods=['POST'])
def post_response():
    phoneno = request.form['phoneno']
    email = request.form['email']
    pss = request.form['password']
    pssc = request.form['password2']
    username = request.form['username']
    print "full form:", request.form
#     return redirect(url_for('login.index'))
    error = error_check(phoneno, email, pss, pssc, username)
    if error != None:
        obj_json = {}
        obj_json['username'] = " value = " + \
            username if len(username) > 0 else ""
        obj_json['phoneno'] = " value = " + phoneno if len(phoneno) > 0 else ""
        obj_json['email'] = " value = " + email if len(email) > 0 else ""
        obj_json['password'] = " value = " + pss if len(pss) > 0 else ""
        obj_json['password2'] = " value = " + pssc if len(pssc) > 0 else ""
        obj_json['error_message'] = "Error: " + \
            error if len(error) > 0 else ""
        return render_template('logon.html', obj=obj_json)
    return redirect(url_for('order.index'))


@register_view.route('')
def index():
    print "logon page!"
    obj_json = {}
    obj_json['username'] = ""
    obj_json['phoneno'] = ""
    obj_json['email'] = ""
    obj_json['password'] = ""
    obj_json['password2'] = ""
    obj_json['error_message'] = ""
    ret = render_template('logon.html', obj=obj_json)
    print ret
    return ret
