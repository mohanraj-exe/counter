let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn, index, array){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            // console.log("button_data:", btn, index, e.currentTarget.classList, styles.contains("decrease"), e.currentTarget.innerHTML, e.currentTarget.innerText);
            // console.log(count--);
            count--;
        }
        else if(styles.contains("increase")){
            // console.log("button_data:", btn, index, e.currentTarget.classList, styles.contains("increase"), e.currentTarget.innerHTML, e.currentTarget.innerText);
            // console.log(count++);
            count++;
        }
        else{
            // console.log("button_data:", btn, index, e.currentTarget.classList, styles.contains("reset"), e.currentTarget.innerHTML, e.currentTarget.innerText);
            // console.log(count = 0);
            count = 0;
        }
        value.innerHTML = count;
    });
});
