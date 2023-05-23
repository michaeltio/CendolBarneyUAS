import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import Page disini
import Home from "../pages/Home"
import HiWeather from "../pages/HiWeather"
import Magic8Ball from "../pages/Magic8Ball"
import PrimeOrNot from '../pages/PrimeOrNot';
import SinceBirth from '../pages/SinceBirth';


//NOTE
//Kalo kalian mau liat halaman kalian sendiri bisa ganti aja route path nya jadi gini
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<NamaHalamanYangDiTest />}/>
//       </Routes>
//     </Router>
//   );
// }
// abis itu route yang di bawah di comment aja, jangan dihapus


export default function Routing() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/hiweather" element={<HiWeather />}/>
          <Route path="/magic8ball" element={<Magic8Ball />}/>
          <Route path="/primeornot" element={<PrimeOrNot />}/>
          <Route path="/sincebirth" element={<SinceBirth />}/>
          {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
      </Router>
    );
}
  