from django.shortcuts import render
from msgboard.models import Recipe


def search(request):
    recipes = Recipe.objects.order_by('name')
    return render(request, 'recipeSearch/search.html', {'recipes': recipes})
