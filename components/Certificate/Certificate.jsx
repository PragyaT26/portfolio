import Image from 'next/legacy/image';

function Certificate({ data }) {
    console.log(data)
    // const { image,duration, name, link } = data;
    return (
        <>
            <div className="flex flex-col shadow-lg p-2 rounded-xl my-10 dark:shadow-lg dark:shadow-slate-500 dark:bg-white flex-1">
                {/* <Image
                    width={"1000"}
                    height={"700"}
                    src={image}
                />
                <h3 className='text-center text-xl'>Name:{name}</h3>
                <h3 className='text-center text-xl'>duration:{duration}</h3>
                <h3 className='text-center text-xl'><a className='underline decoration-blue-600 text-blue-500' href={link} target='_blank'>Link</a></h3> */}
            </div>
        </>
    );
}

export default Certificate;