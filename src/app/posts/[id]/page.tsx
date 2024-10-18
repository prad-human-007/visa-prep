interface PageProps {
    params: {
        id: string;
        id3: string;
    };
}

const post = ({params} : PageProps) => {
    const {id} =  params;

    return(
        <div>
            <h1>Page Id: {id} </h1>
        </div>
    )
}

export default post