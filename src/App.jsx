
import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/xxx' element></Route>
        </Routes>
      </Layout>
    
      
    </>
  )
}

export default App
