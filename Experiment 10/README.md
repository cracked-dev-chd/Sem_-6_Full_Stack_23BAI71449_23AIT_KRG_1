# Neural Network from Scratch Project

## Overview

This project demonstrates the implementation of a simple feedforward neural network from scratch using only NumPy and standard Python libraries, with no reliance on high-level deep learning frameworks. The main goal is to provide a clear, educational example of how neural networks work at a low level, including data preprocessing, forward and backward propagation, and parameter updates.

## Features

- **Manual Neural Network Implementation:** All neural network operations (initialization, forward pass, activation functions, backpropagation, and parameter updates) are implemented from scratch.
- **MNIST Dataset:** The project uses the MNIST dataset of handwritten digits, fetched via `scikit-learn`'s `fetch_openml` utility.
- **Data Preprocessing:** Includes shuffling, normalization, and splitting into training and development sets.
- **Activation Functions:** Implements ReLU and Softmax activations.
- **One-Hot Encoding:** Converts labels to one-hot vectors for multi-class classification.
- **Training Loop:** Includes a gradient descent loop with accuracy reporting every 10 iterations.
- **Evaluation:** Provides accuracy metrics to assess model performance.

## Project Structure

- `main.py`: Entry point for the project (currently prints a greeting; can be extended for CLI usage).
- `nn_from_scratch.ipynb`: Jupyter notebook containing the full neural network implementation, data loading, preprocessing, training, and evaluation code.
- `pyproject.toml`: Project metadata and dependencies.
- `README.md`: Project documentation (this file).

## Dependencies

- Python >= 3.11
- numpy
- pandas
- matplotlib
- scikit-learn
- jupyter, ipykernel
  Install dependencies using pip:

````bash
pip install -r requirements.txt
Or use the dependencies listed in `pyproject.toml`.

## Dataset
- **Source:** [MNIST Handwritten Digits](https://www.openml.org/d/554)
- **Loading:** The dataset is loaded using `fetch_openml` from `scikit-learn`.
- **Preprocessing:**
	- Data is shuffled and split into training and development sets.
	- Features are normalized to the range [0, 1].
	- Labels are converted to integer and one-hot encoded for training.
## Neural Network Architecture
- **Input Layer:** 784 neurons (28x28 pixel images, flattened)
- **Hidden Layer:** 10 neurons, ReLU activation
- **Output Layer:** 10 neurons (one per digit class), Softmax activation
### Forward Propagation
- Computes activations for each layer using matrix multiplication and activation functions.

### Backward Propagation
- Calculates gradients of the loss with respect to weights and biases using the chain rule.
- Updates parameters using gradient descent.

## Training
- The training loop runs for a specified number of iterations (e.g., 100), updating weights and biases at each step.
- Accuracy is printed every 10 iterations to monitor progress.

## Usage
1. Open `nn_from_scratch.ipynb` in Jupyter Notebook.
2. Run all cells to execute the full workflow: data loading, preprocessing, model training, and evaluation.
3. Modify hyperparameters (iterations, learning rate, architecture) as desired for experimentation.
## Example Code Snippet
```python
# Initialize and train the network
W1, B1, W2, B2 = gradient_descent(X_train, Y_train, 100, 0.1)
## Extending the Project
- Add more layers or neurons to the network.
- Implement additional activation functions or optimizers.
- Experiment with different datasets.
- Add visualization for loss and accuracy curves.

## License
This project is for educational purposes and is provided as-is.
````
