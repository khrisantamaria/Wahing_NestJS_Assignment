
exports.getFibonacciSequence = (req, res) => {
    const n = parseInt(req.params.n, 10);
  
    if (isNaN(n) || n < 0) {
      return res.status(400).json({ error: "Please provide a valid positive number." });
    }
  
    const getfibonacci = (num) => {
      const sequence = [0, 1];
      for (let i = 2; i <= num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence;
    };
  
    const sequence = getfibonacci(n);
    res.json({ fibonacci_sequence: sequence });
  };
  