from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def fn():
    return "cool 3"


@router.get("/create-tables")
def create_tables():
    from libbinge.models import tables
    from appbinge import engine

    tables.create(engine=engine)
