from django.db import models


class User(models.Model):
    userName = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
