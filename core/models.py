from django.db import models
from django.contrib.auth import get_user_model
import uuid
from datetime import datetime
# Create your models here.
User = get_user_model()

class Team(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    team_name = models.CharField(max_length=100, default='team')
    time_taken = models.IntegerField(default=0)

    def __str__(self):
        return self.team_name | self.time_taken
    

