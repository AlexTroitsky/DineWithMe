from django.http import HttpResponse
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from meals.models import Meal
from meals.permissions import UserIsMealOwner
from meals.serializers import MealSerializer


class MealCreateAPIView(ListCreateAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        return Meal.objects.filter(members__in=[self.request.user])

    def perform_create(self, serializer):
        members = [self.request.user]
        serializer.save(members=members)


class MealDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = MealSerializer
    queryset = Meal.objects.all()
    permission_classes = (IsAuthenticated, UserIsMealOwner)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)