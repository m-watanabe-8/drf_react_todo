from rest_framework import viewsets
from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt import views as jwt_views
from .serializers import MyTokenObtainPairSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# ユーザー作成
class CreateUserViewSet(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

# トークン発行
class ObtainTokenPairWithColorView(jwt_views.TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer