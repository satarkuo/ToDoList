const saveBtn = document.querySelector(".saveBtn");
const inputText = document.querySelector(".inputText");
const list = document.querySelector(".list");
const popup = document.querySelector(".popup");

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
  if (inputText.value == "") {
    // 顯示彈窗
    popup.classList.remove('show','success','fail','delete');
    popup.classList.add('show','fail');
    popup.innerHTML = "請輸入內容";
    // 設定 3 秒後隱藏彈窗
    setTimeout(() => {
      popup.classList.remove('show','fail');
    }, 3000); 
  } else if (inputText.value !== ""){
    let obj={};
    obj.content = inputText.value;
    data.unshift(obj);
    inputText.value = "";
    renderData();

    // 顯示彈窗
    popup.classList.remove('show','success','fail','delete');
    popup.classList.add('show','success');
    popup.innerHTML = "新增成功！";
    // 設定 3 秒後隱藏彈窗
    setTimeout(() => {
      popup.classList.remove('show','success');
    }, 3000); 
  }
})

//刪除項目
list.addEventListener("click",function(e){
  
  if (e.target.value == "刪除"){
    let num = e.target.getAttribute("data-num");
    data.splice(num,1);
    renderData();
    // 顯示彈窗
    popup.classList.remove('show','success','fail','delete');
    popup.classList.add('show','delete');
    popup.innerHTML = "已刪除！";
    // 設定 3 秒後隱藏彈窗
    setTimeout(() => {
      popup.classList.remove('show','delete');
    }, 3000); 
  }
  
})
