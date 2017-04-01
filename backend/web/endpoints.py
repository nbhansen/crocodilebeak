#!/usr/bin/env python3
import logging
import json

from tinydb import TinyDB

from connexion import NoContent

import settings

logging.basicConfig(level=logging.INFO)
db = TinyDB(settings.DATA_PATH+"db.json")

logger = logging.getLogger()

def get_rfid(**kwargs):
    return json.dumps(True), 200

def post_product(**kwargs):
    product = kwargs['product']
    db.insert(product)
    logger.info("Inserted rfid %s with barcode %s into db" % (product['rfid'], product['barcode']))
    return json.dumps(product), 200
