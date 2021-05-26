
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from api.views import EmpresaViewSet

router = DefaultRouter()
router.register(r'empresas',EmpresaViewSet)

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
]
