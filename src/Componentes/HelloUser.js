const Hellouser = (props) =>{
    return(
        <div>
            <h3>Olá, {props.name}</h3>
            <Hellouser name="Wilson" />
        </div>
    );
};

export default Hellouser;