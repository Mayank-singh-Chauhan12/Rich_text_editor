const formatDoc = (cmd, value = null) => {
    content.focus();

    if (value !== null) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd, false, null);
    }
};
const handleAddlink=()=>{
    const url=prompt("Enter the url: ");
    formatDoc("createLink",url);
}
let content=document.getElementById("content");
content.addEventListener('mouseenter',()=>{
    let anchors=content.querySelectorAll('a');
    console.log(anchors);
    anchors.forEach((anchor)=>{
        anchor.addEventListener('mouseenter',(e)=>{
            anchor.setAttribute("target","_blank");
            content.setAttribute('contentEditable',"false");
        });
        anchor.addEventListener('mouseover',(e)=>{
        content.setAttribute("contentEditable","True");
    });
    });
});

let filename=document.getElementById("filename");
const handleFileExport=(value)=>{
    if(value==="new"){
        content.innerHTML=" ";
        filename.value="file name";
    }
    if(value==="pdf"){
       html2pdf().from(content).save(filename.value + ".pdf");
    }
    if (value === "txt") {
    const extractedText = content.innerText;

    const blob = new Blob([extractedText], {
        type: "text/plain"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename.value + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    }
};

let htmlCode="";
let active=false;
const showCode = document.getElementById("show-code");
showCode.addEventListener("click",()=>{
    active=!active;

    if(active){
        htmlCode=content.innerHTML;
        content.contentEditable="false";
        content.textContent=htmlCode;
    }
    else{
        content.contentEditable="true";
        content.innerHTML=htmlCode;
    }
});

