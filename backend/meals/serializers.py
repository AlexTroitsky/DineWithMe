from django.contrib.auth.models import User
from rest_framework import serializers
from meals.models import Meal
from recipes.serializers import RecipeSerializer
from users.serializers import UserSerializer


class MealSerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)
    # members = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Meal
        fields = ("id", "members", "name", "health", "cuisine", "date_created", "mouths", "recipes")

