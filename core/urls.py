from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('level1/',views.level1, name='level1'),
    path('level2/',views.level2, name='level2'),
]