import './TagDropDown.scss';
import DropDown from '../../GlobalComponents/DropDown/DropDown';

type TagsDropDownProps = {
    isOpened: boolean;
    clickHandler: Function;
    tags: Array<string>;
}

function renderTags(tags: Array<string>, isOpened: boolean) {
    if (!isOpened) {
        return <div></div>;
    }
    return <div></div>
}

const TagDropDown = (props: TagsDropDownProps) => {
    return (
        <div>
            <DropDown isOpened={props.isOpened}
                clickHandler={() => props.clickHandler}
                text='[ Search Tags ]'
            >
                {renderTags(props.tags, props.isOpened)}
            </DropDown>
        </div >
    )
}

export default TagDropDown