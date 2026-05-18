type ProfileCardProps = {
  type: "basic" | "advanced";
  name: string;
  email?: string;
};

export default function Component({ type, name, email }: ProfileCardProps) {
  const alertType = type === "basic" ? "success" : "danger";
  const backgroundColor = type === "basic" ? "green" : "red";

  return (
    <div
      className={`alert alert-${alertType}`}
      style={{
        backgroundColor,
        color: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}>
      <h2>{name}</h2>
      {email && <p>{email}</p>}
    </div>
  );
}
