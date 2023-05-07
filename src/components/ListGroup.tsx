function ListGroup() {
  const items = ['New York', 'Paris', 'London', 'Moscow', 'Beijing'];

  return (
    <>
      <h1>List</h1>
      <ul className='list-group'>
        {items.map((item) => (
          <li className='list-group-item' key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
