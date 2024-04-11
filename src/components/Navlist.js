const item = ["File", "Edit", "View", "Special"];

export default function Navlist() {
  return (
    <div>
      <ul className="flex gap-8">
        {item.map((i, index) => {
          return (
            <div key={index} className="font-chicago">
              {i}
            </div>
          );
        })}
      </ul>
    </div>
  );
}