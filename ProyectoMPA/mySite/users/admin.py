from django.contrib import admin
from .models import Tipo_documento
from .models import Ciudades
from .models import Usuarios

# Register your models here.

admin.site.register(Tipo_documento)
admin.site.register(Ciudades)
admin.site.register(Usuarios)