import cors from 'cors'; 
import express from 'express';
import run from './index.js';
const app = express()
const port = 4000

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.get('/testdata', (req, res) => {
  res.json({msg:'Hello Hamburg!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
await run()