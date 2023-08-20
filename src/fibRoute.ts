// Endpoint for querying the fibonacci numbers

//const fibonacci = require("./fib");
import { fibonacci } from './fib';

//export default (req, res) => {
import { Request, Response } from 'express';

//export default (req: Request, res: Response) => {
export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
