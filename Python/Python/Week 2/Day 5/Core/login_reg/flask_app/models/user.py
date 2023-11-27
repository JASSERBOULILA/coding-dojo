from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re	# the regex module
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.first_name=data_dict['first_name']
        self.last_name=data_dict['last_name']
        self.email=data_dict['email']
        self.password=data_dict['password']
        # self.config=data_dict['configaration']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']
    
        
    # Queries =classmethod
    @classmethod
    def create(cls,data):
        query="""INSERT INTO users
        (first_name, last_name, email, password) 
        VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);"""
        #.-.INSERT . STATEMENT RETURNS THE NEW INSERTED ROW ID
        db_result=connectToMySQL(DATABASE).query_db(query,data)
        return db_result
    @classmethod
    def get_one_by_id(cls,data):
        query="""SELECT * FROM users WHERE id=%(id)s;"""
        db_result=connectToMySQL(DATABASE).query_db(query,data)
        user=cls(db_result[0])
        return user
    @classmethod
    def get_by_email(cls,data):
        query="""SELECT * FROM users WHERE email=%(email)s;"""
        res=connectToMySQL(DATABASE).query_db(query,data)
        if len(res)<1:
            return False
        db_res=cls(res[0])
        return db_res
    
    @staticmethod
    def validate(data):
        is_valid=True
        count_upper=0
        count_number=0
        if len(data['first_name'])<2:
            flash("FIRST name too Short")
            is_valid=False
        if len(data['last_name'])<2:
            flash("Last name too short.")
            is_valid=False
        #email validation
        if not EMAIL_REGEX.match(data['email']):
            flash("email is not valid .")
            is_valid=False
        #password validation
            #validate length
        if len(data['password'])<8:
            flash("password must be 8")
            is_valid=False
            #validate the matching of the password repeat
        elif data['password'] != data['configaration']:
            flash("Password not matching")
            is_valid = False
        for i in range(len(data['password'])):
            if("A"<=data['password'][i]<="Z"):
                count_upper+=1
            elif(data['password'][i].isnumeric()):
                count_number+=1
        if count_number==0 or count_upper==0:
            is_valid=False
            flash('the password must contain at least one number and one uppercase')
        return is_valid