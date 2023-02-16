from sqlalchemy import Column,String , Integer, ForeignKey, DateTime
from models.db import Base, engine

class Usuario(Base):
    __tablename__ = 'usuarios'
    id = Column(Integer,autoincrement=True , primary_key=True)
    nombre =  Column(String(50))
    apellido = Column(String(50))
    idTipoDocumento = Column(Integer, ForeignKey('tipoDocumento.id'))
    documento = Column(Integer)
    lugarResidencia = Column(Integer, ForeignKey('ciudad.id'))
    fechaNacimiento = Column(DateTime(timezone=True))
    email = Column(String(50))
    telefono = Column(String(20))
    Usuario = Column(String(30))
    contraseña = Column(String(30))    

class tipoDocumento(Base):
    __tablename__ = 'tipoDocumento'
    id = Column(Integer,autoincrement=True , primary_key=True)
    nombre =  Column(String(50))
    descripcion = Column(String(50))
    

class ciudad(Base):
    __tablename__ = 'ciudad'
    id = Column(Integer,autoincrement=True , primary_key=True)
    nombre =  Column(String(50))


    

Base.metadata.create_all(engine)    
