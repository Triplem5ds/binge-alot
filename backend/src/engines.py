from sqlalchemy import create_engine

DB_URL = "sqlite:///./test.db"

engine = create_engine(DB_URL)
