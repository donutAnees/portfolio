const item = ["File", "Edit", "View", "Special"];

export default function Navlist() {
  return (
    <div>
      <ul className="flex gap-3">
        {item.map((i, index) => {
          return (
            <div key={index}>
              {i}
            </div>
          );
        })}
      </ul>
    </div>
  );
}