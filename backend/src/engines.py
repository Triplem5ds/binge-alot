from sqlalchemy import create_engine

DATABASE_URL = "sqlite:///my_database.db"  # File-based SQLite database

engine = create_engine(DATABASE_URL, echo=True)

print("Connected to sqlite")
