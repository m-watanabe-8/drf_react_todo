from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt import views as jwt_views
from .serializers import MyTokenObtainPairSerializer

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ObtainTokenPairWithColorView(jwt_views.TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

