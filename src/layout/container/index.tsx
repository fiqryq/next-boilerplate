interface Props {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
    )
}

export default Container;