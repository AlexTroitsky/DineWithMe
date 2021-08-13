"""DineWithMe URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from msgboard import views as msgboard_views
from users import views as user_views
from django.contrib.auth import views as auth_views
from recipeSearch import views as recipeSearch_views
from createMeal import views as createMeal_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', user_views.register, name='register'),
    path('', msgboard_views.board, name='board'),
    # path('login/', msgboard_views.login, name='login'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path('profile/', user_views.profile, name='profile'),
    path('signup/', msgboard_views.SignUpView.as_view(), name='signup'),
    path('search/', recipeSearch_views.search, name='search'),
    path('create/', createMeal_views.create, name='create'),
]
