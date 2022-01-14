const Admin = (props) => {
  return (
    <div className="admin">
      {props.user && props.user.roles.includes("admin") ? (
        <h2 className="admin">Admin</h2>
      ) : (
        <h2 className="admin">You are not allowed here!</h2>
      )}
    </div>
  );
};

export default Admin;
