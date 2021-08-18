from django.urls import path
from users.views import UserRegistrationAPIView, UserLoginAPIView, UserTokenAPIView, \
    CurrentUserView

app_name = 'users'

urlpatterns = [
    path('details/', CurrentUserView.as_view(), name="users"),
    path('register/', UserRegistrationAPIView.as_view(), name="register"),
    path('login/', UserLoginAPIView.as_view(), name="login"),
    path('tokens/<key>/', UserTokenAPIView.as_view(), name="token"),
]
