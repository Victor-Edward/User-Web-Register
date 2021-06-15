from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, verbose_name="user", on_delete=models.CASCADE)
    email = models.CharField("email", max_length=256)
    country = models.CharField("email", max_length=128)

    created_at = models.DateTimeField("created_at", auto_now_add=True)
