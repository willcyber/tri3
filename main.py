from flask import render_template
from __init__ import app
from cruddy.app_crud import app_crud
from cruddy.app_crud_api import app_crud_api

app.register_blueprint(app_crud)
app.register_blueprint(app_crud_api)

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
    return render_template("timer.html")


@app.route('/regularplanner')
def regularplanner():
    return render_template("regularplanner.html")

@app.route('/weeklyplanner')
def weeklyplanner():
    return render_template("weeklyplanner.html")

@app.route('/taskplanner')
def taskplanner():
    return render_template("taskplanner.html")

@app.route('/calculator')
def calculator():
    return render_template("calculator.html")

@app.route('/conversion')
def conversion():
    return render_template("conversion.html")

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404


if __name__ == "__main__":
    # runs the application on the repl development server
    app.run(debug=True, port="5000")
