import Image from "next/image";

const Loader = () => {
    return (
        <div className="mt-16 w-full flex-center">
            <Image
                src='/loader.svg'
                width={50}
                height={50}
                alt="loader"
                className="object-contain"
            />
        </div>
    );
};

export default Loader;