from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "username",
            "email",
            "password",
            "país",
            "estado",
            "município",
            "cep",
            "rua",
            "número",
            "complemento",
            "cpf",
            "pis",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "created_at": {"read_only": True},
        }

    def create(self, validated_data):
        user = Profile(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user
