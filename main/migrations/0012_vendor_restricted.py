# Generated by Django 2.0.5 on 2018-06-10 19:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('main', '0011_organization_reviewed'),
    ]

    operations = [
        migrations.AddField(
            model_name='vendor',
            name='restricted',
            field=models.BooleanField(default=False),
        ),
    ]
