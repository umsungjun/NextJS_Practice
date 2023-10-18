import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    router.replace("/clients/max/projectA"); // push는 이전 페이지로 이동할 수 있고 replace는 이전 페이지로 못돌아감
  };
  return (
    <div>
      <h1>The Project of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
