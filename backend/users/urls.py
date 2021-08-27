from django.urls import path
from users.views import UserRegistrationAPIView, UserLoginAPIView, UserTokenAPIView, \
    CurrentUserView, GroupViewSet, UserViewSet

app_name = 'users'

urlpatterns = [
    path('details/', CurrentUserView.as_view(), name="users"),
    path('users/', UserViewSet.as_view()),
    path('register/', UserRegistrationAPIView.as_view(), name="register"),
    path('login/', UserLoginAPIView.as_view(), name="login"),
    path('tokens/<key>/', UserTokenAPIView.as_view(), name="token"),
    path(r'groups/', GroupViewSet.as_view())
]
