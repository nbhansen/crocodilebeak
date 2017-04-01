#!/usr/bin/env python3
import logging
import json

from tinydb import TinyDB, Query

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

def post_preference(**kwargs):
    preferences = kwargs['preferences']
    for preference in preferences:
        preferenceQuery = db.get(Query().name == preference['name'])
        if preferenceQuery:
            db.update({'selected': preference['selected']}, eids=[preferenceQuery.eid])
        else:
            db.insert(preference)
        
        preference_object = db.get(Query().name == preference['name'])
        logger.info("Inserted/Updated %s" % preference_object)
    return json.dumps(preferences), 200
