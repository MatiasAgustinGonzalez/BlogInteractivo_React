export default function CartWidget() {
  const guardados = 3;

  return (
    <button
      aria-label="Artículos guardados"
      style={{
        position: "relative",
        border: "1px solid #e5e7eb",
        background: "#fff",
        borderRadius: "999px",
        padding: "6px 8px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Ícono tipo bookmark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6 2h12a1 1 0 0 1 1 1v18.382a1 1 0 0 1-1.555.832L12 18.2l-5.445 4.014A1 1 0 0 1 5 21.382V3a1 1 0 0 1 1-1z" />
      </svg>

      {/* Badge */}
      <span
        style={{
          position: "absolute",
          top: -6,
          right: -6,
          background: "#0ea5e9",
          color: "#fff",
          borderRadius: "999px",
          padding: "2px 6px",
          fontSize: 12,
          lineHeight: 1,
          fontWeight: 600,
        }}
      >
        {guardados}
      </span>
    </button>
  );
}
