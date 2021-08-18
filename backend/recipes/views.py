from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from meals.models import Meal
from meals.permissions import UserIsOwner
from meals.serializers import MealSerializer
from recipes.models import Recipe
from recipes.serializers import RecipeSerializer


class RecipeCreateAPIView(ListCreateAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        return Recipe.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RecipeDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()
    permission_classes = (IsAuthenticated, UserIsOwner)



