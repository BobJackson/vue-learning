import {seedData} from './seed';

export const store = {
    state: {seedData},
    getActiveDay() {
        return this.state.seedData.find((day) => day.active);
    },
    setActiveDay(dayId) {
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({"details": eventDetails, "edit": false});
    },
    getEventObj: function (dayId, eventDetails) {
        const dayObj = this.state.seedData.find(day => day.id === dayId);
        return dayObj.events.find(event => event.details === eventDetails);
    },
    editEvent(dayId, eventDetails) {
        const eventObj = this.getEventObj(dayId, eventDetails);
        eventObj.edit = true;
    },
    updateEvent(dayId, originalEventDetails, newEventDetails) {
        const eventObj = this.getEventObj(dayId, originalEventDetails);
        eventObj.details = newEventDetails;
        eventObj.edit = false;
    }
};