export function Footer() {
  const date = new Date();

  return (
    <>
      <footer>
        <span>&copy; {date.getFullYear()} James M. Drake, Jr. All rights reserved.</span>
        <a href="https://github.com/psilentrain1/jmdm-apps-application_tracker/issues" target="_blank">
          Report an issue.
        </a>
      </footer>
    </>
  );
}
