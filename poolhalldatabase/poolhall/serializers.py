from rest_framework import serializers
from .models import User, Event, Table


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'firstName', 'lastName', 'phone']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'user', 'name', 'description', 'time']


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ['id', 'user', 'time']
