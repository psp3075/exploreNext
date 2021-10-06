import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};

const users = (props) => {
  return (
    <div>
      <h1>All Users</h1>
      {props.users?.map((user) => (
        <div key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default users;
