import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ConfirmPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      fetch(`/confirm?token=${token}`)
        .then((response) => response.text())
        .then((message) => alert(message))
        .catch((error) => alert("Confirmation failed."));
    }
  }, [token]);

  return <div>Confirming your account...</div>;
};
const handleSignup = async () => {
    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      }),
    });
  
    if (response.ok) {
      alert("Please check your email to confirm your account.");
    } else {
      alert("Signup failed. Please try again.");
    }
  };
export default ConfirmPage;