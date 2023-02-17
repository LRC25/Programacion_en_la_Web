# Generated by Django 4.1.5 on 2023-02-17 11:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_ciudades'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=100)),
                ('apellidos', models.CharField(max_length=100)),
                ('documento', models.IntegerField()),
                ('fechanacimiento', models.DateTimeField()),
                ('email', models.EmailField(max_length=254)),
                ('telefono', models.IntegerField()),
                ('usuario', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('idtipodocumento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.tipo_documento')),
                ('lugarresidencia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.ciudades')),
            ],
        ),
    ]
