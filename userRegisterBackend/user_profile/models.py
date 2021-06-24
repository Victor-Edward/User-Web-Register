from django.db import models
from django.contrib.auth.models import AbstractUser


class Profile(AbstractUser):
    país = models.CharField("País", max_length=128)
    estado = models.CharField("Estado", max_length=128)
    município = models.CharField("Município", max_length=128)
    cep = models.CharField("CEP", max_length=32)
    rua = models.CharField("Rua", max_length=128)
    número = models.CharField("Número", max_length=32)
    complemento = models.CharField("Complemento", max_length=256)
    cpf = models.CharField("CPF", max_length=32)
    pis = models.CharField("PIS", max_length=64)

    created_at = models.DateTimeField("created_at", auto_now_add=True)

    def __str__(self):
        return self.username
