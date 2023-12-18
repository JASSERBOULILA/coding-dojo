from users_crud import app
from flask import Flask,render_template,request,redirect,session

from users_crud.models.bd import user



@app.route('/')
def index():
    users=user.get_all()
    return render_template('show.html',users=users)

@app.route('/users/new')
def hell():
    users=user.get_all()
    return render_template("User.html",id=users['id'])

@app.route('/users',methods=["POST"])
def show():
    data={
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'email':request.form['email']
    }
    user.create(data)
    return redirect('/')


@app.route('/users/<int:id>',methods=['POST'])
def update(id):
    data={'id':id}
    user.update(request.form)
    return redirect('/')