
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
app.use(cors)
app.get('/', (req, res) => {
  res.send(`<p>Hello and welcome to whoever is reading this! I'm Mia, a 24-year old master student at The Royale Institute of Technology (KTH), Stockholm. 
  I have a B.Sc. in Engineering Physics and am currently in my senior year of M.Sc. in Machine Learning. 
  In addition to that I'm working part-time as a web developer intern at Svea Solar learning all about JavaScript and Node.js.</p>

<p>In my spare time you'll either find me at the gym or outside training. I love hiking, being out in nature and spending time in the sun. 
  I am environmentally conscious, a (vegan) foodie and (red) wine lover!</p>
<p>I am a positive but hard worker who believes that a great team can overcome any obstacles put in front of them!</p>`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})