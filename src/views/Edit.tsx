import { useParams } from "react-router";

const SERVER_URL = "localhost:3000";

export function Edit() {
  let { appid } = useParams();
  return (
    <>
      <h1>{appid == "new" ? `New Application` : `Edit Application`}</h1>
      <form id="edit_form" method="post" action={`${SERVER_URL}/edit`}>
        <div>
          <label htmlFor="title">Job Title: </label>
          <input type="text" name="title" id="title" required />
        </div>
        <div>
          <label htmlFor="company">Company: </label>
          <input type="text" name="company" id="company" required />
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input type="text" name="location" id="location" />
        </div>
        <div>
          <label htmlFor="type">Type: </label>
          <select name="type" id="type" required>
            <option value="On Prem">On Prem</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label htmlFor="industry">Industry: </label>
          <input type="text" name="industry" id="industry" />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select name="status" id="status" required>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div>
          <label htmlFor="apply_date">Date Applied: </label>
          <input type="date" name="apply_date" id="apply_date" />
        </div>
        <div>
          <label htmlFor="interview_date">Interview Date: </label>
          <input type="date" name="interview_date" id="interview_date" />
        </div>
        <div>
          <label htmlFor="reject_date">Date Rejected: </label>
          <input type="date" name="reject_date" id="reject_date" />
        </div>
        <div>
          <label htmlFor="notes">Notes: </label>
          <textarea name="notes" id="notes"></textarea>
        </div>
        <div>
          <button type="button">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </>
  );
}
