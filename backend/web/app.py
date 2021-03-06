#!/usr/bin/env python3
import connexion
import logging
from flask import render_template
from pathlib import Path

from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

import settings

logging.basicConfig(level=logging.INFO)
app = connexion.App(__name__)
app.add_api(Path('swagger.yaml'))
application = app.app


@app.route('/')
def front_end():
    return render_template('app.html')

if __name__ == '__main__':
    # run our standalone gevent server
    HTTPServer(WSGIContainer(app)).listen(settings.PORT)
    IOLoop.instance().start()
