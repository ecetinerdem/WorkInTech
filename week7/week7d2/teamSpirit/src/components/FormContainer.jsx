import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const initialForm = {
  adsoyad: '',
  email: '',
  departman: '',
  unvan: '',
  takim: '',
};

export default function FormContainer(props) {
  const { users, setUsers } = props;
  const [info, setInfo] = useState(initialForm);
  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  }

  function addUser(event) {
    event.preventDefault();
    axios
      .post('https://reqres.in/api/users', info)
      .then((response) => {
        setUsers((prevUsers) => [...prevUsers, response.data]);
        setInfo(initialForm);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  return (
    <Form onSubmit={addUser}>
      <FormGroup>
        <Label for="adsoyad">Ad Soyad</Label>
        <Input
          id="exampleadsoyad"
          name="adsoyad"
          placeholder="Çalışanın Tam adı ve Soyadı"
          type="text"
          onChange={handleChange}
          value={info.adsoyad}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Kurumsal email adresi"
          type="email"
          onChange={handleChange}
          value={info.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="departman">Departman</Label>
        <Input
          id="exampledepartman"
          name="departman"
          placeholder="Çalıştığı departman"
          type="text"
          onChange={handleChange}
          value={info.departman}
        />
      </FormGroup>
      <FormGroup>
        <Label for="unvan">Ünvan</Label>
        <Input
          id="exampleunvan"
          name="unvan"
          placeholder="Çalışanın Unvanı"
          type="text"
          onChange={handleChange}
          value={info.unvan}
        />
      </FormGroup>
      <FormGroup>
        <Label for="takim">Takım içi Görevleri</Label>
        <Input
          id="exampletakim"
          name="takim"
          placeholder="Çalışanın takım içerisindeki Görev Listesi"
          type="textarea"
          onChange={handleChange}
          value={info.takim}
        />
      </FormGroup>
      <Button color="secondary" type="submit">
        Kaydet
      </Button>
    </Form>
  );
}
