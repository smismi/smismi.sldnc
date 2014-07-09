from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from administration.require_moderator import require_moderator


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active and user.is_staff:
                auth_login(request, user)
                return HttpResponseRedirect('/redis')
            else:
                pass
        else:
            pass
    return render_to_response('login.html')


def logout(request):
    auth_logout(request)
    return HttpResponseRedirect('/redis')


@require_moderator
def index(request):
    return render_to_response('index.html')