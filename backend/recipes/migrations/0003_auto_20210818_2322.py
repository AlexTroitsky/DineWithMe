# Generated by Django 2.2.10 on 2021-08-18 23:22

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_auto_20210818_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='id',
            field=models.CharField(default=uuid.uuid4, max_length=255, primary_key=True, serialize=False),
        ),
    ]