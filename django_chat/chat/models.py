from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from django.conf import settings
# Create your models here.

class Room(models.Model):
    name = models.CharField(max_length=1000)

class Message(models.Model):
    value = models.CharField(max_length=1000000)
    date = models.DateTimeField(default=datetime.now, blank=True)
    user = models.CharField(max_length=1000)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    room = models.CharField(max_length=1000000)

# Need to figure out how to show username in chats.