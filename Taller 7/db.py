from sqlalchemy import create_engine, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

Base = declarative_base()

engine = create_engine("postgresql://postgres:admin@localhost:5432/postgres")

Session =  sessionmaker(bind=engine)
