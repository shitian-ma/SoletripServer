# encoding: utf-8
'''
Created on 2015��11��29��

@author: shitian
'''

from flask import Blueprint
from flask import redirect
from flask import render_template
from flask import request
from flask import url_for


order_view = Blueprint('order', __name__)


class Order(object):
    '''
    classdocs
    '''

    def __init__(self, params):
        '''
        Constructor
        '''


@order_view.route('')
def index():
    ret = render_template('list.html')
    print ret
    return ret
