from django.shortcuts import render
from .forms import MealCreationForm


def create(request):
    form = MealCreationForm()

    if request.method == 'POST':
        form = MealCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, f'{"Successfully Created a Meal"}')
            return redirect('profile')

    return render(request, 'createMeal/createNewMeal.html', {'form': form})
