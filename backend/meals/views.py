from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from meals.models import Meal
from meals.permissions import UserIsOwner
from meals.serializers import MealSerializer


class MealCreateAPIView(ListCreateAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        return Meal.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MealDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = MealSerializer
    queryset = Meal.objects.all()
    permission_classes = (IsAuthenticated, UserIsOwner)


