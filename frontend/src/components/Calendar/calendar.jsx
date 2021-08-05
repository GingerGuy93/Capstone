import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import requestEventCreate from "./request";

class Calendar extends Component {
    handleDateSelect = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar
        let title = prompt('Please enter a new title for your event')

        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            }, true) //
        }
    }

    handleEventAdd = (addInfo) => {
        this.createEvent(addInfo.event.toPlainObject())
            .catch(() => {
                addInfo.revert()
            })
    }


    async createEvent (plainEventObject){
        return (dispatch) => {
            return requestEventCreate(plainEventObject).then((newEventId) => {
                dispatch({
                    type: 'CREATE_EVENT',
                    plainEventObject: {
                        id: newEventId,
                        ...plainEventObject
                    }
                })
            })
        }
    }


    render() {
        return (
            <div className="calendar">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    selectable={true}
                    editable={true}
                    selectMirror={true}
                    select={this.handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventAdd={this.handleEventAdd}
                    events={[
                        {title: 'Bud Tour Amateur 9 Ball',
                         daysOfWeek: ['4'],
                         startTime: '18:00:00',},
                        {title: 'Industry Mondays 50% off',
                         daysOfWeek: ['1'],
                         startTime: '16:00:00',}
                    ]}
                />
            </div>
        )
    }
}
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}


export default withRouter(Calendar);