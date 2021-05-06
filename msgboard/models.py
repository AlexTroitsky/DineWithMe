from enum import Enum
from django.db import models


class Recipe(models.Model):
    DIFFICULTY = (
        ('E', 'Easy'),
        ('C', 'Challenging'),
        ('T', 'Tough'),
    )
    PREPARATION_METHOD = (
        ('BA', 'Baking'),
        ('RO', 'Roasting'),
        ('CO', 'Cooking'),
        ('ST', 'Steaming'),
        ('FR', 'Frying'),
        ('PI', 'Pickling'),
        ('CU', 'Cuts'),
    )
    name = models.CharField(max_length=20)
    description = models.TextField()
    preparationTime = models.IntegerField()
    totalTime = models.IntegerField()
    difficulty = models.CharField(max_length=1, choices=DIFFICULTY)
    numberOfIngredients = models.IntegerField()
    # pageImg = models.ImageField()
    ingredients = []
    preparationMethod = models.CharField(max_length=2, choices=PREPARATION_METHOD)
    notes = models.TextField()
    url = models.TextField()
    numberOfServings = models.IntegerField()
    # profileImg = models.ImageField()

class FoodyData(models.Model):
    recipes = []

class Ingredient(models.Model):
    name = models.CharField(max_length=20)
    quantity = models.IntegerField()
    canBeReplaced = models.BooleanField
    Replacement = models.TextField()
