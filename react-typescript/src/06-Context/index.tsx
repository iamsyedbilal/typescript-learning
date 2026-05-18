import { ThemeProvider, useTheme } from "./Context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const theme = useTheme();

  const isDark = theme.theme === "dark";

  return (
    <div
      style={{
        backgroundColor: isDark ? "#111" : "#fff",
        color: isDark ? "#fff" : "#111",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}>
      <button
        onClick={() => {
          if (theme.theme === "dark") {
            theme.setTheme("light");
            return;
          }

          theme.setTheme("dark");
        }}
        style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: isDark ? "#fff" : "#111",
          color: isDark ? "#111" : "#fff",
          fontSize: "16px",
        }}>
        Current Theme: {theme.theme}
      </button>
    </div>
  );
}

export default ParentComponent;
