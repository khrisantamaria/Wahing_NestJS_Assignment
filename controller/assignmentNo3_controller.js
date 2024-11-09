
const calculateFactorial = num => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const getFactorial = (req, res) => {
    const { number } = req.body;
  

    if (typeof number !== 'number' || isNaN(number) || number < 0 || !Number.isInteger(number)) {
      return res.status(400).json({ error: 'Input must be a non-negative integer' });
    }
  
    const result = calculateFactorial(number);
  
    res.json({
      number,
      factorial: result,
    });
  };
  
  module.exports = { getFactorial };
  