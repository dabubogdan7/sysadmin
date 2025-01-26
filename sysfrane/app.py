from flask import Flask, render_template, jsonify, request
from controllers.brake_controller import BrakeController

app = Flask(__name__)

brake_controller = BrakeController()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_test')
def add_test():
    return render_template('add_test.html')

@app.route('/view_results')
def view_results():
    return render_template('view_results.html')

@app.route('/generate_graph', methods=['POST'])
def generate_graph():
    data = request.json.get('test_data')
    graph_path = brake_controller.generate_graph(data)
    return jsonify({"graph_path": graph_path})

if __name__ == '__main__':
    app.run(debug=True)
