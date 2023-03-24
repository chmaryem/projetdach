import {create} from 'zustand'
import { INITIAL_EVENTS } from "../../src/Data/Data";

const useCalendar = create((set)=> ({
    currentEvents: INITIAL_EVENTS,
    setCurrentEvents: (events)=> set({currentEvents: events})

}))

export default useCalendar