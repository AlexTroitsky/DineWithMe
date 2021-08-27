from rest_framework.permissions import BasePermission

class UserIsRecipeOwner(BasePermission):

    def has_object_permission(self, request, view, recipe):
        return request.user.id == recipe.user.id