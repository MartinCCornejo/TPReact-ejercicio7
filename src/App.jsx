import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import EmpleadoList from './components/EmpleadoList';

function App() {

  

  return (
    <>
    <Header></Header>
    <Container className="flex-grow-1">
      <h2 className='display-5 mt-4'>Empleados</h2>
      <hr className='text-darkRed'></hr>
      <EmpleadoList></EmpleadoList>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
