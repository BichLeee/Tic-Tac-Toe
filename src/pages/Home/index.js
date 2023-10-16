import Game from "./Game";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (  
        <div style={{paddingInline:'30px'}}>
            <h2 style={{paddingBottom:'5px'}}>Let's play</h2>
            <Game />
        </div>
        

    );
}

export default Home;