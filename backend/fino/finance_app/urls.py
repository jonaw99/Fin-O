from django.urls import include, path

from rest_framework import routers

from .views import FinanceItemViewSet

api_router = routers.DefaultRouter()
api_router.register(r'finance-items', FinanceItemViewSet)

urlpatterns = [
    path('', include(api_router.urls)),
    
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]