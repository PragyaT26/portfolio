import Image from 'next/legacy/image';

// ?: Project
function Project({ image }) {
    return (
        <>
            <div className="basis-1/3 flex-1 ">
                <Image
                    className="rounded-lg object-cover "
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={image}
                    title="mammals"
                />
            </div>
        </>
    );
}

export default Project;