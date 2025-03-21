import Image from "next/image";

export default function Page() {
    return (

        <div className="flex h-25 shrink-0 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 p-4 items-center">
            <Image
                className="ml-4"
                src="/tray.png"
                alt="food logo"
                width={80}
                height={80}
                priority
            />
            <div className="flex items-center justify-center h-20 text-wrap p-2">
                <h1 className="text-white text-2xl md:text-3xl font-semibold">Recipe Roots</h1>
            </div>
        </div>
    );
}
