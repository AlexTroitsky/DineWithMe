from rest_framework import serializers

from meals.models import Meal
from recipes.models import Recipe
from users.serializers import UserSerializer


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'user', 'maker', 'label', 'meals', 'uri', 'image', 'url',
                  'yield', 'calories', 'totalTime', 'cuisineType',
                  'mealType',  'dishType')
        extra_kwargs = {'meals': {'required': False},
                        'user': {'required': False},
                        'uri': {'required': False},
                        'image': {'required': False},
                        'url': {'required': False},
                        'yield': {'required': False},
                        'calories': {'required': False},
                        'totalTime': {'required': False},
                        'cuisineType': {'required': False},
                        'mealType': {'required': False},
                        'label': {'required': False},
                        'dishType': {'required': False},
                        }
