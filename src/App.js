import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Home, AboutUs, Contact, Error } from './Pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;