from fastapi import Depends, APIRouter, HTTPException
from sqlalchemy.orm import Session


from libbinge import binge
from libbinge.models.binge import BingeTypeCreate, BingeTypeResponse, AddBingeTypeResponse
from libbinge.models import tables



router = APIRouter()


@router.get("/")
def home():
    return {"message": "APIRouter with SQLAlchemy!"}

@router.get("/create-tables")
def create_tables():
    from appbinge import engine
    tables.create(engine=engine)
    return {"message": "Tables created successfully!"}


@router.get("/binge-types", response_model=list[BingeTypeResponse])
def get_binge_types(db: Session = Depends(binge.get_db)):
    binge_types = db.query(tables.BingeType).all()
    return binge_types

@router.delete("/binge-types/delete-all")
def delete_all_binge_types(db: Session = Depends(binge.get_db)):
    return binge.delete_binge_type_table(db)


@router.post("/binge-types/add", response_model = AddBingeTypeResponse)
def add_binge_type(binge_type: BingeTypeCreate, db: Session = Depends(binge.get_db)):
    return binge.add_binge_type(binge_type, db)





