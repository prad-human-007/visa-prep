export default function lay({children} : { children: React.ReactNode }){
    return(
        <div>
            <h1> This is Post Layout </h1>
            {children}
        </div>
    )
}