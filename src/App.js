import './App.css';
import {useState} from "react"
import NavbarApp from "./components/NavbarApp"
import { Container, Row, Col, InputGroup, FormControl, Button, Image } from "react-bootstrap"

export default function App() {

  const [nbPic, setNbPic] = useState(1)
  const [pics, setPics] = useState([])

  function getDatas(){
    let url = `https://picsum.photos/v2/list?limit=${nbPic}`

    fetch(url).then(function(res){
      return res.json()
    }).then(function(datas){
      setPics(datas)
    })
    
  }

  function displayPics(){
    return pics.map(pic=>{
    
      return (
        <Col xs={6} md={4} className="m-3">
            <Image src={pic.download_url} width="200 " rounded />
        </Col>
      )
    })
  }
  return (
    <div className="App">
      <NavbarApp />

      <Container >
        <Row className="mt-5">
          <Col md="6">
            <h1>Exemple d'appel API </h1>
            <hr />

             <InputGroup className="mb-3">
              <FormControl
                placeholder="Saisir un nombre de photos"
                value={nbPic}
                onChange={(e)=>{setNbPic(e.target.value)}}
              />
                <InputGroup.Text>Nombre de Photos ({pics.length})</InputGroup.Text>
              </InputGroup>

              <Button variant="info" onClick={getDatas}>Cliquez moi</Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {displayPics()}
        </Row>
      </Container>
    </div>
  );
}


