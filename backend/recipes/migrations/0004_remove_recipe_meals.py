# Generated by Django 2.2.10 on 2021-08-14 19:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_recipe_meals'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='meals',
        ),
    ]
