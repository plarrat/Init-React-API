import './App.css';
import {useState} from "react"
import NavbarApp from "./components/NavbarApp"
import { Container, Row, Col, InputGroup, FormControl, Button, Image } from "react-bootstrap"

export default function App() {

  const [nbPic, setNbPic] = useState(1)
  const [produit, setProduit] = useState({})

  function getDatas(){
    let url = `https://world.openfoodfacts.org/api/v0/product/3229820791074.json`

    fetch(url).then(function(res){
      return res.json()
    }).then(function(datas){
      setProduit(datas)
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
                onChange={e=>setNbPic(e.target.value)}
              />
                <InputGroup.Text>Nombre de Photos {produit.length}</InputGroup.Text>
              </InputGroup>

              <Button variant="info" onClick={getDatas}>Cliquez moi</Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {(produit.product != null) &&
            <Col xs={6} md={4} className="m-3">
              <h3>{produit.product.brands}</h3>
              <h3>{produit.product.prodcut_name_fr}</h3>
              <Image src={produit.product.image_small_url} width="200 " rounded />
            </Col>
          }
        </Row>
      </Container>
    </div>
  );
}


