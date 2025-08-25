from .models import FinanceItem
from rest_framework import serializers

class FinanceItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinanceItem
        fields = '__all__'