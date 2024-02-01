import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
    <Header></Header>
    <Container className="flex-grow-1"></Container>
    <Footer></Footer>
    </>
  )
}

export default App
