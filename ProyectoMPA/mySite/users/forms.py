from django import forms 
from .models import Tipo_documento
from .models import Ciudades
from .models import Usuarios


class Tipo_documentoForm(forms.ModelForm):
    class Meta:
        model = Tipo_documento
        fields = '__all__'
        
class CiudadesForm(forms.ModelForm):
    class Meta:
        model = Ciudades
        fields = '__all__'
        
class UsuariosForm(forms.ModelForm):
    class Meta:
        model = Usuarios
        fields = '__all__'
