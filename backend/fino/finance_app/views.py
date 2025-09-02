from django.shortcuts import render

from rest_framework import viewsets

from .serializers import FinanceItemSerializer, FinanceItemCategorySerializer
from .models import FinanceItem, FinanceItemCategory

class FinanceItemCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows finance item categories to be viewed or edited.
    """
    queryset = FinanceItemCategory.objects.all()
    serializer_class = FinanceItemCategorySerializer

# Create your views here.
class FinanceItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows finance items to be viewed or edited.
    """
    queryset = FinanceItem.objects.all()
    serializer_class = FinanceItemSerializer