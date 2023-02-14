import './Button.css'

export default function Button({onClick, text}){
    return(
        <>
            <div className={'button-container'} onClick={onClick}>
                {text}
            </div>
        </>
    )
}