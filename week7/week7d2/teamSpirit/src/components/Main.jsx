import FormContainer from './FormContainer';

export default function Main(props) {
  const { users, setUsers } = props;

  return (
    <div className="products-container">
      <FormContainer users={users} setUsers={setUsers} />
    </div>
  );
}
