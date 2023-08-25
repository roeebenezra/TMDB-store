export const Loader = () => {
    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
            </div>
        </div>
    )
}

export const SetLoader = (setLoading) => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 500)
}