let tbody=document.querySelector("tbody")
async function fetchData() {
    try {
     response = await axios.get('http://localhost:3000/customers');
     console.log(response.data)
     const data=response.data;
     let body=""
     let i=1;
     data.forEach(element => {
        let row=`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.no}</td>
        <td>
        <div><button class="btn btn-primary" onClick="edit(${element.id})">Edit</button>
        <button class="btn btn-primary" onClick="deleteData(${element.id})">Delete</button><div>
        </td>
        </tr>`
        body+=row
     });
     tbody.innerHTML=body
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData();

function addData(){
  let name=document.querySelector('#name').value
  let no=document.querySelector('#num').value
   let roll=document.querySelector("#roll").value
  try {
    axios.post("http://localhost:3000/customers",{
        "name":name,
        "no":no,
        "id":roll

    }).then(()=>fetchData())
    
  }catch (err) {
    console.error('Error adding data:', err);
  }
  
}

function edit(id){
    let name=prompt("enter New Name")
    let no=prompt("enter new No")
    // let idn=prompt("Enter roll no");
axios.put("http://localhost:3000/customers/"+id,{
    // "id":idn,
    "name":name,
    "no":no
}).then(()=>{fetchData()}).catch(err=>{console.log(err)})
}

function deleteData(id){
    axios.delete("http://localhost:3000/customers/"+id).then((res)=>console.log(res))

}


