import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1content = (props) => {
    return (
        <div className='pb-16 pt-6 flex items-center gap-10 h-[90vh]'>
            <LeftText />
            <RightText users={props.users} />

        </div>
    )
}

export default Page1content
