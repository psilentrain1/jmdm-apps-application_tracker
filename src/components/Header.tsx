export function Header() {
  return (
    <>
      <header>
        <div className="search" style={{ width: "85%", textAlign: "center" }}>
          <form action="">
            <input type="search" name="search" id="search" />
            <input type="button" value="search" />
          </form>
        </div>
        <button type="button">+ Add</button>
      </header>
    </>
  );
}
