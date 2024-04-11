import image from "../img/logo.png";

const items = ["File", "Edit", "View", "Special"];

export default function Navlist() {
  return (
    <div>
      <ul className="flex gap-8 align-middle">
        <li>
          <img alt="logo" src={image} className="h-6 pl-6"/>
        </li>
        {items.map((item, index) => (
          <li key={index} className="font-chicago">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
