import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

class Calendar extends Component {
    render() {
        return (
            <div className="calendar">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
                        {title: 'Bud Tour Amateur 9 Ball',
                         daysOfWeek: ['4'],
                         startTime: '18:00:00',}
                    ]}
                />
            </div>
        )
    }
}

export default withRouter(Calendar);