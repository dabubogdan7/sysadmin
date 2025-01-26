import os
import matplotlib.pyplot as plt

class BrakeController:
    def generate_graph(self, test_data):
        """
        Generează un grafic pe baza datelor de test furnizate și îl salvează într-un fișier.
        """
        try:
            # Creează directorul dacă nu există
            graphs_dir = os.path.join('static', 'graphs')
            os.makedirs(graphs_dir, exist_ok=True)
            
            # Datele pentru grafic
            x_values = [point['x'] for point in test_data]
            y_values = [point['y'] for point in test_data]
            
            # Generează graficul
            plt.figure(figsize=(10, 5))
            plt.plot(x_values, y_values, marker='o', label="Test Data")
            plt.title("Brake Test Results")
            plt.xlabel("Time (s)")
            plt.ylabel("Brake Force (N)")
            plt.legend()
            plt.grid(True)
            
            # Salvează graficul
            graph_path = os.path.join(graphs_dir, 'brake_test_graph.png')
            plt.savefig(graph_path)
            plt.close()
            
            return graph_path
        except Exception as e:
            print(f"Error generating graph: {e}")
            return None
