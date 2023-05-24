import {Routes, Route } from 'react-router-dom';

//Import Page disini
import Home from "../pages/Home"
import HiWeather from "../pages/HiWeather"
import Magic8Ball from "../pages/Magic8Ball"
import Quoty from "../pages/Quoty"
import AstronomyLibrary from "../pages/AstronomyLibrary"
import WouldYouRather from "../pages/WouldYouRather"
import DogVote from "../pages/DogVote"



//NOTE
//Kalo kalian mau liat halaman kalian sendiri bisa ganti aja route path nya jadi gini
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<DogVote />}/>
//       </Routes>
//     </Router>
//   );
// }
// abis itu route yang di bawah di comment aja, jangan dihapus

export default function Routing() {
    
    return (
        <Routes>    
          <Route path="/" element={<Home />}/>
          <Route path="/hiweather" element={<HiWeather />}/>
          <Route path="/magic8ball" element={<Magic8Ball />}/>
          <Route path="/astronomylibrary" element={<AstronomyLibrary />}/>
          <Route path="/quoty" element={<Quoty />}/>
        </Routes>
    );
}
  