import Container from "react-bootstrap/Container";
import Cabecera from "../components/Sell/Cabecera";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input } from "../components/Input";
import DropzoneImg from "../components/Sell/Dropzone";

function Sell() {
  return (
    <Container as="main">
      <Cabecera />
      <Row as="section" className="justify-content-md-center">
        <Col md="10" className="order-md-1 gap-2">
          <Form>
            <h2>Información del producto</h2>
            <Row>
              <Input as={Col} md="6" name="productName">
                <Form.Label>Nombre</Form.Label>
                <Input.Control required type="text" />
              </Input>
            </Row>
            <Row>
              <Col md="8">
                <DropzoneImg />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Sell;
