import { Link } from "react-router";
import { HiPencil, HiTrash } from "react-icons/hi";

// TODO: programatically change date field...if the status is interviewing, show interview date. If the status is rejected, show reject date.

const mockApp = {
  id: 0,
  title: "Junior Developer",
  company: "Some Random Software Company",
  industry: "IT",
  status: "Applied",
  applyDate: "2024-12-15",
  interviewDate: "",
  rejectDate: "",
  notes: "These are some notes about this job application.\nIt has line breaks!",
};

export function Applications() {
  return (
    <>
      <div className="filters"></div>
      <div className="applist">
        {/* App list item */}
        <div className="applist-item">
          <div className="applist-item__info">
            <div className="applist-item__info__title">
              <Link to="">{mockApp["title"]}</Link>
            </div>
            <div className="applist-item__info__company">{mockApp["company"]}</div>
          </div>
          <div className="applist-item__status reject">{mockApp["status"]}</div>
          <div className="applist-item__date">
            <div className="applist-item__date__title">Date Applied:</div>
            <div className="applist-item__date__date">{mockApp["applyDate"]}</div>
          </div>
          <div className="applist-item__notes">{mockApp["notes"]}</div>
          <div className="applist-item__buttons">
            <Link to="">
              <HiPencil />
            </Link>
            <Link to="">
              <HiTrash />
            </Link>
          </div>
        </div>
        {/* End App list item */}

        {/* App list item */}
        <div className="applist-item">
          <div className="applist-item__info">
            <div className="applist-item__info__title">
              <Link to="">{mockApp["title"]}</Link>
            </div>
            <div className="applist-item__info__company">{mockApp["company"]}</div>
          </div>
          <div className="applist-item__status reject">{mockApp["status"]}</div>
          <div className="applist-item__date">
            <div className="applist-item__date__title">Date Applied:</div>
            <div className="applist-item__date__date">{mockApp["applyDate"]}</div>
          </div>
          <div className="applist-item__notes">{mockApp["notes"]}</div>
          <div className="applist-item__buttons">
            <Link to="">
              <HiPencil />
            </Link>
            <Link to="">
              <HiTrash />
            </Link>
          </div>
        </div>
        {/* End App list item */}
      </div>
    </>
  );
}
