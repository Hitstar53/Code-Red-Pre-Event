from django.shortcuts import render
from django.http import HttpResponse
from .models import Team
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import authenticate
from datetime import datetime
# Create your views here.

def home(request):
    if request.method == 'POST':
        team_name = request.POST.get('team_name')
        username = team_name
        #check if the user exists if it does login and if they don't create a new user
        if User.objects.filter(username=username).exists():
            user = User.objects.get(username=username)
            auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            return redirect('prelevel1')
        else:
            user = User.objects.create_user(username=username, password=None)
            user.save()
            t = int(datetime.now().microsecond)
            team = Team.objects.create(team_name=team_name, user=user,time_taken=t)
            team.save()
            
           
            auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            return redirect('prelevel0')
        
    return render(request, 'index.html')

def prelevel0(request):
    if request.method == 'POST':
        return redirect('prelevel1')
    return render(request, 'prelevel_0.html')

def prelevel1(request):
    if request.method == 'POST':
        return redirect('level1')
    return render(request, 'prelevel_1.html')

def level1(request):
    if request.method == 'POST':
        num = request.POST.get('num')
        real_num = "22223222"
        if num == real_num:
            return redirect('prelevel2')
        else:
            return redirect('level1')
    return render(request, 'level_1.html')

def prelevel2(request):
    if request.method == 'POST':
        return redirect('level2')
    return render(request, 'prelevel_2.html')
   

def level2(request):
    if request.method == 'POST':
        bl = request.POST.get('bool')
        print(bl)
        if bl == "no":
            return redirect('level2')
        elif bl == "yes":
            team = Team.objects.get(user=request.user)
            t = int(datetime.now().microsecond)
            team.time_taken = str(t - int(team.time_taken))
            team.save()
            return redirect('last')
    return render(request, 'level_2.html')
    
    
def last(request):
    return render(request, 'last.html')