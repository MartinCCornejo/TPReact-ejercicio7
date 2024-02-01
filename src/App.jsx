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
      <EmpleadoList></EmpleadoList>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
