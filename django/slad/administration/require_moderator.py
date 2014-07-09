# -*- coding: utf-8 -*-
from django.http import HttpResponseRedirect


def require_moderator(function):
    def wrap(request, *args, **kwargs):
        if request.user.is_authenticated() and request.user.is_staff:
            return function(request, *args, **kwargs)
        else:
            return HttpResponseRedirect('/redis/login')

    wrap.__doc__ = function.__doc__
    wrap.__name__ = function.__name__
    return wrap