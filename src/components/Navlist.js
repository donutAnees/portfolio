import image from "../img/logo.png";

const items = ["File", "Edit", "View", "Special"];

export default function Navlist() {
  return (
    <div>
      <ul className="flex gap-6">
        <li>
          <img alt="logo" src={image} className="h-4 ml-4" />
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className="font-chicago text-xs relative cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
