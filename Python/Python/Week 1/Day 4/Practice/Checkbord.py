from flask import Flask,render_template

app=Flask(__name__)

@app.route('/')
def show():
    return render_template('ches.html',row=8,col=8,color1='black',color2='red')

@app.route('/<int:col>')
def show_template(col):
    return render_template('ches.html',row=8,col=col,color1="black",color2='red')

@app.route('/<int:col>/<int:row>')
def show_template1(col,row):
    return render_template('ches.html',row=row,col=col,color1="black",color2='red')
@app.route('/<int:col>/<int:row>/<color1>/<color2>')
def show_template2(col,row,color1,color2):
    return render_template('ches.html',row=row,col=col,color1=color1,color2=color2)

if(__name__=='__main__'):
    app.run(debug=True,port=1339)