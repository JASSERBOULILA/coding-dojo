from flask import Flask,render_template,redirect,request,session

app=Flask(__name__)
app.secret_key="Keep it secret"
@app.route('/')
def hello():
    return render_template('form.html')

@app.route('/process',methods=['POST'])
def process():
    print("*"*20,request.form,"*"*20)
    session["name"]=request.form['name']
    session["Age"]=request.form['Age']
    session["Number"]=request.form['Number']
    session["food"]=request.form['food']
    session["color"]=request.form['sport']
    return redirect('/display')

@app.route('/display')
def display():
    return render_template("display.html")

if __name__=='__main__':
    app.run(debug=True,port=5001)