# Generated by Django 4.1.5 on 2023-08-01 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_remove_item_releasedate_item_day_item_hour_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='day',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='hour',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='month',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='year',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]