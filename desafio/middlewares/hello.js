const express = require('express');
const router = express.Router();

let data = {
  name:  '',
};

router.get('/', (_req, res) => {
  res.status(200).json([data])
})

router.post('/', (req, res) => {
  const { name } = req.body;
  data.name = name;
  res.status(201).json(
    { message: `Hello, ${name}!` }
  )
})

module.exports = router;