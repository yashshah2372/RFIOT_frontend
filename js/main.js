const http=new slhttp();
const items=document.querySelector('#items');

// const id=document.querySelector('#data_id');
// const name=document.querySelector('#data_name');
// const result =document.querySelector('#data_result');



http.get('https://st0io9y728.execute-api.ap-south-1.amazonaws.com/v1/rfid')
.then(data=>{
        console.log(data.Items);
        loadAllData(data.Items);
})
.catch((err)=>console.log(err));


function loadAllData(data){
    for(let i=0;i<=data.length;i++){
    const trow=document.createElement('tr');
    const tdata1=document.createElement('td');
    const tdata2=document.createElement('td');
    const tdata3=document.createElement('td');
    const tdata4=document.createElement('td');
    tdata1.innerHTML=`${i+1}`
    tdata2.innerHTML=`${data[i].ts.S}`;
    tdata3.innerHTML=`${data[i].RFID.S}`;
    tdata4.innerHTML=`${data[i].IO.N}`;
    trow.appendChild(tdata1);
    trow.appendChild(tdata2);
    trow.appendChild(tdata3);
    trow.appendChild(tdata4);
    items.appendChild(trow);
    }
}