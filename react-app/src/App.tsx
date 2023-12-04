// import ListGroup from "./components/ListGroup";

// function App() {
//   const items = ['João Pessoa', 'Roma', 'Texas', 'Grécia', 'Cacimba de Dento'];

//   const handleSelectItem = (item: string) => 
//   {
//     console.log(item);
//   }

//   return ( 
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
//     </div>
//   );
// }

import {useState} from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App()
{
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>click me</Button>
    </div>
  );
}

export default App;