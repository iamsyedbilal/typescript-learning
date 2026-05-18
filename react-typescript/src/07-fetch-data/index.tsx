import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./types";

export default function Component() {
  const {
    data: tours = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchData,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "40px",
          color: "#222",
        }}>
        Tours
      </h2>

      {isPending && (
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#555",
          }}>
          Loading...
        </p>
      )}

      {isError && (
        <p
          style={{
            color: "white",
            backgroundColor: "red",
            padding: "12px",
            borderRadius: "8px",
            textAlign: "center",
            maxWidth: "400px",
            margin: "0 auto 20px",
          }}>
          {error.message}
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
        {tours?.map((tour) => (
          <div
            key={tour.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease",
            }}>
            <img
              src={tour.image}
              alt={tour.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    color: "#222",
                  }}>
                  {tour.name}
                </h3>

                <span
                  style={{
                    backgroundColor: "#e0f7f1",
                    color: "#009879",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}>
                  ${tour.price}
                </span>
              </div>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.6",
                  fontSize: "15px",
                }}>
                {tour.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
