import "./App.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handlePress = (e) => {
  if(e.key == 'Enter') {
    addData();
  }
  console.log(e.key);
  }

  return (
    <div className="App">
      <Header />
      {/* Form section */}
      <div className="form">
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="outlined-basic"
              label="name"
              variant="outlined"
            />
            <TextField
              onKeyPress={(e) => handlePress(e)}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="outlined-basic"
              label="email"
              variant="outlined"
            />
          </Box>
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </div>

      {/* Data Section */}
        <div className="data">
          <div className="data_val">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {data.map((element, index) => {
            return (
              <div key={index} className="data_val">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <h4>Remove</h4>
                <Button
                  onClick={() => removeItem(index)}
                  variant="outlined"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
