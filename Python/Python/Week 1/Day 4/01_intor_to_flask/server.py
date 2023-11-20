from flask import Flask ,render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response



@app.route('/hello')
def hello():
    return "HELLO from server"

@app.route('/hello/user/<username>/<times>')
def helllo_user(username,times):
    return f"<h1>Hello {username}</h1>"*int(times)

#index link html 
@app.route('/index/<username>/<int:age>')
def index(username,age):
    users=[
        {"name":'jasser',"age" :'23'},
        {"name":'ahmed',"age" :'30'},
        {"name":'fo9ma',"age" :'30'},
        {"name":'fakroun',"age" :'30'},
        ]
    return render_template('index.html',username=username,age=age,users=users)
@app.route('/user/<username>/<int:name>')
def hello_user_age(username,name):
    return f"<h1>Hello {username}</h1><br>Age : {name}"
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=1337) # Run the app in debug mode.

