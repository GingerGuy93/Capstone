# Generated by Django 3.1.8 on 2021-07-23 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poolhall', '0002_auto_20210723_1824'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.IntegerField(max_length=10000000000),
        ),
    ]
