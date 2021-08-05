from django.forms import ModelForm
from django import forms
from createMeal.models import Meal



class MealCreationForm(ModelForm):
    class Meta:
        model = Meal
        fields = [ 'name', 'participantsNumber', 'mealKind', 'mealStyle', 'participants', 'owner']
        # widgets = { 'mealKind' : forms.CheckboxSelectMultiple()}
        # choises
