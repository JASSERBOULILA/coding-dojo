from flask import Flask ,render_template

# `app=Flask(__name__)` creates an instance of the Flask class and assigns it to the variable `app`.
# The `__name__` argument is a special Python variable that represents the name of the current module.
# In this case, it represents the name of the main module or the package that the script is being run
# from.
app=Flask(__name__)


@app.route('/')
def hello():
    return "Hello World"
@app.route('/dojo')
def dojo():
    return "Dojo"

@app.route('/say/flask')
def flask():
    return "Hi Flask !"

@app.route('/say/micheal')
def micheal():
    return "Hi micheal"
@app.route('/say/<username>')
def john(username):
    return f"Hi{username}"
@app.route('/rep/<int:number>/<username>')
def repeat(number,username):
    return f"{username} "*number
@app.route('/repeat/<int:number>/<username>')
def repeart1(number,username):
    return f"{username} "*number
@app.route('/repeat/<int:number>/<username>')
def dogs(number,username):
    return f"{username}"*number




@app.route('/<user>')
def hello_senpai(user):
    app="jasser"
    if(user!=app):
        return f"Sorry!No reponse . Try again"
    else:
        return f"Hello {user}"
    

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=1337)
