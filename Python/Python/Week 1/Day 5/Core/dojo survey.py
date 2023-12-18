from flask import Flask,render_template,redirect,request,session

app=Flask(__name__)

app.secret_key="this the secret key"


@app.route('/')
def show():
    return render_template('Dojo survey.html',session=session)

@app.route('/result',methods=['POST'])
def show_res():
    session['name']=request.form['name']
    session['option']=request.form['option']
    session['language']=request.form['language']
    session['comment']=request.form['comment']
    return redirect('/display')


@app.route('/display')
def display():
    return render_template('display.html',session=session)

@app.route('/back')
def back():
    session.clear()
    return redirect('/')



if __name__=='__main__':
    app.run(debug=True,port=1339) 