from django.shortcuts import render
from django.http import HttpResponse
from .models import Team
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import authenticate
from datetime import datetime
from django.contrib.auth.models import Group
# Create your views here.

def home(request):
    if request.method == 'POST':
        team_name = request.POST.get('team_name')
        username = team_name
        #check if the user exists if it does login and if they don't create a new user
        if User.objects.filter(username=username).exists():
            
            user = User.objects.get(username=username)
            auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            team = Team.objects.get(user=request.user)
            team.real_end_time = int(datetime.now().microsecond) + 2*60*60*1000000
            return redirect('prelevel0')
        else:
            user = User.objects.create_user(username=username, password=None)
            user.save()
            t = int(datetime.now().microsecond)
            e = t + 2*60*60*1000000
            team = Team.objects.create(team_name=team_name, user=user,time_taken=t,real_end_time=e)
            team.save()

            
           
            auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            return redirect('prelevel0')
    
    return render(request, 'index.html')

def prelevel0(request):
    if request.method == 'POST':
        return redirect('prelevel1')
    team = Team.objects.get(user=request.user)
    endtime = team.real_end_time
    print(endtime)
    return render(request, 'prelevel_0.html', {'team':team,'endtime':endtime})

def prelevel1(request):
    if request.method == 'POST':
        return redirect('level1')
    team = Team.objects.get(user=request.user)
    endtime = team.real_end_time
    print(endtime)

    return render(request, 'prelevel_1.html', {'team':team,'endtime':endtime})

def level1(request):
    if request.method == 'POST':
        num = request.POST.get('num')
        real_num = "22223222"
        if num == real_num:
            group = Group.objects.get(name='Level 2')
            request.user.groups.add(group)
            return redirect('prelevel2')
        else:
            return redirect('level1')
    team = Team.objects.get(user=request.user)
    endtime = team.real_end_time
    print(endtime)

    return render(request, 'level_1.html', {'team':team,'endtime':endtime})

def prelevel2(request):
    if request.method == 'POST':
        return redirect('level2')
    if request.user.groups.filter(name='Level 2').exists():
        team = Team.objects.get(user=request.user)
        endtime = team.real_end_time
        print(endtime)
        return render(request, 'prelevel_2.html', {'team':team,'endtime':endtime})
    else:
        return redirect('prelevel1')
   

def level2(request):
    if request.method == 'POST':
        
            bl = request.POST.get('bool')
            print(bl)
            if bl == "yes":
                team = Team.objects.get(user=request.user)
                t = int(datetime.now().microsecond)
                team.time_taken = str(t - int(team.time_taken))
                team.save()
                return redirect('last')
            

    if request.user.groups.filter(name='Level 2').exists():
        team = Team.objects.get(user=request.user)
        endtime = team.real_end_time
        print(endtime)
        return render(request, 'level_2.html', {'team':team,'endtime':endtime})
    else:
        return redirect('prelevel1')
    
def last(request):
    team = Team.objects.get(user=request.user)
    endtime = team.real_end_time
    print(endtime)
    return render(request, 'last.html', {'team':team,'endtime':endtime})