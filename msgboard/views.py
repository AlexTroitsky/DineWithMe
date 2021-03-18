from django.shortcuts import render, redirect
from .models import User
from .forms import LoginForm


def board(request):
    return render(request, 'msgboard/board.html')

def login(request):
    users = User.objects.order_by('userName')
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('board')
    else:
        form = LoginForm()
    return render(request, 'login.html', {
        'users': users,
        'form': form,
    })
