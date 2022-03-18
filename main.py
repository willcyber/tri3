from flask import render_template
from __init__ import app



@app.route('/')
def index():
    return render_template("index.html")

@app.route('/timer')
def timer():
    return render_template("timer.html")

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404


if __name__ == "__main__":
    # runs the application on the repl development server
    app.run(debug=True, port="5222")
