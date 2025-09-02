from .models import FinanceItem, FinanceItemCategory
from rest_framework import serializers

class FinanceItemSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        slug_field='name',
        queryset=FinanceItemCategory.objects.all()
    )
    
    class Meta:
        model = FinanceItem
        fields = '__all__'