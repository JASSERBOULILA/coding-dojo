from flask_app import app
from flask_app.models.dojos import Dojo
from flask import render_template,redirect,session,request


@app.route('/')
def index():
    return render_template('index.html')
@app.route('/submit',methods=['POST'])
def show():
    data={
        **request.form
    }
    if Dojo.validate(data):
        Dojo.create(data)
        return redirect('show')
    return redirect('/')

@app.route('/show')
def display():
    return render_template('back.html',dojos=Dojo.get_all())

@app.route('/back',methods=['POST'])
def back():
    Dojo.delete()
    session.clear()
    return redirect('/')