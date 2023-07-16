import React, { useContext, useId } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

function Coso({ children }) {
  return (
    <div className="row justify-content-center mb-1">
      <div className="col-12 col-sm-9 col-md-4">{children}</div>
    </div>
  );
}

function LoginForm() {
  let navigate = useNavigate();
  const { iniciarSesion: login, guardarDatos } = useContext(LoginContext);
  const [mailID, contrasennaID] = [useId(), useId()];

  const iniciarSesion = (e) => {
    let { target: form } = e;
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
    } else {
      const datos = Object.fromEntries(new FormData(form));
      guardarDatos(datos);
      login({ email: datos.email });
      navigate("/");
    }
  };

  return (
    <>
      <form noValidate onSubmit={iniciarSesion}>
        <h1>Inicio de sesión</h1>

        <Coso>
          <label htmlFor={mailID}>e-mail</label>
        </Coso>
        <Coso>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            id={mailID}
            defaultValue=""
            required
          />
          <div className="invalid-feedback">Ingrese un e-mail válido</div>
        </Coso>

        <Coso>
          <label htmlFor={contrasennaID}>Contraseña</label>
        </Coso>
        <Coso>
          <input
            className="form-control"
            type="password"
            name="contrasenna"
            placeholder="Contraseña"
            id={contrasennaID}
            defaultValue=""
            required
          />
          <div className="invalid-feedback">Ingrese una contraseña válida.</div>
        </Coso>
        <Coso>
          <input className="btn btn-primary" type="submit" value="Ingresar" />
        </Coso>
      </form>
    </>
  );
}

export default LoginForm;
