from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_number = int(request.form['number'])
        random_number = 3 #random_number = random.randint(0, 10)
        return f'The random number is {random_number}. Your number is {"equal" if user_number == random_number else "not equal"} to the random number.'
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
