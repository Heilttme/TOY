# Generated by Django 4.1.5 on 2023-07-17 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_remove_useraccount_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='useraccount',
            options={},
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='date_joined',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='last_name',
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='username',
            field=models.CharField(max_length=255),
        ),
    ]