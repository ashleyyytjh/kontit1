import { Stories } from "../type/type";

const StoryBlock = (props:Stories) => {
    const dekString : string = props.dek

    return (
        <div className="pb-20 flex flex-col justify-center items-center">
            <div>{props.title}</div>
            <img src = {props.hero_image.url}></img>
            <div dangerouslySetInnerHTML={{ __html: dekString }} />
        </div>
    )
}

export default StoryBlock;