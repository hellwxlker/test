const products = [
    {
        src:"https://static.insales-cdn.com/images/products/1/4781/310719149/%D0%9D%D0%B0%D0%BF%D0%B8%D1%82%D0%BE%D0%BA_%D0%BA%D0%B8%D1%81%D0%BB%D0%BE%D0%BC%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%A2%D0%90%D0%9D%D0%94%D0%95%D0%9C_0_5_%D0%BB_%D0%BF%D1%8D%D1%82_%D0%9A%D0%90%D0%97%D0%90%D0%A5%D0%A1%D0%A2%D0%90%D0%9D.jpg",
        category:"бакалея",
        name: "макароны"
    },
    {
        src:"https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg",
        category: "фрукты",
        name: "яблоко"
    },
    {
        src:"https://cdn.tveda.ru/thumbs/104/1045ec8e95870f5f8f0c173ea1e5176a/70c58409284c82782650b8cb3f6564a3.jpg",
        category:"овощи",
        name:"болгарский перец"
    },
    {
        src:"https://img.iamcook.ru/2020/upl/recipes/cat/u-4a4de86666f4112e166e8a430a690ab8.jpg",
        category:"хлеб",
        name: "круассаны"
    },
    {
        src:"https://calorizator.ru/sites/default/files/imagecache/product_512/product/koumiss-1.jpg",
        category:"молочка",
        name:"кумыс"
    }
]

const tabNav = document.querySelector(".tab-nav")
const tabContent = document.querySelector(".tab-content")

let categories = []
let outputContent = ''
for(let item of products){
    categories.push(item.category)
    outputContent += 
    `
    <div class="item">
        <img src="${item.src}" alt="">
        <h2>${item.name}</h2>
        <p>${item.category}</p>
    </div>
    `
}
console.log(outputContent);

tabContent.innerHTML = outputContent

categories = [...new Set(categories)]

let outputNav = `<button> All </button>`

for(let categ of categories){
    outputNav += `
        <button> ${categ} </button>
    `

}
tabNav.innerHTML = outputNav