const http = require('http')
const qs = require('querystring');

const port = 7000
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


const requestHandler = async (req, res) => {
  console.log(req.url, req.method)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  try {
    req.on('data', function (data) {
      const post = qs.parse(data);
      console.log('data', data.toString(), post)
    });
  }catch(err){
    console.log('post err', err)
  }
  
  
  const startDate = new Date();

  for (var i = 0; i < 3; i++) {
    res.write(`${i},Max Muster,500,SUBSCRIPITON,100,ACTIVE,30\n`);
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


