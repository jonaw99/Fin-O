from .models import FinanceItem, FinanceItemCategory
from rest_framework import serializers

class FinanceItemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FinanceItemCategory
        fields = '__all__'

class FinanceItemSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        slug_field='name',
        queryset=FinanceItemCategory.objects.all(),
        allow_null=True,
    )
    
    class Meta:
        model = FinanceItem
        fields = '__all__'