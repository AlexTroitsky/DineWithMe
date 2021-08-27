from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User, Group

from django.db import models
from django.utils.encoding import smart_text as smart_unicode
from django.utils.translation import ugettext_lazy as _

from recipes.models import Recipe


class Meal(models.Model):

    MEAL_STYLE_CHOICES = [
        ('', ''),
        ('american', 'American'),
        ('asian', 'Asian'),
        ('british', 'British'),
        ('chinese', 'Chinese'),
        ('french', 'French'),
        ('italian', 'Italian'),
        ('mediterranean', 'Mediterranean'),
        ('mexican', 'Mexican'),
    ]
    MEAL_KIND_CHOICES = [
        ('', ''),
        ('meat', 'Meat'),
        ('gluten-free', 'Gluten-free'),
        ('pecatarian', 'Pecatarian'),
        ('vegan', 'Vegan'),
        ('vegetarian', 'Vegetarian'),
        ('kosher', 'Kosher'),
    ]

    members = models.ManyToManyField(User, blank=True, related_name='user_meals')
    name = models.CharField(_("Name"), blank=True, max_length=255)
    health = models.CharField(max_length=20, blank=True, choices=MEAL_KIND_CHOICES)
    cuisine = models.CharField(max_length=20, blank=True, choices=MEAL_STYLE_CHOICES)
    date_created = models.DateTimeField(_("Date Created"), auto_now_add=True)
    recipes = models.ManyToManyField(Recipe, related_name='meals', blank=True, verbose_name="Recipes")
    mouths = models.IntegerField(default=0)

    class Meta:
        verbose_name = _("Meal")
        verbose_name_plural = _("Meals")

    def __unicode__(self):
        return smart_unicode(self.name)

    def __str__(self):
        return self.name
