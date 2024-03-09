import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
  const [validationStates, setValidationStates] = useState({emailState: true, passwordState: true})
  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
  });

  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = (() => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
    const emailStateNew = formValues.email.includes('@');
    const passwordStateNew = regex.test(formValues.password);

    setValidationStates({
      ...validationStates,
      emailState: emailStateNew,
      passwordState: passwordStateNew
    });

    if (validationStates.passwordState && validationStates.emailState){
      console.log(validationStates)
      //Call fetch
      alert(JSON.stringify(formValues))
    }
    else{
      alert("Error en los datos")
    }
  })
  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
      <Form>
      <Form.Group className="mb-6 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} className={validationStates.emailState ? 'input-valid' : 'input-invalid'}/>
        {!validationStates.emailState && <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} className= {validationStates.passwordState ? 'input-valid' : 'input-invalid'}/>
        {!validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Favorite Class</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;
