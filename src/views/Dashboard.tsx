import { AtAGlance } from "../components/AtAGlance"
import { Schedule } from "../components/Calendar"

export function Dashboard() {
    return (
        <>
            <section className="above-the-fold">
                <div className="at-a-glance">
                    <AtAGlance />
                </div>
                <div className="calendar">
                    <Schedule />
                </div>
            </section>
            <section className="charts"></section>
        </>
    )
}
