from django.contrib import admin
from django.urls import path,include
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todo.urls')),
    path('api-v1/', include('account.urls')),
    path('api-token-auth/', views.obtain_auth_token),
]
