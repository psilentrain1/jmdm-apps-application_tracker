import { AtAGlance } from "../components/AtAGlance"
import { Schedule } from "../components/Calendar"
import { Charts } from "../components/Charts"

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
            <section className="charts">
                <Charts />
            </section>
        </>
    )
}
