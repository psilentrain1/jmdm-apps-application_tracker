import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { applicationData } from "../types/applications.types"
import { SERVER_URL } from "../util/server"
import { useGetApplication } from "../hooks/useGetApplication"
import { useUpdateApplication } from "../hooks/useUpdateApplication"
import toast from "react-hot-toast"

export function Edit() {
    const { appid } = useParams()
    const navigate = useNavigate()
    const [entryData, setEntryData] = useState<applicationData>({
        title: "",
        company: "",
        location: "",
        type: "On Prem",
        industry: "",
        status: "Applied",
        apply_date: "",
        interview_date: "",
        reject_date: "",
        notes: "",
    })

    const { data, isLoading } = useGetApplication(appid || "")
    const { updateApplication, updateResponse } = useUpdateApplication()

    useEffect(() => {
        if (appid != "new") {
            if (!isLoading) {
                setEntryData(data)
            }
        }
    }, [appid, data, isLoading])

    useEffect(() => {
        if (updateResponse == "ok") {
            toast.success("Application updated")
            navigate("/applications")
        }
    }, [updateResponse])

    function cancelEdit() {
        toast.error("Edit cancelled")
        navigate("/applications")
    }

    if (appid != "new" && isLoading) return <h2>Loading...</h2>

    return (
        <>
            <div className="edit">
                <h1>
                    {appid == "new" ? `New Application` : `Edit Application`}
                </h1>
                <form
                    id="edit_form"
                    method="post"
                    action={`${SERVER_URL}/applications/2`}
                    target="_blank"
                >
                    <div className="form__container">
                        <div className="form__container__left">
                            <div className="input-group">
                                <label className="required" htmlFor="title">
                                    Job Title:{" "}
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={entryData.title || ""}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            title: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="required" htmlFor="company">
                                    Company:{" "}
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={entryData.company || ""}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            company: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="location">Location: </label>
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={entryData.location || ""}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            location: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="input-group">
                                <label className="required" htmlFor="type">
                                    Type:{" "}
                                </label>
                                <select
                                    name="type"
                                    id="type"
                                    value={entryData.type}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            type: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option value="On Prem">On Prem</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="industry">Industry: </label>
                                <input
                                    type="text"
                                    name="industry"
                                    id="industry"
                                    value={entryData.industry || ""}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            industry: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form__container__right">
                            <div className="input-group">
                                <label className="required" htmlFor="status">
                                    Status:{" "}
                                </label>
                                <select
                                    name="status"
                                    id="status"
                                    value={entryData.status}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            status: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option value="Applied">Applied</option>
                                    <option value="Interview">Interview</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="apply_date">
                                    Date Applied:{" "}
                                </label>
                                <input
                                    type="date"
                                    name="apply_date"
                                    id="apply_date"
                                    value={entryData.apply_date || ""}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            apply_date: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="interview_date">
                                    Interview Date:{" "}
                                </label>
                                <input
                                    type="date"
                                    name="interview_date"
                                    id="interview_date"
                                    value={entryData.interview_date || ""}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            interview_date: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="reject_date">
                                    Date Rejected:{" "}
                                </label>
                                <input
                                    type="date"
                                    name="reject_date"
                                    id="reject_date"
                                    value={entryData.reject_date || ""}
                                    onChange={(e) =>
                                        setEntryData({
                                            ...entryData,
                                            reject_date: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="notes">Notes: </label>
                        <textarea
                            name="notes"
                            id="notes"
                            value={entryData.notes}
                            onChange={(e) =>
                                setEntryData({
                                    ...entryData,
                                    notes: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                    <div className="edit-buttons">
                        <button
                            type="button"
                            onClick={() => {
                                updateApplication(appid || "", entryData)
                            }}
                        >
                            Save
                        </button>
                        <button
                            id="edit_cancel"
                            type="button"
                            onClick={cancelEdit}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
