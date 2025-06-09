interface ButtonProps {
    onclick: () => void,
    name: string
}
const Button = (props: ButtonProps) => {
    return (
        <div className="text-[24px]">
            <button className='but px-4 py-2 rounded-full'>{props.name}</button>
        </div>
    )
}

export default Button
