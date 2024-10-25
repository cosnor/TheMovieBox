from sqlalchemy import create_engine, MetaData, text
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from config.confi import DATABASE_URL


#connect a database Microsoft SQL Server
engine = create_engine(DATABASE_URL	, echo=True)

Session = sessionmaker(bind=engine)

conn = engine.connect()

