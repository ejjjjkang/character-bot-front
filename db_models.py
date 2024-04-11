from peewee import *

database = SqliteDatabase('postings')

class UnknownField(object):
    def __init__(self, *_, **__): pass

class BaseModel(Model):
    class Meta:
        database = database

class Postings(BaseModel):
    date = TextField(null=True)
    reactions = TextField(null=True)
    text = TextField(null=True)

    class Meta:
        table_name = 'postings'
        primary_key = False

