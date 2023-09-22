import { useContext, useEffect, useRef, useState } from "react";
import { Input } from "../Input";
import Form from "react-bootstrap/Form";
import { ProfileContext } from "../../contexts/ProfileContext";
import { LoginContext } from "../../contexts/LoginContext";

export function PrimerNombre() {
  const { userData, colProps } = useContext(ProfileContext);
  const name = "primer_nombre";

  return (
    <Input name={name} {...colProps}>
      <Form.Label className="required">Primer Nombre</Form.Label>
      <Input.Control required type="text" defaultValue={userData[name]} />
      <Form.Control.Feedback type="invalid">
        Debe ingresar su primer nombre
      </Form.Control.Feedback>
    </Input>
  );
}

export function SegundoNombre() {
  const { userData, colProps } = useContext(ProfileContext);
  const name = "segundo_nombre";
  return (
    <Input name={name} {...colProps}>
      <Form.Label>Segundo Nombre</Form.Label>
      <Input.Control type="text" defaultValue={userData[name]} />
    </Input>
  );
}

export function PrimerApellido() {
  const { userData, colProps } = useContext(ProfileContext);
  const name = "primer_apellido";

  return (
    <Input name={name} {...colProps}>
      <Form.Label className="required">Primer Apellido</Form.Label>
      <Input.Control required type="text" defaultValue={userData[name]} />
      <Form.Control.Feedback type="invalid">
        Debe ingresar su primer apellido
      </Form.Control.Feedback>
    </Input>
  );
}

export function SegundoApellido() {
  const { userData, colProps } = useContext(ProfileContext);
  const name = "segundo_apellido";
  return (
    <Input name={name} {...colProps}>
      <Form.Label>Segundo Apellido</Form.Label>
      <Input.Control type="text" defaultValue={userData[name]} />
    </Input>
  );
}

export function Email() {
  const { userData, colProps } = useContext(ProfileContext);
  const { users, user } = useContext(LoginContext);

  const usersArray = Object.keys(users).filter((mail) => mail !== user);

  const name = "email";

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
    <Input name={name} {...colProps}>
      <Form.Label className="required">E-mail</Form.Label>
      <Input.Control
        ref={mailInputRef}
        onChange={handleEmailChange}
        required
        type="email"
        defaultValue={userData[name]}
      />
      <Form.Control.Feedback type="invalid">
        {mailValidationMessage || "Debe ingresar un email válido"}
      </Form.Control.Feedback>
    </Input>
  );
}
export function Telefono() {
  const { userData, colProps } = useContext(ProfileContext);
  const name = "telefono";
  return (
    <Input name={name} {...colProps}>
      <Form.Label>Teléfono de contacto</Form.Label>
      <Input.Control type="text" defaultValue={userData[name]} />
    </Input>
  );
}

export function ImgPerfil() {
  const { colProps, imgInput, names } = useContext(ProfileContext);
  const { imgPerfilName: name } = names;
  return (
    <Input name={name} {...colProps}>
      <Form.Label>Foto de perfil</Form.Label>
      <Input.Control accept="image/*" type="file" ref={imgInput} />
    </Input>
  );
}

export function NombreDeUsuario() {
  const { userData, colProps, names } = useContext(ProfileContext);
  const { NombreDeUsuarioName: name } = names;
  return (
    <Input name={name} {...colProps}>
      <Form.Label className="required">Nombre de usuario</Form.Label>
      <Input.Control
        type="text"
        required
        pattern="\w{3,16}"
        defaultValue={userData[name]}
      />
      <Form.Control.Feedback type="invalid">
        Debe ingresar un nombre de usuario válido.
      </Form.Control.Feedback>
    </Input>
  );
}
