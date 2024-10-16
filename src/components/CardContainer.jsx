export default function CardContainer({ title, children }) {
    return (
        <div>
            <h1>{title}</h1>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}