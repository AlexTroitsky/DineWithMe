# Generated by Django 2.2.10 on 2021-08-15 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0004_remove_recipe_meals'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='id',
            field=models.UUIDField(primary_key=True, serialize=False),
        ),
    ]