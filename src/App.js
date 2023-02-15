import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  const home_navbar_item = ["Home","Link","Disabled","Tomas"]
  const dropdown_list = ["XBOX","PLAY_STATION","PC"]
  return (
    <div className="App text-danger">
      <Navbar 
        navbar_items={home_navbar_item} 
        nombre_logo={'Mercado Libre'}
        search_bar={false}
        show_dropdown={true}
        dropdown_name={'Video Juegos'}
        dropdown_list={dropdown_list}
      />
    </div>
  );
}

export default App;

// App 
 // Navbar 
   // NavbarItem
   // SearchBar 
   // Dropdown
