

import React,{useState,useEffect, useCallback} from "react";
import './App.css';


function App() {
   let [url,setUrl] = useState("https://jsonplaceholder.typicode.com/users");
    let [data,setData] = useState([]);

     const fetchTrip = useCallback( async () => {
         try {
           const response = await fetch(url);
           const data = await response.json();
           setData(data);
         } catch (error) {
           console.error("Error fetching data:", error);
         }

     })


     useEffect(() => {
        fetchTrip()
     },[url]);
     console.log(data);

  return (
    <div className="App">
 <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                      <th>Email</th>
                       <th>phone</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
            {
       data.map((item, index) => {
         return (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.address.city}</td>
      </tr>
         );
       })
     }



            </tbody>
        </table>
    </div>

    </div>
  );
}

export default App;
