from flask import Flask ,render_template
app=Flask(__name__)






@app.route('/')
def hello():
    users = [
        {'name':'John','age':35},
        {'name':'Sarah','age':25},
        {'name':'Alex','age':28},
        {'name':'Amelia','age':23},
        {'name':'James','age':22},
        {'name':'Eric','age':56}
    ]
    return render_template('index.html',users=users)

@app.route('/circle/<color>/<int:number>')
def show_circle(color,number):
    return render_template('circle.html',color=color,number=number)
if __name__=='__main__':
    app.run(debug=True,port=5001)