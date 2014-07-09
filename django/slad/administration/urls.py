# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'login$', 'administration.views.login', name='login'),
    url(r'^$', 'administration.views.index', name='index'),
)