from rest_framework import serializers

from meals.models import Meal
from recipes.models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'label', 'meals', 'uri', 'image', 'url',
                  'yield', 'calories', 'totalTime', 'cuisineType',
                  'mealType',  'dishType')
        extra_kwargs = {'meals': {'required': False},
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
