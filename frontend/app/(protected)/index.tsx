import { Redirect } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function ProtectedIndex() {
  const { roleUser } = useContext(AuthContext);

  if (roleUser === "PROFESSOR") {
    return <Redirect href="/(protected)/professor/(tabs)" />;
  }

  return <Redirect href="/(protected)/aluno/(tabs)" />;
}