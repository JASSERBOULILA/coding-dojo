# from flask import Flask,render_template,redirect,request,session


# app=Flask(__name__)
# app.secret_key="Keep it secret"

# @app.route('/')
# def show():
#     return render_template('counter.html')

# @app.route('/count')
# def count():
#     number=1
#     number+=1
#     return render_template('counter.html',number=number)


# if __name__=='__main__':
#     app.run(debug=True,port=1339)
from flask import Flask, render_template, redirect, session

app = Flask(__name__)

# Set a secret key for session management
app.secret_key = 'your_secret_key'
reset=0

@app.route('/')
def index():
    # Use get method to retrieve the counter from the session, defaulting to 0
    counter = session.get('counter', 0)
    return render_template('counter.html', counter=counter)

@app.route('/increment')
def increment():
    # Increment the counter in the sessio
    session['counter'] = session.get('counter', 0) + 1
    return redirect('/')

@app.route('/reset')
def reset():
    global reset
    session['counter'] = 1
    reset+=1 
    return redirect('/')


@app.route('/incre')
def increa():
    session['counter']=session.get('counter',0)+2
    return redirect('/')
    

if __name__ == '__main__':
    app.run(debug=True)

