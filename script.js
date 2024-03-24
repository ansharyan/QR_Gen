const img = document.querySelector("#qrI");
const button = document.querySelector("button");
const qr_text = document.querySelector("#urlText");
const qr_div =  document.querySelector(".url_hidden");


button.addEventListener("click", ()=> {
    console.log(qr_text.value);
    generate_qr();
});

const generate_qr = ()=>{
    if(qr_text.value ){
    qr_div.classList.add("url");
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_text.value; 
    console.log(img.src)
    }else {
        qr_div.classList.remove("url");
        document.querySelector("#urlText").classList.add("error");
        setTimeout(() =>{
            document.querySelector("#urlText").classList.remove("error");
        },1000)
    }
}