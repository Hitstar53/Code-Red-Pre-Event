from django.shortcuts import render
from django.http import HttpResponse
from .models import Team
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import authenticate

# Create your views here.

def home(request):
    if request.method == 'POST':
        team_name = request.POST.get('team_name')
        username = team_name
        #check if the user exists if it does login and if they don't create a new user
        if User.objects.filter(username=username).exists():
            user = User.objects.get(username=username)
            auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            return redirect('level1')
        else:
            user = User.objects.create_user(username=username, password=None)
            user.save()
            team = Team.objects.create(team_name=team_name, user=user)
            team.save()
           
            auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            return redirect('level1')
        
    return render(request, 'index.html')

def level1(request):
    if request.method == 'POST':
        bl = request.POST.get('bool')
        print(bl)
        if bl == "no":
            return redirect('level1')
        elif bl == "yes":
            return redirect('level2')
    return render(request, 'level_1.html')

def level2(request):
    return render(request, 'level_2.html')