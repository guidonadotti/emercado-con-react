import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../css/myprofile.css";
import useWindowTitle from "../hooks/useWindowTitle";
import { Button } from "react-bootstrap";
import { LoginContext } from "../contexts/LoginContext";
import { Upload } from "upload-js";
import Spinner from "../components/Spinner";

const InputContext = createContext();

const Input = forwardRef(({ name, children, ...props }, ref) => (
  <Form.Group
    ref={ref}
    as={Col}
    md="5"
    controlId={`${name}_${useId()}`}
    {...props}
  >
    <InputContext.Provider value={{ name }}>{children}</InputContext.Provider>
  </Form.Group>
));

Input.Control = forwardRef(function (props, ref) {
  const { users, user } = useContext(LoginContext);
  const userData = users[user];
  const { name } = useContext(InputContext);

  return (
    <Form.Control
      ref={ref}
      name={name}
      defaultValue={userData[name]}
      {...props}
    />
  );
});

const upload = Upload({ apiKey: "free" });

function MyProfile() {
  useWindowTitle({ windowTitle: "Mi perfil" });
  const { users, user, getUserData, setUserData } = useContext(LoginContext);
  const usersArray = Object.keys(users).filter((mail) => mail !== user);

  const [validated, setValidated] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const imgInput = useRef();
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(false);
    const formData = Object.fromEntries(new FormData(form));

    if (imgInput.current.files.length > 0) {
      try {
        const { fileUrl } = await upload.uploadFile(imgInput.current.files[0], {
          onProgress: ({ progress }) => setShowSpinner(true),
        });
        formData["img_perfil"] = fileUrl;
      } catch (error) {
        alert(`Error!\n${error.message}`);
      }
    }
    setShowSpinner(false);
    setUserData({ email: user, data: formData });
  }

  const mailInputRef = useRef();
  const [mailValidationMessage, setMailValidationMessage] = useState("");

  useEffect(() => {
    mailInputRef.current.setCustomValidity(mailValidationMessage);
  }, [mailValidationMessage]);

  function handleEmailChange(e) {
    const { value } = e.target;
    setMailValidationMessage(() => {
      if (usersArray.includes(value)) return "Este mail ya está en uso.";
      return "";
    });
  }

  return (
    <Container as="main" className="my-3">
      {showSpinner && <Spinner />}
      <section className="d-flex justify-content-between ">
        <h1>Mi Perfil</h1>
        <img
          src={
            getUserData({ email: user, data: "img_perfil" }) ||
            require("../img/img_perfil.png")
          }
          className="img-perfil align-self-center"
          alt="Imagen de perfil"
        />
      </section>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row as="section" className="gy-3">
          <Input name="primer_nombre">
            <Form.Label className="required">Primer Nombre</Form.Label>
            <Input.Control required type="text" />
            <Form.Control.Feedback type="invalid">
              Debe ingresar su primer nombre
            </Form.Control.Feedback>
          </Input>

          <Input name="segundo_nombre">
            <Form.Label>Segundo Nombre</Form.Label>
            <Input.Control type="text" />
          </Input>

          <Input name="primer_apellido">
            <Form.Label className="required">Primer Apellido</Form.Label>
            <Input.Control required type="text" />
            <Form.Control.Feedback type="invalid">
              Debe ingresar su primer apellido
            </Form.Control.Feedback>
          </Input>

          <Input name="segundo_apellido">
            <Form.Label>Segundo Apellido</Form.Label>
            <Input.Control type="text" />
          </Input>

          <Input name="email">
            <Form.Label className="required">E-mail</Form.Label>
            <Input.Control
              ref={mailInputRef}
              onChange={handleEmailChange}
              required
              type="email"
            />
            <Form.Control.Feedback type="invalid">
              {mailValidationMessage || "Debe ingresar un email válido"}
            </Form.Control.Feedback>
          </Input>

          <Input name="telefono">
            <Form.Label>Teléfono de contacto</Form.Label>
            <Input.Control type="text" />
          </Input>

          <Input name="img_perfil">
            <Form.Label>Foto de perfil</Form.Label>
            <Input.Control type="file" defaultValue={null} ref={imgInput} />
          </Input>

          <Input name="nombre_de_usuario">
            <Form.Label className="required">Nombre de usuario</Form.Label>
            <Input.Control type="text" required pattern="\w{3,16}" />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un nombre de usuario válido.
            </Form.Control.Feedback>
          </Input>
        </Row>
        <hr />
        <Button type="submit">Guardar cambios</Button>
      </Form>
    </Container>
  );
}

export default MyProfile;
