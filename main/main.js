let codigo;
let rubro;
let codigoInterno;
let nombreProducto;
let precio;
let stock;
let prod;
let carrito = "Carrito : ";
let total = 0;

function Productos(codigo, rubro, codigoInterno, nombreProducto, stock, precio) {
    this.codigo = codigo;
    this.rubro = rubro;
    this.codigoInterno = codigoInterno;
    this.nombreProducto = nombreProducto;
    this.precio = precio;
    this.stock = stock;
}

const producto1 = new Productos(1, 2, 21, "Sugus", 10, 10);
const producto2 = new Productos(2, 2, 22, "Palito de la selva", 10, 12);
const producto3 = new Productos(3, 2, 23, "Billiken", 10, 56);
const producto4 = new Productos(4, 3, 31, "Block", 10, 78);
const producto5 = new Productos(5, 3, 32, "Milka", 10, 29);
const producto6 = new Productos(6, 3, 33, "Toke", 10, 66);
const producto7 = new Productos(7, 4, 41, "Cargador", 10, 88);
const producto8 = new Productos(8, 4, 42, "Cable Usb", 10, 96);
const producto9 = new Productos(9, 4, 43, "Memoria Micro SD 32gb", 10, 58);
const producto10 = new Productos(10, 5, 51, "Divercion", 10, 96);
const producto11 = new Productos(11, 5, 52, "Oreo", 10, 88);
const producto12 = new Productos(12, 5, 53, "Don Satur", 10, 13);
const producto13 = new Productos(13, 6, 61, "Leche entera", 10, 15);
const producto14 = new Productos(14, 6, 62, "Leche descremada", 10, 79);
const producto15 = new Productos(15, 6, 63, "Yogurt Ls Fut", 10, 85);
const producto16 = new Productos(16, 7, 71, "Agujas Canastita", 10, 63);
const producto17 = new Productos(17, 7, 72, "Elastico 2mts", 10, 49);
const producto18 = new Productos(18, 7, 73, "Hilo de coser", 10, 78);
const producto19 = new Productos(19, 8, 81, "Caja de bombones", 10, 63);
const producto20 = new Productos(20, 8, 82, "Perfume mujercitas", 10, 73);
const producto21 = new Productos(21, 8, 83, "Vino + Caja", 10, 15);
const producto22 = new Productos(22, 9, 91, "Doritos", 10, 91);
const producto23 = new Productos(23, 9, 92, "Lay's", 10, 85);
const producto24 = new Productos(24, 9, 93, "Cheettos", 10, 35);

let filtro = prompt("Ingrese el rubro : \n 1 - Todos \n 2 - Caramelos \n 3 - Chocolates \n 4 - Electronica \n 5 - Galletitas \n 6 - Lacteos \n 7 - Merceria \n 8 - Regaleria \n 9 - Snacks \n 0 - S alir");
console.log(filtro);




function Selection(filtro) {

    switch (filtro) {
        case "1":
            prod = prompt(
                "Ingrese el carrito q desea agragar al carritol : \n 1 - Sugus  \n 2 - Palito de la selva  \n 3 - Billiken \n 4 - Block \n 5 - Milka \n 6 - Toke \n 7 - Cargador \n 8 - Cable Usb  \n 9 - Memoria Micro SD 32gb  \n 10 - Diverion \n 11 - Oreo \n 12 - Don Satur  \n 13 - Leche entera \n 14 - Leche descremada \n 15 - Yogurt Ls Frut \n 16 - Agujas Canastita \n 17 - Elastico 2mts \n 18 - Hilo de coser \n 19 - Caja de Bombones\n 20 - Perfume mujercitas \n 21 - Vino + caja  \n 22 - Doritos \n 23 - Lay'S \n 24 - Cheetos "
            );
            switch (prod) {
                case "1":
                    if (producto1["stock"]!=0){
                    carrito =carrito + "\n"+ producto1["nombreProducto"]+" $ "+producto1["precio"] ;
                    console.log(carrito);
                    total = total + producto1["precio"];
                    producto1["stock"]=producto1["stock"]-1;
                    console.log("stock :"+producto1["stock"]);
                    }else{
                        alert("Producto agotado")
                    }
                    break;
                case "2":
                    if (producto2["stock"]!=0){
                        carrito =carrito + "\n"+ producto2["nombreProducto"]+" $ "+producto2["precio"] ;
                        console.log(carrito);
                        total = total + producto2["precio"];
                        producto2["stock"]=producto2["stock"]-1;
                        console.log("stock :"+producto2["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "3":
                    if (producto3["stock"]!=0){
                        carrito =carrito + "\n"+ producto3["nombreProducto"]+" $ "+producto3["precio"] ;
                        console.log(carrito);
                        total = total + producto3["precio"];
                        producto3["stock"]=producto3["stock"]-1;
                        console.log("stock :"+producto3["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "4":
                    if (producto4["stock"]!=0){
                        carrito =carrito + "\n"+ producto4["nombreProducto"]+" $ "+producto4["precio"] ;
                        console.log(carrito);
                        total = total + producto4["precio"];
                        producto4["stock"]=producto4["stock"]-1;
                        console.log("stock :"+producto4["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "5":
                    if (producto5["stock"]!=0){
                        carrito =carrito + "\n"+ producto5["nombreProducto"]+" $ "+producto5["precio"] ;
                        console.log(carrito);
                        total = total + producto5["precio"];
                        producto5["stock"]=producto5["stock"]-1;
                        console.log("stock :"+producto5["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "6":
                    if (producto5["stock"]!=0){
                        carrito =carrito + "\n"+ producto5["nombreProducto"]+" $ "+producto5["precio"] ;
                        console.log(carrito);
                        total = total + producto5["precio"];
                        producto5["stock"]=producto5["stock"]-1;
                        console.log("stock :"+producto5["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "7":
                    if (producto7["stock"]!=0){
                        carrito =carrito + "\n"+ producto7["nombreProducto"]+" $ "+producto7["precio"] ;
                        console.log(carrito);
                        total = total + producto7["precio"];
                        producto7["stock"]=producto7["stock"]-1;
                        console.log("stock :"+producto7["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "8":
                    if (producto8["stock"]!=0){
                        carrito =carrito + "\n"+ producto8["nombreProducto"]+" $ "+producto8["precio"] ;
                        console.log(carrito);
                        total = total + producto8["precio"];
                        producto8["stock"]=producto8["stock"]-1;
                        console.log("stock :"+producto8["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "9":
                    if (producto9["stock"]!=0){
                        carrito =carrito + "\n"+ producto9["nombreProducto"]+" $ "+producto9["precio"] ;
                        console.log(carrito);
                        total = total + producto9["precio"];
                        producto9["stock"]=producto9["stock"]-1;
                        console.log("stock :"+producto9["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "10":
                    if (producto10["stock"]!=0){
                        carrito =carrito + "\n"+ producto10["nombreProducto"]+" $ "+producto10["precio"] ;
                        console.log(carrito);
                        total = total + producto10["precio"];
                        producto10["stock"]=producto10["stock"]-1;
                        console.log("stock :"+producto10["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "11":
                    if (producto11["stock"]!=0){
                        carrito =carrito + "\n"+ producto11["nombreProducto"]+" $ "+producto11["precio"] ;
                        console.log(carrito);
                        total = total + producto11["precio"];
                        producto11["stock"]=producto11["stock"]-1;
                        console.log("stock :"+producto11["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "12":
                    if (producto12["stock"]!=0){
                        carrito =carrito + "\n"+ producto12["nombreProducto"]+" $ "+producto12["precio"] ;
                        console.log(carrito);
                        total = total + producto12["precio"];
                        producto12["stock"]=producto12["stock"]-1;
                        console.log("stock :"+producto12["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "13":
                    if (producto13["stock"]!=0){
                        carrito =carrito + "\n"+ producto13["nombreProducto"]+" $ "+producto13["precio"] ;
                        console.log(carrito);
                        total = total + producto13["precio"];
                        producto13["stock"]=producto13["stock"]-1;
                        console.log("stock :"+producto13["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "14":
                    if (producto14["stock"]!=0){
                        carrito =carrito + "\n"+ producto14["nombreProducto"]+" $ "+producto14["precio"] ;
                        console.log(carrito);
                        total = total + producto14["precio"];
                        producto14["stock"]=producto14["stock"]-1;
                        console.log("stock :"+producto14["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "15":
                    if (producto15["stock"]!=0){
                        carrito =carrito + "\n"+ producto15["nombreProducto"]+" $ "+producto15["precio"] ;
                        console.log(carrito);
                        total = total + producto15["precio"];
                        producto15["stock"]=producto15["stock"]-1;
                        console.log("stock :"+producto15["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "16":
                    if (producto16["stock"]!=0){
                        carrito =carrito + "\n"+ producto16["nombreProducto"]+" $ "+producto16["precio"] ;
                        console.log(carrito);
                        total = total + producto16["precio"];
                        producto16["stock"]=producto16["stock"]-1;
                        console.log("stock :"+producto16["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "17":
                    if (producto17["stock"]!=0){
                        carrito =carrito + "\n"+ producto17["nombreProducto"]+" $ "+producto17["precio"] ;
                        console.log(carrito);
                        total = total + producto9["precio"];
                        producto17["stock"]=producto17["stock"]-1;
                        console.log("stock :"+producto17["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "18":
                    if (producto18["stock"]!=0){
                        carrito =carrito + "\n"+ producto18["nombreProducto"]+" $ "+producto18["precio"] ;
                        console.log(carrito);
                        total = total + producto18["precio"];
                        producto18["stock"]=producto18["stock"]-1;
                        console.log("stock :"+producto18["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "19":
                    if (producto19["stock"]!=0){
                        carrito =carrito + "\n"+ producto19["nombreProducto"]+" $ "+producto19["precio"] ;
                        console.log(carrito);
                        total = total + producto19["precio"];
                        producto19["stock"]=producto19["stock"]-1;
                        console.log("stock :"+producto19["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "20":
                    if (producto20["stock"]!=0){
                        carrito =carrito + "\n"+ producto20["nombreProducto"]+" $ "+producto20["precio"] ;
                        console.log(carrito);
                        total = total + producto20["precio"];
                        producto20["stock"]=producto20["stock"]-1;
                        console.log("stock :"+producto20["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "21":
                    if (producto21["stock"]!=0){
                        carrito =carrito + "\n"+ producto21["nombreProducto"]+" $ "+producto21["precio"] ;
                        console.log(carrito);
                        total = total + producto21["precio"];
                        producto21["stock"]=producto21["stock"]-1;
                        console.log("stock :"+producto21["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "22":
                    if (producto22["stock"]!=0){
                        carrito =carrito + "\n"+ producto22["nombreProducto"]+" $ "+producto22["precio"] ;
                        console.log(carrito);
                        total = total + producto22["precio"];
                        producto22["stock"]=producto22["stock"]-1;
                        console.log("stock :"+producto22["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "23":
                    if (producto23["stock"]!=0){
                        carrito =carrito + "\n"+ producto23["nombreProducto"]+" $ "+producto23["precio"] ;
                        console.log(carrito);
                        total = total + producto23["precio"];
                        producto23["stock"]=producto23["stock"]-1;
                        console.log("stock :"+producto23["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                case "24":
                    if (producto24["stock"]!=0){
                        carrito =carrito + "\n"+ producto24["nombreProducto"]+" $ "+producto24["precio"] ;
                        console.log(carrito);
                        total = total + producto24["precio"];
                        producto24["stock"]=producto24["stock"]-1;
                        console.log("stock :"+producto24["stock"]);
                        }else{
                            alert("Producto agotado")
                        }
                        break;
                default:
                    alert("No ingreso una opcion valida")
                    break;
            }
            break;
                case "2":
                    prod = prompt(
                        "Ingrese el producto q desea agragar al carrito : \n 1 - Sugus  \n 2 - Palito de la selva  \n 3 - Billiken "
                    );
                    switch (prod) {
                        case "1":
                            if (producto1["stock"]!=0){
                                carrito =carrito + "\n"+ producto1["nombreProducto"]+" $ "+producto1["precio"] ;
                                console.log(carrito);
                                total = total + producto1["precio"];
                                producto1["stock"]=producto1["stock"]-1;
                                console.log("stock :"+producto1["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto2["stock"]!=0){
                                carrito =carrito + "\n"+ producto2["nombreProducto"]+" $ "+producto2["precio"] ;
                                console.log(carrito);
                                total = total + producto2["precio"];
                                producto2["stock"]=producto2["stock"]-1;
                                console.log("stock :"+producto2["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto3["stock"]!=0){
                                carrito =carrito + "\n"+ producto3["nombreProducto"]+" $ "+producto3["precio"] ;
                                console.log(carrito);
                                total = total + producto3["precio"];
                                producto3["stock"]=producto3["stock"]-1;
                                console.log("stock :"+producto3["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                case "3":
                    prod = prompt(
                        "Ingrese el carrito q desea agragar al carritol : \n 1 - Block  \n 2 - Milka \n 3 - Toke "
                    );
                    switch (prod) {
                        case "1":
                            if (producto4["stock"]!=0){
                                carrito =carrito + "\n"+ producto4["nombreProducto"]+" $ "+producto4["precio"] ;
                                console.log(carrito);
                                total = total + producto4["precio"];
                                producto4["stock"]=producto4["stock"]-1;
                                console.log("stock :"+producto4["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto5["stock"]!=0){
                                carrito =carrito + "\n"+ producto5["nombreProducto"]+" $ "+producto5["precio"] ;
                                console.log(carrito);
                                total = total + producto5["precio"];
                                producto5["stock"]=producto5["stock"]-1;
                                console.log("stock :"+producto5["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto5["stock"]!=0){
                                carrito =carrito + "\n"+ producto5["nombreProducto"]+" $ "+producto5["precio"] ;
                                console.log(carrito);
                                total = total + producto5["precio"];
                                producto5["stock"]=producto5["stock"]-1;
                                console.log("stock :"+producto5["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                case "4":
                    prod = prompt(
                        "Ingrese el carrito q desea agragar al carritol : \n 1 - Cargador  \n 2 - Cable Usb \n 3 - Memoria Micro SD 32gb "
                    );
                    switch (prod) {
                        case "1":
                            if (producto7["stock"]!=0){
                                carrito =carrito + "\n"+ producto7["nombreProducto"]+" $ "+producto7["precio"] ;
                                console.log(carrito);
                                total = total + producto7["precio"];
                                producto7["stock"]=producto7["stock"]-1;
                                console.log("stock :"+producto7["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto8["stock"]!=0){
                                carrito =carrito + "\n"+ producto8["nombreProducto"]+" $ "+producto8["precio"] ;
                                console.log(carrito);
                                total = total + producto8["precio"];
                                producto8["stock"]=producto8["stock"]-1;
                                console.log("stock :"+producto8["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto9["stock"]!=0){
                                carrito =carrito + "\n"+ producto9["nombreProducto"]+" $ "+producto9["precio"] ;
                                console.log(carrito);
                                total = total + producto9["precio"];
                                producto9["stock"]=producto9["stock"]-1;
                                console.log("stock :"+producto9["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                case "5":
                    prod = prompt(
                        "Ingrese el carrito q desea agragar al carritol : \n 1 - Divercion  \n 2 - Oreo  \n 3 - Don Satur "
                    ); switch (prod) {
                        case "1":
                            if (producto10["stock"]!=0){
                                carrito =carrito + "\n"+ producto10["nombreProducto"]+" $ "+producto10["precio"] ;
                                console.log(carrito);
                                total = total + producto10["precio"];
                                producto10["stock"]=producto10["stock"]-1;
                                console.log("stock :"+producto10["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto11["stock"]!=0){
                                carrito =carrito + "\n"+ producto11["nombreProducto"]+" $ "+producto11["precio"] ;
                                console.log(carrito);
                                total = total + producto11["precio"];
                                producto11["stock"]=producto11["stock"]-1;
                                console.log("stock :"+producto11["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto12["stock"]!=0){
                                carrito =carrito + "\n"+ producto12["nombreProducto"]+" $ "+producto12["precio"] ;
                                console.log(carrito);
                                total = total + producto12["precio"];
                                producto12["stock"]=producto12["stock"]-1;
                                console.log("stock :"+producto12["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                case "6":
                    prod = prompt(
                        "Ingrese el carrito q desea agragar al carritol : \n 1 - Leche entera \n 2 - Leche descremada \n 3 - Yogurt Ls Fut"
                    ); switch (prod) {
                        case "1":
                            if (producto13["stock"]!=0){
                                carrito =carrito + "\n"+ producto13["nombreProducto"]+" $ "+producto13["precio"] ;
                                console.log(carrito);
                                total = total + producto13["precio"];
                                producto13["stock"]=producto13["stock"]-1;
                                console.log("stock :"+producto13["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto14["stock"]!=0){
                                carrito =carrito + "\n"+ producto14["nombreProducto"]+" $ "+producto14["precio"] ;
                                console.log(carrito);
                                total = total + producto14["precio"];
                                producto14["stock"]=producto14["stock"]-1;
                                console.log("stock :"+producto14["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto15["stock"]!=0){
                                carrito =carrito + "\n"+ producto15["nombreProducto"]+" $ "+producto15["precio"] ;
                                console.log(carrito);
                                total = total + producto15["precio"];
                                producto15["stock"]=producto15["stock"]-1;
                                console.log("stock :"+producto15["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                case "7":
                    prod = prompt(
                        "Ingrese el carrito q desea agragar al carritol : \n 1 - Agujas Canastita  \n 2 - Elastico 2mts \n 3 - Hilo de coser "
                    ); switch (prod) {
                        case "1":
                            if (producto16["stock"]!=0){
                                carrito =carrito + "\n"+ producto16["nombreProducto"]+" $ "+producto16["precio"] ;
                                console.log(carrito);
                                total = total + producto16["precio"];
                                producto16["stock"]=producto16["stock"]-1;
                                console.log("stock :"+producto16["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto17["stock"]!=0){
                                carrito =carrito + "\n"+ producto17["nombreProducto"]+" $ "+producto17["precio"] ;
                                console.log(carrito);
                                total = total + producto9["precio"];
                                producto17["stock"]=producto17["stock"]-1;
                                console.log("stock :"+producto17["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto18["stock"]!=0){
                                carrito =carrito + "\n"+ producto18["nombreProducto"]+" $ "+producto18["precio"] ;
                                console.log(carrito);
                                total = total + producto18["precio"];
                                producto18["stock"]=producto18["stock"]-1;
                                console.log("stock :"+producto18["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                case "8":
                    prod = prompt(
                        "Ingrese el carrito q desea agragar al carritol : \n 1 - Caja de bombones  \n 2 - Perfume mujercitas \n 3 - Vino + Caja "
                    );
                    switch (prod) {
                        case "1":
                            if (producto19["stock"]!=0){
                                carrito =carrito + "\n"+ producto19["nombreProducto"]+" $ "+producto19["precio"] ;
                                console.log(carrito);
                                total = total + producto19["precio"];
                                producto19["stock"]=producto19["stock"]-1;
                                console.log("stock :"+producto19["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto20["stock"]!=0){
                                carrito =carrito + "\n"+ producto20["nombreProducto"]+" $ "+producto20["precio"] ;
                                console.log(carrito);
                                total = total + producto20["precio"];
                                producto20["stock"]=producto20["stock"]-1;
                                console.log("stock :"+producto20["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto21["stock"]!=0){
                                carrito =carrito + "\n"+ producto21["nombreProducto"]+" $ "+producto21["precio"] ;
                                console.log(carrito);
                                total = total + producto21["precio"];
                                producto21["stock"]=producto21["stock"]-1;
                                console.log("stock :"+producto21["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                case "9":
                    prod = prompt(
                        "Ingrese el carrito q desea agragar al carritol : \n 1 - Doritos  \n 2 - Lay's \n 3 - Cheettos "
                    );
                    switch (prod) {
                        case "1":
                            if (producto22["stock"]!=0){
                                carrito =carrito + "\n"+ producto22["nombreProducto"]+" $ "+producto22["precio"] ;
                                console.log(carrito);
                                total = total + producto22["precio"];
                                producto22["stock"]=producto22["stock"]-1;
                                console.log("stock :"+producto22["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "2":
                            if (producto23["stock"]!=0){
                                carrito =carrito + "\n"+ producto23["nombreProducto"]+" $ "+producto23["precio"] ;
                                console.log(carrito);
                                total = total + producto23["precio"];
                                producto23["stock"]=producto23["stock"]-1;
                                console.log("stock :"+producto23["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        case "3":
                            if (producto24["stock"]!=0){
                                carrito =carrito + "\n"+ producto24["nombreProducto"]+" $ "+producto24["precio"] ;
                                console.log(carrito);
                                total = total + producto24["precio"];
                                producto24["stock"]=producto24["stock"]-1;
                                console.log("stock :"+producto24["stock"]);
                                }else{
                                    alert("Producto agotado")
                                }
                                break;
                        default:
                            alert("No ingreso una opcion valida")
                            break;
                    }
                    break;
                    

                default:
                    alert("No ingreso una opcion valida 2")
                    break;

            }
            
    }

    while (filtro != 0) {
        Selection(filtro)
        console.log("El producto selecionado es : " + prod);
        filtro = prompt("Ingrese el rubro : \n 1 - Todos \n 2 - Caramelos \n 3 - Chocolates \n 4 - Electronica \n 5 - Galletitas \n 6 - Lacteos \n 7 - Merceria \n 8 - Regaleria \n 9 - Snacks \n 0 - S alir");
console.log(filtro);
    }

    if (filtro == 0) {
        alert("El total de su compra es :  $ "+total+ "\n Gracias!")

    } 