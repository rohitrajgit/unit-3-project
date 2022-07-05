
let arr=JSON.parse(localStorage.getItem("productdata"))||[];
function Submit(e){
    e.preventDefault();
    let form=document.getElementById("form")

    let productname=form.name.value;
    let category=form.category.value;
    let image=form.image.value;
    let price=form.price.value;
    let select=form.select.value;

    let product= new Ecommproduct(productname,category,image,price,select);
    arr.push(product)
    console.log(arr)
    localStorage.setItem("productdata",JSON.stringify(arr));
}


function Ecommproduct(n,c,i,p,s){
    this.productname=n;
    this.category=c;
    this.image=i;
    this.price=p;
    this.select=s;
}


