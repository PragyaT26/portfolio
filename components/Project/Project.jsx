import Image from 'next/legacy/image';


function Project({ image, size, link }) {
    return (
        <>
            <div className="basis-1/3 flex-1 ">
                <a href={link} target='_blank'>
                    <Image
                        className="rounded-lg object-cover "
                        width={size}
                        height={size}
                        layout="responsive"
                        src={image}
                        title="mammals"
                    />
                </a>
            </div>
        </>
    );
}

export default Project;