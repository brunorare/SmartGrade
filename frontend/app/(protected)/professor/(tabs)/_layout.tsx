import { Tabs } from "expo-router";

export default function ProfessorTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="CriarRubrica"
        options={{
          title: "Rubrica",
        }}
      />

      <Tabs.Screen
        name="listarAtividades"
        options={{
          title: "Atividades",
        }}
      />

      <Tabs.Screen
        name="Feedback"
        options={{
          title: "Feedback",
        }}
      />
    </Tabs>
  );
}