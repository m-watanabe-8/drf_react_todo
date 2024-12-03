from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'account', UserViewSet, basename="account")

urlpatterns = [
    path('', include(router.urls)),
    # path('login/', LoginView.as_view(), name='user-login')
]