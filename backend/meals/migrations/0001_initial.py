# Generated by Django 2.2.10 on 2021-08-14 18:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, verbose_name='Name')),
                ('health', models.CharField(blank=True, choices=[('', ''), ('meat', 'Meat'), ('gluten-free', 'Gluten-free'), ('pecatarian', 'Pecatarian'), ('vegan', 'Vegan'), ('vegetarian', 'Vegetarian'), ('kosher', 'Kosher')], max_length=20)),
                ('cuisine', models.CharField(blank=True, choices=[('', ''), ('american', 'American'), ('asian', 'Asian'), ('british', 'British'), ('chinese', 'Chinese'), ('french', 'French'), ('italian', 'Italian'), ('mediterranean', 'Mediterranean'), ('mexican', 'Mexican')], max_length=20)),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='Date Created')),
                ('mouths', models.IntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Meal',
                'verbose_name_plural': 'Meals',
            },
        ),
    ]
