from django.contrib.auth import get_user_model
from django.db import models
import uuid
# Create your models here.


class Recipe(models.Model):
    id = models.CharField(primary_key=True,  default=uuid.uuid4, editable=True, max_length=255)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    # user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    maker = models.CharField(max_length=400, null=True)
    uri = models.URLField()
    label = models.CharField(name="label", max_length=400)
    image = models.URLField()
    url = models.URLField()
    yields = models.IntegerField(name="yield")
    calories = models.FloatField()
    totalTime = models.IntegerField()
    cuisineType = models.CharField(max_length=400)
    mealType = models.CharField(max_length=400)
    dishType = models.CharField(max_length=400)

    def __str__(self):
        return self.label