import YouTubeIcon from '@mui/icons-material/YouTube';
interface ButtonProps {
    name: string,
    onclick: () => void
}
const Button = (props: ButtonProps) => {
    return (
        <>
            <button className="py-2 px-5 text-white bg-primary text-[20px] flex items-center rounded-2xl" onClick={props.onclick}>

                <span className='mr-2'>{props.name}</span>
                <YouTubeIcon />
            </button>

        </>
    )
}

export default Button
