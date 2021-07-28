from django.urls import path
from .import views

urlpatterns = [
    path("", views.home, name='home'),
    path("chatting", views.chatting, name='chatting'),
    path('check', views.check, name='check'),
    path("<str:room>/", views.room, name='room'),
    path('send', views.send, name='send'),
    path('getMessages/<str:room>/', views.getMessages, name='getMessages'),
]