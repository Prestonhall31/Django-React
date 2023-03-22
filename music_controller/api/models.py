from django.db import models
import string
import random


# Create a random 8 digit code to enter the room
def generate_unique_code():
    length = 6

    while True:
        code= ''.join(random.choices(string.ascii_uppercase, k=length))
        # Verifies that the code generated is unique
        if Room.objects.filter(code=code).count() == 0:
            break
    
    return code

# Create your models here.
# Creating a class Room since the app that I am building is a group of people in a room listening to music
class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

