function BuggyComponent() {
  const throwError = () => {
    throw new Error("ეს არის ტესტური შეცდომა!");
  };

  return (
    <div>
      <h3>Buggy Component</h3>
      <button onClick={throwError}>შეცდომის გამოწვევა</button>
    </div>
  );
}