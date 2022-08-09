import "./styles/App.css";
import Card from "./components/card/card";
import Aside from "./components/aside/aside";
/*
 TODO Stworzyć wiadomość
 TODO Stworzyć Aside z profilami
 TODO Stworzyć Profil
 TODO O'Skryptową button adoptuj i odrzuć oraz informacje

 ! Zadanie dodatkowe
 ! Rozkwilić jak ogarnąć ten backend
 
*/

function App() {
  return (
    <div className="App">
      <Aside />
      <main className="main">
        <Card />
      </main>
    </div>
  );
}

export default App;
