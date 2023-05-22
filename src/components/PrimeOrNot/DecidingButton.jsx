
function DecidingButton(randNum){

    function primeBtn(){
        alert(randNum)
        // let isPrime = true
        // for (let i = 2; i < rand; i++) {
        //     if (rand % i == 0) {
        //         isPrime = false;
        //         break;
        //     }
        // }
        // if(isPrime){
        //     alert('bener prima')
        // }
        // else{
        //     alert('salah bukan prima')
        // }
    }
    
    function notBtn(){
        alert('berhasil2')
        // let isPrime = true
        // for (let i = 2; i < rand; i++) {
        //     if (rand % i == 0) {
        //         isPrime = false;
        //         break;
        //     }
        // }
        // if(!isPrime){
        //     alert('bener bukan prima')
        // }
        // else{
        //     alert('salah prima')
        // }
    }

    return (
        <div>
            <button onClick={primeBtn}>Prime</button>
            <button onClick={notBtn}>Not</button>
        </div>
    )
}

export default DecidingButton;