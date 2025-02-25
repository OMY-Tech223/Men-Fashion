import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ConfirmPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      // Call the backend confirmation endpoint
      fetch(`http://localhost:3000/confirm?token=${token}`)
        .then((response) => response.text())
        .then((message) => alert(message))
        .catch((error) => alert("Confirmation failed."));
    }
  }, [token]);

  return <div>Confirming your account...</div>;
};

export default ConfirmPage;