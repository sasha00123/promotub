# Generated by Django 2.0.5 on 2018-05-28 21:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('main', '0006_auto_20180528_2123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
