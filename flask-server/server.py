from flask import Flask, request
# from dotenv import load_dotenv

# load_dotenv(".env")

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/courses")
def courses():
    return {"courses": [
        {"name": "Course1", "duration": "2 weeks", "code": "cs202"},
        {"name": "Course2", "duration": "18 weeks", "code": "cs203"},
        {"name": "Course3", "duration": "2 months", "code": "cs204"},
        {"name": "Course4", "duration": "20 days", "code": "cs205"}
    ]}

@app.route("/signin", methods=['GET', 'POST'])
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