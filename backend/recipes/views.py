from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated

from meals.permissions import UserIsMealOwner
from recipes.models import Recipe
from recipes.permissions import UserIsRecipeOwner
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
    permission_classes = (IsAuthenticated, ) # UserIsRecipeOwner)

