from fastapi import FastAPI

app = FastAPI()


@app.get("/hc")
def fn():
    return "cool 2"


from src.appbinge.routes import router

app.include_router(router)
