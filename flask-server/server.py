from flask import Flask, request
from dotenv import load_dotenv
from pathlib import Path

basepath = Path()
load_dotenv(basepath.cwd())

app = Flask(__name__)

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
        return {"institutions": ["alfa"]}
    else:
        return {"institutions": [
            {"name": "acropolis", "domain": "@acropolis.in"},
            {"name": "sgsits", "domain": "@sgsits.ac.in"},
            {"name": "dsce", "domain": "@dsce.in"}
            ]}

if __name__ == "__main__":
    app.run(Debug=True)           