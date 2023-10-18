import Link from "next/link";

export default function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "menu", name: "Menuel" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((item) => {
          return (
            <li key={item.name}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: item.id },
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
