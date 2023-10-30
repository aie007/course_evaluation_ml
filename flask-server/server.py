from flask import Flask, request
from dotenv import load_dotenv
from pathlib import Path
import os, random, string
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import csv

basepath = Path()
load_dotenv(basepath.cwd())

app = Flask(__name__)

app.config["SECRET_KEY"] = os.getenv('SECRET_KEY', None)
if not app.config["SECRET_KEY"]:
    app.config["SECRET_KEY"] = ''.join(random.choice( string.ascii_lowercase  ) for i in range( 32 ))

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:postgres@localhost/CourseFix'

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

db = SQLAlchemy(app)
CORS(app)

app.app_context().push()

course_instructor_map = db.Table('course_instructor_map',
    db.Column('course_id', db.Integer, db.ForeignKey('course.id'), primary_key=True),
    db.Column('instructor_id', db.Integer, db.ForeignKey('instructor.id'), primary_key=True)
)

class Institute(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    name = db.Column(db.String(200), nullable=False)
    domainName = db.Column(db.String(100), nullable=False)
    adminMail = db.Column(db.String(120), unique=True, nullable=False)
    courses = db.relationship('Course', backref='institute', lazy=True)

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    institute_id = db.Column(db.Integer, db.ForeignKey('institute.id'))
    code = db.Column(db.String(25), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    instructors = db.relationship('Instructor', secondary=course_instructor_map, lazy='subquery', backref=db.backref('courses', lazy=True))

class Instructor(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), nullable=False)

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/courses")
def courses():
    # req = request.get_json()
    # print(req)
    # if req == None:
    return {"institutes": [
    {"name": "Acropolis", "courses": ["Course1", "Course2", "Course3"]},
    {"name": "dtu", "courses": ["Course199", "Course42", "Course433"]},
    {"name": "dsce", "courses": ["Course23", "Course22", "Course223"]},
    {"name": "sgsits", "courses": ["Course94", "Course752", "Course353"]}
    ]}

@app.route("/review", methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        req = request.form 
        
        if not req or req == 'None':
            return {"success": False,
                    "msg": "Empty form"}, 400

        fields = ['email', 'course_name', 'course_code',  'course_review', 'institute', 'instructor_id', 'instructor_review']
        
        with open('reviews.csv', 'a') as csvfile:
            # creating a csv dict writer object  
            writer = csv.DictWriter(csvfile, fieldnames = fields)  
                
            # # writing headers (field names)  
            # writer.writeheader()  
                
            writer.writerow(req)
        
        for i in req:
            print(i + ':' + req[i])

        return {"success": True,
                "msg": "Review has been submitted successfully"}, 200
    else:
        return {"institutions": [
            {"name": "acropolis", "domain": "@acropolis.in"},
            {"name": "sgsits", "domain": "@sgsits.ac.in"},
            {"name": "dsce", "domain": "@dsce.in"}
            ]}

@app.route("/admin", methods=['POST'])
def admin():
    if request.method == 'POST':
        pass
    else:
        raise Exception("Only POST method is supported!")

if __name__ == "__main__":
    app.run(Debug=True)           