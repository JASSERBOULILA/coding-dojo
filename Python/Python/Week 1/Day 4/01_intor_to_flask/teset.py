from flask import Flask,render_template

app=Flask(__name__)



@app.route('/')
def show():
    return "hello world"

@app.route('/show')
def show_1():
    return "Hi tasnim"

@app.route('/<tasnim>/<int:number>')
def show_2(number,tasnim):
    return render_template('test.html',number=number,name=tasnim)



if __name__=="__main__":
    app.run(debug=True,port=1300)