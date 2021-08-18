from django.contrib.auth.models import User
from rest_framework import serializers
from meals.models import Meal
from recipes.serializers import RecipeSerializer


class MealSerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)

    class Meta:
        model = Meal
        fields = ("id", "name", "health", "cuisine", "date_created", "mouths", "recipes")
