# Generated by Django 5.1.1 on 2024-09-27 14:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Menu",
            new_name="MenuItem",
        ),
    ]
