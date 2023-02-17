from django.urls import path
from . import views
from django.conf import settings



urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('inicio', views.inicio, name='inicio'),
    path('usuarios', views.usuarios, name='usuarios'),
    path('usuarios/crear', views.crearu, name='crearu'),
    path('usuarios/editar/<int:id>', views.editaru, name='editaru'),
    path('tipo_documento', views.tipo_documento, name='tipo_documento'),
    path('eliminaru/<int:id>', views.eliminaru, name='eliminaru'),
    path('ciudades', views.ciudades, name='ciudades'),
    path('ciudades/crear', views.crearc, name='crearc'),
    path('ciudades/editar/<int:id>', views.editarc, name='editarc'),
    path('eliminarc/<int:id>', views.eliminarc, name='eliminarc'),
    path('tipo_documento/crear', views.crear, name='crear'),
    path('tipo_documento/editar/<int:id>', views.editar, name='editar'),
    path('eliminar/<int:id>', views.eliminar, name='eliminar'),
 
  
]