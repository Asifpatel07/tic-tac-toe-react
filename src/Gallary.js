function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="" />;
}

const person = {
  name: "Asif Patel",
  theme: {
    background: "white",
    color: "violet",
  },
};
export default function Gallary() {
  return (
    <>
      <section>
        <div style={person.theme}>
          <h1>{person.name}</h1>
          <img className="avatar" src="" alt="" />
          <ul>
            <li>Believe</li>
            <li>Believe</li>
            <li>Believe</li>
          </ul>
        </div>
        <h1>Hey There!</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}
