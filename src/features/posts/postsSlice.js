import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
    {
        id: '1',
        title: 'first post',
        content: "first post",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
            smile:0,
        }
    },
    {
        id: '2',
        title: 'second post',
        content: "second post",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
            smile:0,
        }
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer:(state, action) => {
            state.push(action.payload)
        },
        prepare: (title, content,userId) => {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    date:sub(new Date(),{}).toISOString(),
                    userId,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                        smile:0,
                    }
                }
            }
}
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const {postAdded,reactionAdded} = postsSlice.actions



export default postsSlice.reducer;