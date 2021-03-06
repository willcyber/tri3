"""control dependencies to support CRUD app routes and APIs"""
from flask import Blueprint, render_template, request, url_for, redirect, jsonify, make_response
from flask_login import login_required, current_user
from cruddy.query import *
from database.model import Feedback


# blueprint defaults https://flask.palletsprojects.com/en/2.0.x/api/#blueprint-objects
app_feed = Blueprint('feedback', __name__,
                     url_prefix='/feedback',
                     template_folder='templates/feedback/',
                     static_folder='static',
                     static_url_path='static')

""" Blueprint is established to isolate Application control code for CRUD operations, key features:
    1.) 'Users' table control methods, controls relationship between User Actions and Database Model
    2.) Control methods are achieved using app routes for each CRUD operations
    3.) login required to restrict CRUD operations to identified users
"""

# Default URL for Blueprint
# @app_feedback.route('/')
# @login_required  # Flask-Login uses this decorator to restrict acess to logged in users
# def crud():
#     """obtains all Users from table and loads Admin Form"""
#     return render_template("crud.html", table=users_all())


# Flask-Login directs unauthorised users to this unauthorized_handler
# @login_manager.unauthorized_handler
# def unauthorized():
#     """Redirect unauthorized users to Login page."""
#     return redirect(url_for('crud.crud_login'))
# @login_required
#
# # if login url, show phones table only
# @app_feedback.route('/login/', methods=["GET", "POST"])
# def crud_login():
#     # obtains form inputs and fulfills login requirements
#     if request.form:
#         email = request.form.get("email")
#         password = request.form.get("password")
#         if login(email, password):       # zero index [0] used as email is a tuple
#             return redirect(url_for('crud.crud'))
#
#     # if not logged in, show the login page
#     return render_template("login.html")
#
#
# @app_crud.route('/authorize/', methods=["GET", "POST"])
# def crud_authorize():
#     # check form inputs and creates user
#     if request.form:
#         # validation should be in HTML
#         user_name = request.form.get("user_name")
#         email = request.form.get("email")
#         phone = request.form.get("phone")
#         password1 = request.form.get("password1")
#         password2 = request.form.get("password1")           # password should be verified
#         if authorize(user_name, email, password1, phone):    # zero index [0] used as user_name and email are type tuple
#             return redirect(url_for('crud.crud_login'))
#     # show the auth user page if the above fails for some reason
#     return render_template("authorize.html")



@app_feed.route('/feedback/', methods=["POST"])
@login_required
def create():
    """gets data from form and add it to Users table"""
    if request.form:
        po = Feedback(
            request.form.get("name"),
            request.form.get("feedback"),
        )
        po.create()
    return redirect("feedback")



@app_feed.route('/read/', methods=["POST"])
@login_required
def read():
    """gets userid from form and obtains corresponding data from Users table"""
    table = []
    if request.form:
        id = request.form.get("id")
        po = user_by_id(id)
        if po is not None:
            table = [po.read()]  # placed in list for easier/consistent use within HTML
    return render_template("feedback.html", table=table)



@app_feed.route('/update/', methods=["POST"])
@login_required
def update():
    """gets userid and name from form and filters and then data in  Users table"""
    if request.form:
        id = request.form.get("id")
        name = request.form.get("name")
        po = user_by_id(id)
        if po is not None:
            po.update(name)
    return redirect(url_for('feedback.html'))



@app_feed.route('/delete/', methods=["POST"])
@login_required
def delete():
    """gets userid from form delete corresponding record from Users table"""
    if request.form:
        id = request.form.get("id")
        po = user_by_id(id)
        if po is not None:
            po.delete()
    return redirect(url_for('feedback.html'))


