from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def fn():
    return "cool 3"


@router.get("/create-tables")
def create_tables():
    from src.libbinge.models import tables
    from src.appbinge import engine

    tables.create(engine=engine)
