//this app we have implmented node server, api and fixed cors issues
// implemented card styling as well


import DataList from "./Components/Datalist";

function App() {
  return (
    <div className="App">
      welcome to api
      <DataList/>
    </div>
  );
}

export default App;


//****create a file in nodejs index.js and run node index.js
//for front end we need have server and back end one server
// in terminal run back end server then execute front end server*********

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello from the Node.js API' });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Node.js API running on http://localhost:${port}`);
// });

/////////////////////////////////////////

const express = require('express');
const cors =require('cors');
const app = express();

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  { id: 11, name: 'Item 11' },
  { id: 12, name: 'Item 12' },
  { id: 13, name: 'Item 13' },
  { id: 14, name: 'Item 14' },
  { id: 15, name: 'Item 15' },
  { id: 16, name: 'Item 16' },
  { id: 17, name: 'Item 17' },
  { id: 18, name: 'Item 18' },
  { id: 19, name: 'Item 18' },
  { id: 20, name: 'Item 19' },
  { id: 21, name: 'Item 20' },
];

app.use(cors({
  // 'methods':'GET',
    origin:'*'
}))

app.get('/data', (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

