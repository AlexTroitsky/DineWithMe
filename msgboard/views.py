from django.shortcuts import render, redirect
from .forms import LoginForm, CustomUserCreationForm
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth.models import User
from bootstrap_modal_forms.mixins import PassRequestMixin


def board(request):
    return render(request, 'msgboard/board.html')


def login(request):
    users = User.objects.order_by('username')
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

class SignUpView(PassRequestMixin, SuccessMessageMixin, generic.CreateView):
    form_class = CustomUserCreationForm
    template_name = 'signup.html'
    success_message = 'Success: Sign up succeeded. You can now Log in.'
    success_url = reverse_lazy('index')
