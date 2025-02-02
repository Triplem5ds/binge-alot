from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


def create(engine):
    Base.metadata.create_all(engine)


class BingeType(Base):
    __tablename__ = "binge_type"
    id_binge_type = Column(Integer, primary_key=True)
    binge_type_code = Column(String)
    name = Column(String)

    def __repr__(self):
        return f"<BingeType(id_binge_type='{self.id_binge_type}', binge_type_code='{self.binge_type_code}', name='{self.name}')>"


class Binge(Base):
    __tablename__ = "binge"
    id_binge = Column(Integer, primary_key=True)
    id_binge_type = Column(Integer)
    name = Column(String)
    binge_code = Column(String)
    id_parent_binge = Column(Integer, nullable=True)
    start_time = Column(DateTime)
    end_time = Column(DateTime)
    status = Column(String)
