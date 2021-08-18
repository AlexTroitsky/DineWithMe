from django.urls import path

from meals.views import MealCreateAPIView, MealDetailAPIView

app_name = 'meals'

urlpatterns = [
    path('', MealCreateAPIView.as_view(), name="list"),
    path('<int:pk>', MealDetailAPIView.as_view(), name="detail"),
]
