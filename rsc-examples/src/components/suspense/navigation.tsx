export default function Navigation() {
  return (
    <nav>
      <ul className="flex justify-around border-b-2 mb-2">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#content">Users</a>
        </li>
        <li>
          <a href="#recommended">About</a>
        </li>
      </ul>
    </nav>
  );
}
