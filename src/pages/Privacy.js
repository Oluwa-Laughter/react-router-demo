const data = [
  {
    id: 1,
    title: "Data Collection",
    text: "We do not collect any data from our users.",
  },
  {
    id: 2,
    title: "Page",
    text: "We do not collect any data from our users.",
  },
  {
    id: 3,
    title: "Test",
    text: "We do not collect any data from our users.",
  },
  {
    id: 4,
    title: "Demo",
    text: "We do not collect any data from our users.",
  },
];

export default function Privacy() {
  const objData = data;
  return (
    <ul>
      {objData.map((data) => (
        <List newData={data} key={data.id} />
      ))}
    </ul>
  );
}

function List({ newData }) {
  return (
    <li>
      <h3>{newData.title}</h3>
      <p>{newData.text}</p>
    </li>
  );
}
