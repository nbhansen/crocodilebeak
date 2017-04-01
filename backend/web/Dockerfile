FROM python:3.5.2

WORKDIR /data


COPY requirements.txt /
RUN pip3 install -r /requirements.txt

COPY . .

CMD ["gunicorn", "-w", "2", "-b", ":8000", "app:app"]