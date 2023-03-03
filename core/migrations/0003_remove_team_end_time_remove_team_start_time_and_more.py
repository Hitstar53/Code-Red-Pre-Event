# Generated by Django 4.1.7 on 2023-02-25 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_remove_team_time_taken_team_end_time_team_start_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='end_time',
        ),
        migrations.RemoveField(
            model_name='team',
            name='start_time',
        ),
        migrations.AddField(
            model_name='team',
            name='time_taken',
            field=models.IntegerField(default=0),
        ),
    ]
