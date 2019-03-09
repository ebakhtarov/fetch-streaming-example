const http = require('http')

const port = 7000;
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


const requestHandler = async (req, res) => {
  console.log(req.url, req.method)
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Content-Type", "text/plain");

  /* if (req.method === 'OPTIONS') {
    res.end();
    return;
  }*/
  
  const startDate = new Date();

  for (var i = 0; i < 3; i++) {
    res.write(`${i},Max Muster,500,SUBSCRIPITON,100,ACTIVE,30\n`);
    // res.once('drain', res.write);
    await delay();
  }

  const endDate = new Date();
  const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  console.log(seconds);    
  res.write(`seconds: ${seconds} \n`);
  await delay();
  res.write(`--- another message ---\n`);
  await delay();
  res.end(`Last message!\n`);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
