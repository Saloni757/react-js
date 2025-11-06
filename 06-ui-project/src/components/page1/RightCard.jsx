import RightCardcontent from './RightCardcontent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-60 rounded-4xl '>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardcontent id={props.id} color={props.color} tag={props.tag} />
        </div>
    )
}

export default RightCard
