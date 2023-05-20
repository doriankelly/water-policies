import { createSlice } from '@reduxjs/toolkit'
import { getVisitedLocal } from "../../../helpers/localStorage";


export const visitedSlice = createSlice({


    name: 'visited',
    initialState: {

        visitedObject: getVisitedLocal() || {
            "poiticsVisited": "false",
            "droughtVisited": "false",
            "contaminationVisited": "false"
        },//getVisitedLocal() ||
    },
    reducers: {
        setVisited: (state, action) => {
            state.visitedObject = action.payload
        }
    }

})

export const { setVisited } = visitedSlice.actions