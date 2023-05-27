import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import UserRoute from "./UserRoute"

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );

}
