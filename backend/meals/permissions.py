from rest_framework.permissions import BasePermission


class UserIsOwner(BasePermission):

    def has_object_permission(self, request, view, meal):
        return request.user.id == meal.user.id
