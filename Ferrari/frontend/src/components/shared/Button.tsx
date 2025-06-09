import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface ButtonProps {
    onclick: () => void,
    name: string
}
const Button = (props: ButtonProps) => {
    return (
        <div className="text-[24px]">
            <button className='but px-7 py-2 rounded-full flex items-center gap-3'>
                <p>{props.name}</p>
                <ArrowForwardIcon className=''/></button>
        </div>
    )
}

export default Button
