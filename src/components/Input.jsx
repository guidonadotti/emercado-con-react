import { createContext, forwardRef, useContext, useId } from "react";
import Form from "react-bootstrap/Form";

const InputContext = createContext();

export const Input = forwardRef(({ name, children, ...props }, ref) => (
  <Form.Group ref={ref} controlId={`${name}_${useId()}`} {...props}>
    <InputContext.Provider value={{ name }}>{children}</InputContext.Provider>
  </Form.Group>
));

Input.Control = forwardRef(function (props, ref) {
  const { name } = useContext(InputContext);

  return <Form.Control ref={ref} name={name} {...props} />;
});
