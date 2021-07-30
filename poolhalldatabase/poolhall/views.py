from django.shortcuts import render
from .models import User, Event, Table, AllTables
from .serializers import UserSerializer, EventSerializer, TableSerializer, AllTableSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

# Create your views here.
class UserList(APIView):

    def get(self, request):
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventList(APIView):
    def get(self, request):
        event = Event.objects.all()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class TableList(APIView):
    def get(self, request):
        table = Table.objects.all()
        serializer = TableSerializer(table, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class AllTablesList(APIView):
    def get(self, request):
        tables = AllTables.objects.all()
        serializer = AllTableSerializer(tables, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AllTableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class TableDetail(APIView):
    def get_table(self, pk,):
        try:
            return AllTables.objects.get(pk=pk)
        except AllTables.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        table = self.get_table(pk)
        serializer = AllTableSerializer(table)
        return Response(serializer.data)

    def delete(self, request, pk):
        table = self.get_table(pk)
        table.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

