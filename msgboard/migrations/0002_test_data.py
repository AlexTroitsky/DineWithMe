from django.db import migrations, transaction


class Migration(migrations.Migration):
    dependencies = [
        ('msgboard', '0001_initial'),
    ]

    def generate_data(apps, schema_editor):
        from msgboard.models import User
        test_data = [
            ('User1', '123'),
            ('User2', '456'),
        ]
        with transaction.atomic():
            for userName, password in test_data:
                User(userName=userName, password=password).save()
    operations = [
        migrations.RunPython(generate_data),
    ]
