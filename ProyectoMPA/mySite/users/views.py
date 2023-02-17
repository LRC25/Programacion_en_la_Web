from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Tipo_documento
from .models import Ciudades
from .models import Usuarios
from .forms import Tipo_documentoForm
from .forms import CiudadesForm
from .forms import UsuariosForm
# Create your views here.

def inicio(request):
    return render(request, 'pages/inicio.html')

def usuarios(request):
     usuarios = Usuarios.objects.all()
     return render(request, 'usuarios/index.html', {'usuarios': usuarios} )

def crearu(request):
     formulario = UsuariosForm(request.POST or None, request.FILES or None)
     if formulario.is_valid():
          formulario.save()
          return redirect('usuarios')
     return render(request, 'usuarios/crear.html', {'formulario': formulario}) #Crear tipo de documento

def editaru(request,id):
     usuarios = Usuarios.objects.get(id=id) 
     formulario = UsuariosForm(request.POST or None, instance=usuarios)
     if formulario.is_valid() and request.POST:
          formulario.save()
          return redirect('usuarios')
    
     return render(request, 'usuarios/editar.html', {'formulario': formulario}) #Editar tipo de documento


def eliminaru(request, id):
     usuario = Usuarios.objects.get(id=id)
     usuario.delete()
     return redirect('usuarios')    

 
def tipo_documento(request):
     tipo_documento = Tipo_documento.objects.all()
     return render(request, 'tipo_documento/index.html', {'tipo_documento':tipo_documento})

def ciudades(request):
     ciudades = Ciudades.objects.all()
     return render(request, 'ciudades/index.html', {'ciudades':ciudades})

def crearc(request):
     formulario = CiudadesForm(request.POST or None, request.FILES or None)
     if formulario.is_valid():
          formulario.save()
          return redirect('ciudades')
     return render(request, 'ciudades/crear.html', {'formulario': formulario}) #Crear tipo de documento

def editarc(request,id):
     ciudad = Ciudades.objects.get(id=id) 
     formulario = CiudadesForm(request.POST or None, instance=ciudad)
     if formulario.is_valid() and request.POST:
          formulario.save()
          return redirect('ciudades')
     return render(request, 'ciudades/editar.html', {'formulario': formulario}) #Editar tipo de documento

def eliminarc(request, id):
     ciudad = Ciudades.objects.get(id=id)
     ciudad.delete()
     return redirect('ciudades')    



def crear(request):
     formulario = Tipo_documentoForm(request.POST or None, request.FILES or None)
     if formulario.is_valid():
          formulario.save()
          return redirect('tipo_documento')
     return render(request, 'tipo_documento/crear.html', {'formulario': formulario}) #Crear tipo de documento

def editar(request,id):
     tipo_documento = Tipo_documento.objects.get(id=id) 
     formulario = Tipo_documentoForm(request.POST or None, instance=tipo_documento)
     if formulario.is_valid() and request.POST:
          formulario.save()
          return redirect('tipo_documento')
     return render(request, 'tipo_documento/editar.html', {'formulario': formulario}) #Editar tipo de documento

def eliminar(request, id):
     tipo_documentop = Tipo_documento.objects.get(id=id)
     tipo_documentop.delete()
     return redirect('tipo_documento')    



 #Eliminar tipo de documento
    