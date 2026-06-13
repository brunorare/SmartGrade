import { Slot, Redirect } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function ProfessorLayout() {
  const { roleUser } = useContext(AuthContext);

  if (roleUser !== "PROFESSOR") {
    return <Redirect href="/(protected)" />;
  }

  return <Slot />;
}