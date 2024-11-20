const saveBtn = document.querySelector(".saveBtn");
const inputText = document.querySelector(".inputText");
const list = document.querySelector(".list");

const data = [{content:"代辦項目1"},{content:"代辦項目2"}];
//渲染 HTML 結構至 .list
function renderData(){
  let str = "";
  data.forEach(function(item,index){
    str += `<li><span class="content">${item.content}</span><input type="button" value="刪除" class="deleteBtn" data-num="${index}"></li>`;
  })
  list.innerHTML = str;
}
renderData();

//新增項目
saveBtn.addEventListener("click", function(e){
  if (inputText.value !== "") {
    let obj={};
    obj.content = inputText.value;
    data.push(obj);
    renderData();
  }
})

//刪除項目
list.addEventListener("click",function(e){
  
  if (e.target.value == "刪除"){
    let num = e.target.getAttribute("data-num");
    data.splice(num,1);
    renderData();
  }
  
})
