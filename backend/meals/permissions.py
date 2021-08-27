from rest_framework.permissions import BasePermission
from meals.models import Meal


class UserIsMealOwner(BasePermission):

    def has_object_permission(self, request, view, meal):
        return Meal.objects.get(id=meal.id).members.filter(id=request.user.id).exists()

