import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(1 or -1);
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className="not-found">
      <h1>Wrong route !</h1>
      <h2>That page cannot be found. </h2>
      <p>
        Go back{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
