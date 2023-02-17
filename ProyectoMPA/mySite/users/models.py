from django.db import models

# Create your models here.
class Tipo_documento(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    descripcion = models.CharField(max_length=100,  verbose_name="Descripción")
    
    def __str__(self):
        fila = "Nombre:" + self.nombre + " " + "Descripción: " + self.descripcion
        return fila
    
 ###   
class Ciudades(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    descripcion = models.CharField(max_length=100,  verbose_name="Descripción")
    
    def __str__(self):
        fila = "Nombre:" + self.nombre + " " + "Descripción: " + self.descripcion
        return fila


class Usuarios(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    idtipodocumento = models.ForeignKey(Tipo_documento, on_delete=models.CASCADE)
    documento = models.IntegerField()
    lugarresidencia = models.ForeignKey(Ciudades, on_delete=models.CASCADE) 
    fechanacimiento = models.DateTimeField()
    email = models.EmailField(max_length=254)
    telefono = models.IntegerField()
    usuario = models.CharField(max_length=100)
    password = models.CharField(max_length=100)