import { useParams } from "react-router";

const SERVER_URL = "localhost:3000";

export function Edit() {
  let { appid } = useParams();
  return (
    <>
      <div className="edit">
        <h1>{appid == "new" ? `New Application` : `Edit Application`}</h1>
        <form id="edit_form" method="post" action={`${SERVER_URL}/edit`}>
          <div className="form__container">
            <div className="form__container__left">
              <div className="input-group">
                <label className="required" htmlFor="title">
                  Job Title:{" "}
                </label>
                <input type="text" name="title" id="title" required />
              </div>
              <div className="input-group">
                <label className="required" htmlFor="company">
                  Company:{" "}
                </label>
                <input type="text" name="company" id="company" required />
              </div>
              <div className="input-group">
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" id="location" />
              </div>
              <div className="input-group">
                <label className="required" htmlFor="type">
                  Type:{" "}
                </label>
                <select name="type" id="type" required>
                  <option value="On Prem">On Prem</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="industry">Industry: </label>
                <input type="text" name="industry" id="industry" />
              </div>
            </div>
            <div className="form__container__right">
              <div className="input-group">
                <label className="required" htmlFor="status">
                  Status:{" "}
                </label>
                <select name="status" id="status" required>
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="apply_date">Date Applied: </label>
                <input type="date" name="apply_date" id="apply_date" />
              </div>
              <div className="input-group">
                <label htmlFor="interview_date">Interview Date: </label>
                <input type="date" name="interview_date" id="interview_date" />
              </div>
              <div className="input-group">
                <label htmlFor="reject_date">Date Rejected: </label>
                <input type="date" name="reject_date" id="reject_date" />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="notes">Notes: </label>
            <textarea name="notes" id="notes"></textarea>
          </div>
          <div className="edit-buttons">
            <button type="button">Save</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}
