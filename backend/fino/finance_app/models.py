from django.db import models

# Create your models here.
class FinanceItemType(models.Model):
    type = models.CharField(max_length=16)

class FinanceItemCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

class FinanceItem(models.Model):
    title = models.CharField(max_length=100)
    type = models.ForeignKey(FinanceItemType, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    category = models.ForeignKey(FinanceItemCategory, on_delete=models.SET_NULL, null=True)
    notes = models.TextField(null=True, blank=True)