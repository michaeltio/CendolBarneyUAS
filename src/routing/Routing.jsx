import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import Page disini
import Home from "../pages/Home"
<<<<<<< Updated upstream
=======
import HiWeather from "../pages/HiWeather"
import Magic8Ball from "../pages/Magic8Ball"
>>>>>>> Stashed changes



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
<<<<<<< Updated upstream
          {/* <Route path="/hiweather" element={<HiWeather />}/>
          <Route path="*" element={<NotFound />}/> */}
=======
          <Route path="/hiweather" element={<HiWeather />}/>
          <Route path="/magic8ball" element={<Magic8Ball />}/>
          {/* <Route path="*" element={<NotFound />}/> */}
>>>>>>> Stashed changes
        </Routes>
      </Router>
    );
}
  