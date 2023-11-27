from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import database
import re

class Dojo:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.location=data['location']
        self.language=data['language']
        self.comment=data['comment']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
    @classmethod
    def get_all(cls):
        query="""SELECT * FROM dojo;"""
        dojos=[]
        db_result=connectToMySQL(database).query_db(query)
        for row in db_result:
            dojos.append(cls(row))
        print(dojos)
        return dojos
    @classmethod
    def delete(cls):
        query="""DELETE FROM dojo;"""
        return connectToMySQL(database).query_db(query)
    @classmethod
    def create(cls,data):
        query="""INSERT INTO dojo (name,location,language,comment)
                VALUES
                    (%(name)s,%(location)s,%(language)s,%(comment)s);"""
        return connectToMySQL(database).query_db(query,data)
    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['name'])<3:
            is_valid=False
            flash("the name must be at least 3 character long")
        if data['location']=="Select A location":
            is_valid=False
            flash('the location is required')
        if data['language']=="Select A language":
            is_valid=False
            flash('the language is required')
        if data['comment']=="":
            is_valid=False
            flash('the comment session must be not empty')
        return is_valid