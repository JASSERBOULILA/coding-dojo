from flask_app import app
from flask_app.models.user import User
from flask import render_template,flash,request,redirect,session
from flask_bcrypt import Bcrypt

bcrypt=Bcrypt(app)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/register',methods=['POST'])
def register():
    print(request.form,"dqjdjqsd sqj dhqshd q")
    data={
        **request.form
        }
    if User.validate(data):
        #User data is valid
        # hash password
        pw_hash=bcrypt.generate_password_hash(data['password'])
        data['password']=pw_hash
        #save
        user_id=User.create(data)
        session['user_id']=user_id
    return redirect("/")


@app.route('/login',methods=['POST'])
def login():
    data={"email":request.form['email']}
    user_in_db=User.get_by_email(data)
    if not user_in_db:
        flash("invalid Password")
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash('Invalid Password')
        return redirect('/')

    session['user_id']=user_in_db.id
    return redirect('/dashboard')


@app.route('/dashboard')
def show():
    data={
        "id":session['user_id']
    }
    return render_template('login.html',users=User.get_one_by_id(data))


@app.route('/back')
def back():
    session.clear()
    return redirect('/')