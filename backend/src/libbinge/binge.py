from engines import SessionLocal
from libbinge.models.binge import BingeTypeCreate
from libbinge.models import tables
from sqlalchemy.orm import Session
from fastapi import  Depends, HTTPException
from sqlalchemy import text



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
        
def add_binge_type(binge_type: BingeTypeCreate, db: Session = Depends(get_db)):
    existing = db.query(tables.BingeType).filter_by(binge_type_code=binge_type.binge_type_code).first()
    if existing:
        raise HTTPException(status_code=400, detail="Binge type code already exists")   

    new_binge_type = tables.BingeType(
        binge_type_code=binge_type.binge_type_code,
        name=binge_type.name
    )

    db.add(new_binge_type)
    db.commit() 
    db.refresh(new_binge_type)
    
    return {"message": "Binge type added successfully!", "binge_type": new_binge_type}


def delete_binge_type_table(db: Session = Depends(get_db)):
    try:
        db.execute(text("DELETE FROM binge_type;"))
        db.commit()
        return {"message": "All records deleted from binge_type table!"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error deleting records: {str(e)}")