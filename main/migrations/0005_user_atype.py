# Generated by Django 2.0.5 on 2018-05-27 17:31

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('main', '0004_auto_20180527_1719'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='atype',
            field=models.TextField(choices=[('V', 'Vendor'), ('C', 'Consumer')], default='C'),
            preserve_default=False,
        ),
    ]