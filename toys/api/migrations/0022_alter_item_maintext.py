# Generated by Django 4.1.5 on 2023-07-31 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_rename_main_text_item_maintext'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='mainText',
            field=models.CharField(blank=True, default='', max_length=4095, null=True),
        ),
    ]
