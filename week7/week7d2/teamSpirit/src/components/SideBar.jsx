import UserList from './UserList';

export default function SideBar(props) {
  const { users, setUsers } = props;

  return (
    <div className="side-container">
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}
