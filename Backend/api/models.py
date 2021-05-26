from django.db import models

# Create your models here.
class Empresa(models.Model):
    nombre = models.CharField(max_length=80)
    direccion = models.CharField(max_length=80)
    NIT = models.CharField(max_length=20)
    telefono = models.BigIntegerField()
    
    def __str__(self):
        return self.nombre