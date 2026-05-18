import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  setStatus,
} from "./counterSlice";

export default function Component() {
  const count = useSelector((state: RootState) => state.counter.value);
  const status = useSelector((state: RootState) => state.counter.status);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}>
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "350px",
        }}>
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "10px",
            color: "#222",
          }}>
          Counter: {count}
        </h1>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
            color:
              status === "active"
                ? "green"
                : status === "inactive"
                  ? "orange"
                  : "gray",
            fontWeight: "bold",
          }}>
          Status: {status}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}>
          <button
            onClick={() => dispatch(increment())}
            style={buttonStyle("#4CAF50")}>
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            style={buttonStyle("#f44336")}>
            Decrement
          </button>

          <button onClick={() => dispatch(reset())} style={buttonStyle("#555")}>
            Reset
          </button>

          <button
            onClick={() => dispatch(incrementByAmount(5))}
            style={buttonStyle("#2196F3")}>
            Increment by 5
          </button>

          <button
            onClick={() =>
              dispatch(setStatus(status === "active" ? "inactive" : "active"))
            }
            style={buttonStyle("#9C27B0")}>
            Set Status Active
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (bgColor: string): React.CSSProperties => ({
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: bgColor,
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.2s ease",
});
