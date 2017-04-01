#!/usr/bin/env python3
import logging
import json

from tinydb import TinyDB

from connexion import NoContent

import settings

logging.basicConfig(level=logging.INFO)
db = TinyDB(settings.DATA_PATH+"db.json")


def get_rfid(**kwargs):
    return json.dumps(True), 200
