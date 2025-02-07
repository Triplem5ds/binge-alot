FROM python:3.12

WORKDIR /src

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . /src

EXPOSE 8000

CMD ["uvicorn", "appbinge.server:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]