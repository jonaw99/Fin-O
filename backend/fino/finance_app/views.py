from django.shortcuts import render

from rest_framework import permissions, viewsets

from .serializers import FinanceItemSerializer
from .models import FinanceItem

# Create your views here.
class FinanceItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows finance items to be viewed or edited.
    """
    queryset = FinanceItem.objects.all()
    serializer_class = FinanceItemSerializer
    permission_classes = [permissions.IsAuthenticated]