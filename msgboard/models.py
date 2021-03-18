from django.db import models
from django.utils import timezone


class User(models.Model):
    userName = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
