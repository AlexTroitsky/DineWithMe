from django.urls import path

from recipes.views import RecipeCreateAPIView, RecipeDetailAPIView

app_name = 'meals'

urlpatterns = [
    path('', RecipeCreateAPIView.as_view(), name="list"),
    path('<uuid:pk>', RecipeDetailAPIView.as_view(), name="detail"),
]
