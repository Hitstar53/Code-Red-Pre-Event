from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('prelevel0/',views.prelevel0, name='prelevel0'),
    path('prelevel1/',views.prelevel1, name='prelevel1'),
    path('level1/',views.level1, name='level1'),
    path('prelevel2/',views.prelevel2, name='prelevel2'),
    path('level2/',views.level2, name='level2'),
    path('last/',views.last, name='last'),
]