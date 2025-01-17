import { Link } from "react-router";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useEffect } from "react";
import axios from "axios";

// TODO: programatically change date field...if the status is interviewing, show interview date. If the status is rejected, show reject date.

const mockApp = {
  id: 0,
  title: "Junior Developer",
  company: "Some Random Software Company",
  location: "Richmond, VA",
  type: "Remote",
  industry: "IT",
  status: "Applied",
  applyDate: "2024-12-15",
  interviewDate: "",
  rejectDate: "",
  notes: "These are some notes about this job application.\nIt has line breaks!",
};

export function Applications() {
  useEffect(() => {
    axios.get("http://localhost:3000/applications/").then(({ data }) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <div className="filters">
        <div className="sort">
          <span>Sort by:</span>
          <select name="appsort" id="appsort"></select>
          <input type="checkbox" name="appsortdir" id="appsortdir" />
        </div>
        <div className="filter">
          <span>Filter by:</span>
          <select name="appfilterfield" id="appfilterfield"></select>
          <select name="appfilterfilter" id="appfilterfilter"></select>
        </div>
      </div>
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
          <div className="applist-item__location">
            <div className="applist-item__location__type">{mockApp["type"]}</div>
            <div className="applist-item__location__city">{mockApp["location"]}</div>
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
          <div className="applist-item__location">
            <div className="applist-item__location__type">{mockApp["type"]}</div>
            <div className="applist-item__location__city">{mockApp["location"]}</div>
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
