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
    ret = render_template('list.html')
    print ret
    return ret
