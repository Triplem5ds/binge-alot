FROM python:3.12

WORKDIR /src
COPY . /src

COPY requirements.txt /src/
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "src.appbinge.server:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]