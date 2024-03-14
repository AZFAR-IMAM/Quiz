function ErrorMessage({ children }) {
  return (
    <div
      style={{
        width: "80%",
        marginBottom: 15,
        padding: 10,
        color: "white",
        backgroundColor: "orangered",
        textTransform: "capitalize",
      }}
    >
      ⚠ {children}
    </div>
  );
}

export default ErrorMessage;
