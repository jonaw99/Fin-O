from django.urls import include, path

from rest_framework import routers

from .views import FinanceItemViewSet, FinanceItemCategoryViewSet

api_router = routers.DefaultRouter()
api_router.register(r'finance-items', FinanceItemViewSet)
api_router.register(r'finance-item-categories', FinanceItemCategoryViewSet)

urlpatterns = [
    path('', include(api_router.urls)),
    
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]