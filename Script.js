let text=document.getElementById("text");
let btn=document.getElementById("btn");
let img=document.getElementById("img");

// let ShouldRunAgain ;

let friends = ["Virat Kohli","Faf du Plessis (c)","Rajat Patidar","Glenn Maxwell","Cameron Green","Mahipal Lomror","Dinesh Karthik (wk)"," Swapnil Singh"," Karn Sharma"," Lockie Ferguson","Mohammed Siraj"];
let photos =[
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/94.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/597.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/28.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/550.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/184.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/13.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/1483.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/98.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/69.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/63.png",
];
const myTeam=()=>{
        for(let i=0;i<friends.length;i++){
            setTimeout(()=>{
                text.textContent=friends[i];
                img.src=`${photos[i]}`;//s  
            },i*2000);
        }
}
btn.addEventListener("click",myTeam());
