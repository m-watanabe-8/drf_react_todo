from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import (UserViewSet,CreateUserViewSet)

router = DefaultRouter()
router.register(r'account', UserViewSet, basename="account")

urlpatterns = [
    path('', include(router.urls)),
    path('user/create/', CreateUserViewSet.as_view(), name="user-create"),
]