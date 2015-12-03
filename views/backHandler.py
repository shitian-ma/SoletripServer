# encoding: utf-8
'''
Created on 2015年11月29日

@author: shitian
'''
from flask import Blueprint
from flask import redirect
from flask import render_template
from flask import request
from flask import url_for
from leancloud.user import User

handler_view = Blueprint('handler', __name__)


class BackHandler(object):
    '''
    classdocs
    '''

    def __init__(self, params):
        '''
        Constructor
        '''


@handler_view.route('')
def index():
    user = User.get_current()
    obj = {}
    obj['user_name'] = user.get_username()
    ret = render_template('list.html', obj_h=obj)
    return ret
