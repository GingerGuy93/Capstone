from django.db import models


# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    phone = models.CharField(max_length=11)


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    time = models.DateTimeField(default=None)


class Table(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time = models.DateTimeField(default=None)

