from django.http.response import HttpResponse
from rest_framework import viewsets
from .models import Empresa
from .serializers import EmpresaSerializer

# Create your views here.
class EmpresaViewSet(viewsets.ModelViewSet):
    serializer_class = EmpresaSerializer
    queryset = Empresa.objects.all()
