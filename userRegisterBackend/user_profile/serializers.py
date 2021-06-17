from rest_framework import serializers
from .models import Profile, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password", "email"]
        extra_kwargs = {
            "password": {"write_only": True},
        }


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = "__all__"
        extra_kwargs = {
            "created_at": {"read_only": True},
        }

    def create(self, validated_data: dict):
        user_object = User.objects.create(**validated_data.get("user"))
        del validated_data["user"]
        for key, value in validated_data.items():
            try:
                setattr(user_object.profile, key, value)
            except:
                pass
        user_object.profile.save()
        return user_object.profile
