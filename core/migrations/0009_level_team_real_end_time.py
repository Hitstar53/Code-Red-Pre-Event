# Generated by Django 4.1.7 on 2023-03-05 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_team_time_taken'),
    ]

    operations = [
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AddField(
            model_name='team',
            name='real_end_time',
            field=models.IntegerField(default=0),
        ),
    ]