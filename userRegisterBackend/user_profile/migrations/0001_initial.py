# Generated by Django 3.2.2 on 2021-06-15 23:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('país', models.CharField(max_length=128, verbose_name='País')),
                ('estado', models.CharField(max_length=128, verbose_name='Estado')),
                ('município', models.CharField(max_length=128, verbose_name='Município')),
                ('cep', models.CharField(max_length=32, verbose_name='CEP')),
                ('rua', models.CharField(max_length=128, verbose_name='Rua')),
                ('número', models.CharField(max_length=32, verbose_name='Número')),
                ('complemento', models.CharField(max_length=256, verbose_name='Complemento')),
                ('cpf', models.CharField(max_length=32, verbose_name='CPF')),
                ('pis', models.CharField(max_length=64, verbose_name='PIS')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
    ]