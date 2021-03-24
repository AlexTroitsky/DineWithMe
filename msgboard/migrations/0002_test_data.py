from django.db import migrations, transaction


class Migration(migrations.Migration):
    dependencies = [
        ('msgboard', '0001_initial'),
    ]

    def generate_data(apps, schema_editor):
        from django.contrib.auth.models import User
        test_data = [
            ('User1', '123'),
            ('User2', '456'),
        ]
        with transaction.atomic():
            for username, password in test_data:
                User(username=username, password=password).save()
    operations = [
        migrations.RunPython(generate_data),
    ]
