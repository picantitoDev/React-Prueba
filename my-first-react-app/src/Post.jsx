import { VscBug, VscGlobe } from "react-icons/vsc";

const users = [
  { id: 1, name: "Piero", image: null },
  { id: 2, name: "Ivan", image: "http://robohash.org/user2" },
  { id: 3, name: "Ronald", image: "http://robohash.org/user3" },
];

function UserCard({ user }) {
  return (
    <article
      key={user.id}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.75rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "0.5rem",
      }}
    >
      {user.image ? (
        <img
          src={user.image}
          alt={`Avatar of ${user.name}`}
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      ) : (
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          <VscBug />
        </div>
      )}

      <div>
        <h2 style={{ margin: 0 }}>{user.name}</h2>
        {!user.image && (
          <span style={{ fontSize: "0.9rem", color: "#888" }}>
            Image not found
          </span>
        )}
      </div>
    </article>
  );
}

function Post() {
  return (
    <section>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default Post;
