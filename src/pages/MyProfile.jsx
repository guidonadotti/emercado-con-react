import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Upload } from "upload-js";
import Spinner from "../components/Spinner";
import useWindowTitle from "../hooks/useWindowTitle";
import { LoginContext } from "../contexts/LoginContext";
import { ProfileContext } from "../contexts/ProfileContext";
import {
  Email,
  ImgPerfil,
  NombreDeUsuario,
  PrimerApellido,
  PrimerNombre,
  SegundoApellido,
  SegundoNombre,
  Telefono,
} from "../components/MyProfile/Inputs";
import "../css/myprofile.css";

const upload = Upload({ apiKey: "free" });

function formDataToObject(formData) {
  const nonEmptyFormData = {};

  formData.forEach((value, key) => {
    if (value instanceof File) {
      if (value.size > 0) {
        nonEmptyFormData[key] = value;
      }
    } else if (value !== "") {
      nonEmptyFormData[key] = value;
    }
  });

  return nonEmptyFormData;
}

function MyProfile() {
  useWindowTitle({ windowTitle: "Mi perfil" });

  const { user, getUserData, setUserData } = useContext(LoginContext);
  const { imgInput, names } = useContext(ProfileContext);
  const { imgPerfilName, nombreDeUsuarioName } = names;
  const nombreDeUsuario = getUserData({
    email: user,
    data: nombreDeUsuarioName,
  });

  const [validated, setValidated] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(false);
    const formData = formDataToObject(new FormData(form));

    if (imgInput.current.files.length > 0) {
      try {
        const { fileUrl } = await upload.uploadFile(imgInput.current.files[0], {
          onProgress: () => setShowSpinner(true),
        });
        formData[imgPerfilName] = fileUrl;
      } catch (error) {
        alert(`Error!\n${error.message}`);
        formData[imgPerfilName] = "";
      }
    }
    setShowSpinner(false);
    setUserData({ email: user, data: formData });
  }

  return (
    <Container as="main" className="my-3">
      {showSpinner && <Spinner />}
      <section className="d-flex justify-content-between ">
        <h1>Mi Perfil</h1>
        <img
          src={
            getUserData({ email: user, data: imgPerfilName }) ||
            require("../img/img_perfil.png")
          }
          className="img-perfil align-self-center"
          alt={`Imagen de perfil de ${nombreDeUsuario}`}
        />
      </section>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row as="section" className="gy-3">
          <PrimerNombre />
          <SegundoNombre />
          <PrimerApellido />
          <SegundoApellido />
          <Email />
          <Telefono />
          <ImgPerfil />
          <NombreDeUsuario />
        </Row>
        <hr />
        <Button type="submit">Guardar cambios</Button>
      </Form>
    </Container>
  );
}

export default MyProfile;
