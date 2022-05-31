from flask import render_template
from __init__ import app
from flask import request
from cruddy.app_crud_api import app_crud_api
from cruddy.app_crud import app_crud
from database.app_feedback import app_feed

app.register_blueprint(app_crud)
app.register_blueprint(app_crud_api)
app.register_blueprint(app_feed)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/evanCreateTask')
def evanCreateTask():
    return render_template("evanCreateTask.html")

@app.route('/alexCreateTask')
def alexCreateTask():
    return render_template("alexCreateTask.html")

@app.route('/timer')
def timer():
    return render_template("clockApp.html")

@app.route('/rockpaperscissors')
def rockpaperscissors():
    return render_template("rockpaperscissors.html")

@app.route('/tictactoe')
def tictactoe():
    return render_template("tictactoe.html")

@app.route('/regularplanner')
def regularplanner():
    return render_template("regularplanner.html")

@app.route('/weeklyplanner')
def weeklyplanner():
    return render_template("weeklyplanner.html")

@app.route('/taskplanner')
def taskplanner():
    return render_template("taskplanner.html")

@app.route('/draganddrop')
def draganddrop():
    return render_template("draganddrop.html")

@app.route('/calculator')
def calculator():
    return render_template("calculator.html")

@app.route('/conversion')
def conversion():
    return render_template("conversion.html")

@app.route('/dictionary')
def dictionary():
    return render_template("dictionary.html")

@app.route('/main')
def main():
    return render_template("main.html")

@app.route('/feedback/feedback/feedback')
def thanks():
    return render_template("thanks.html")


@app.route('/feedback/', methods=['GET', 'POST'])
def feedback():
    if request.form:
        input = request.form.get("feed1")
        name = request.form.get("feed2")
        if len(input) != 0:  # input field has content
            return render_template("feedback.html", input=input, name=name)
    return render_template("feedback.html")

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404


if __name__ == "__main__":
    # runs the application on the repl development server
    app.run(debug=True, port="5002")
