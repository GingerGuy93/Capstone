from django.urls import path
from . import views


urlpatterns = [
    path('events/', views.EventList.as_view()),
    path('users/', views.UserList.as_view()),
    path('tables/', views.TableList.as_view()),
    path('allTables/', views.AllTablesList.as_view()),
]