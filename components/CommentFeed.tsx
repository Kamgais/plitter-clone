import React, { FunctionComponent } from 'react'
import CommentItem from './CommentItem'


interface CommentFeedProps {
    comments?: Record<string, any>[]
}

const CommentFeed: FunctionComponent<CommentFeedProps> = ({comments = []}) => {
  return (
    <>
    {comments?.map((comment) => (
        <CommentItem key={comment.id} data={comment}/>
    ))}
    </>
  )
}

export default CommentFeed