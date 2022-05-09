import React from 'react'

function Loop() {
    const LoopStar = () => {

        let n = 4;
        let string = "";
        for (let i = 1; i <= n; i++) {
            for (let j = n; j > i; j--) {
                string += " ";
            }
            for (let k = 0; k < i * 2 - 1; k++) {
                string += "*";
            }
            string += "\n";
        }
        for (let i = 1; i <= n - 1; i++) {
            for (let j = 0; j < i; j++) {
                string += " ";
            }
            for (let k = (n - i) * 2 - 1; k > 0; k--) {
                string += "*";
            }
            string += "\n";
        }
        console.log(string);
    }
    
    React.useEffect(() => {
        LoopStar();
    }, [])

    return (
        <div>
        </div>
    )
}

export default Loop