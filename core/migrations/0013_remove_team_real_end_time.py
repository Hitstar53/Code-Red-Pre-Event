# Generated by Django 4.1.7 on 2023-03-19 09:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_alter_team_real_end_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='real_end_time',
        ),
    ]
