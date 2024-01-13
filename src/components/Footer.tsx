
export default function Footer() {

    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto flex flex-col items-center py-4">
                <p>
                    {new Date().getFullYear()} • Thijmen Heuvelink
                </p>
            </div>
        </div>
    )
}
