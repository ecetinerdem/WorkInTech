export default function UserList({ users }) {
  return (
    <div className="side-container">
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.adsoyad}</li>
        ))}
      </ul>
    </div>
  );
}
