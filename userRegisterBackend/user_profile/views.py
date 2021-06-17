from rest_framework.viewsets import ModelViewSet
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework import status
from rest_framework.response import Response


class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
