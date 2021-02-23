const PeopleList = (props) => {
  return (
    <ul>
      {props.people.map((person, index) => (
        <li key={index}>
            <p><strong>Name:</strong> {person.firstName} {person.lastName}</p>
            <p><strong>Email:</strong> <a href="www.gmail.com">{person.email}</a></p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Address:</strong> {person.address.streetAddress}</p>
            <p>{person.address.zipCode}, {person.address.city} {person.address.state}</p>
            <p>{person.address.country}</p>
            </li>
      ))}
    </ul>
  );
};

export default PeopleList;
