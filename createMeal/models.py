from django.db import models
from django.contrib.auth.models import User


class Meal(models.Model):
    MEAL_STYLE_CHOICES = [
        ('italian', 'Italian'),
        ('asian', 'Asian'),
        ('mediterranean', 'Mediterranean'),
        ('french', 'French'),
        ('fusion', 'Fusion'),
        ('mexican', 'Mexican'),
        ('indian', 'Indian'),
        ('breakfast', 'Breakfast'),
        ('sweets', 'Sweets'),
     ]
    MEAL_KIND_CHOICES = [
        ('meat', 'Meat'),
        ('daily', 'Dairy'),
        ('fish', 'Fish'),
        ('vegan', 'Vegan'),
        ('vegetarian', 'Vegetarian'),
        ('kosher', 'Kosher'),
    ]

    name = models.CharField(max_length=20)
    participantsNumber = models.IntegerField()
    mealKind = models.CharField(max_length=20, choices=MEAL_KIND_CHOICES)
    mealStyle = models.CharField(max_length=20, choices=MEAL_STYLE_CHOICES)
    participants = models.ManyToManyField(User)
    owner = models.CharField(max_length=20)
    # models.ForeignKey(User, on_delete=models.CASCADE) # connects a user to a meal


    def __str__(self):
            return self.name
