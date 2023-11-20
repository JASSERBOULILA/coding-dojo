from flask import Flask,render_template

app=Flask(__name__)

@app.route('/play')
def play():
    return render_template('index.html',number=1,color='aqua')

@app.route('/play/<int:x>')
def show_number(x):
    return render_template('index.html',number=x,color="black")
@app.route('/play/<int:x>/<color>')
def show_color(x,color):
    return render_template('index.html',number=x,color=color)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=1337)
