import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,  
  },
  logo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2F5BB7",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
    color: "#333",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },

  scoreContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  innerCircle: {
    width: 145,
    height: 145,
    borderRadius: 80,
    backgroundColor: "#F4F5FA",
    justifyContent: "center",
    alignItems: "center",
  },

  score: {
    fontSize: 52,
    fontWeight: "900",
    color: "#000",
  },

  scoreLabel: {
    fontSize: 14,
    letterSpacing: 2,
    color: "#555",
  },

  title: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 32,
    fontWeight: "900",
    color: "#111",
  },

  description: {
    textAlign: "center",
    marginHorizontal: 30,
    marginTop: 12,
    fontSize: 18,
    lineHeight: 30,
    color: "#666",
  },

  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: 22,
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF3FF",
    marginRight: 14,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
  },

  bulletContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2F5BB7",
    marginTop: 8,
    marginRight: 10,
  },

  bulletText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 28,
    color: "#555",
  },

  quoteBox: {
    backgroundColor: "#F4F4F8",
    borderRadius: 18,
    flexDirection: "row",
    overflow: "hidden",
    paddingVertical: 20,
  },

  quoteBar: {
    width: 5,
    backgroundColor: "#3B43FF",
    marginRight: 14,
    marginLeft: 12,
    borderRadius: 10,
  },

  quoteText: {
    flex: 1,
    fontSize: 20,
    fontStyle: "italic",
    color: "#333",
    paddingRight: 18,
    lineHeight: 34,
  },

  button: {
    marginTop: 24,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "800",
  },

  statsTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 20,
    color: "#666",
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  statLabel: {
    fontSize: 18,
    color: "#444",
  },

  statValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111",
  },

  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#2F5BB7",
    borderRadius: 10,
  },

  imageCard: {
    marginHorizontal: 16,
    marginTop: 22,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 120,
  },

  image: {
    width: "100%",
    height: 240,
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.25)",
    padding: 16,
  },

  overlayText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  tabBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 14,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  tabItem: {
    alignItems: "center",
  },

  tabText: {
    marginTop: 4,
    color: "#999",
    fontSize: 12,
  },

  activeTab: {
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
  },

  activeTabText: {
    color: "#FFF",
    fontWeight: "700",
    marginTop: 4,
  },
});
