// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// function DataList() {
//       const [data, setData] = useState([]);
    
//       useEffect(() => {
//         axios.get('http://localhost:3000/data')
//           .then(response => {
//             setData(response.data);
//             console.log(data);
//           })
//           .catch(error => {
//             console.error(error);
//           });
//       }, []);
    
//       return (
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>{item.id} {item.name}</li>
//           ))}
//         </ul>
//       );
//     }
    
//     export default DataList;

    // adding cards

    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import { Card } from 'antd';
    
    function DataList() {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:3000/data')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.map(item => (
            <Card key={item.id} style={{ width: 300, margin: '16px' }}>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
            </Card>
          ))}
        </div>
      );
    }
    
    export default DataList;
    











