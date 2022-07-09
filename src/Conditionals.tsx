const Conditionals = () => {
    const canSee = true;
    return (
        <>
            <h1>Conditionals example</h1>
            {canSee ? <div>You can see that</div> : 
                <span>You are not allowed to see</span>}
        </>
    )
}

export default Conditionals;