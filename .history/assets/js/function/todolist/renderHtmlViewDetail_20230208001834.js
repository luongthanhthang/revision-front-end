export default function renderHtmlViewDetail(item) {
  let todoListItem = JSON.parse(item)
    return `<td colspan="3">
    <div>
      <span>Chi tiết:</span>
      <span class="detail-display">${todoListItem.detailWorkForm}</span>
    </div>
    <div>
      <span>Kết quả:</span>
      <span class="result-display">${todoListItem.resultWorkForm}</span>
    </div>
  </td>
  <td colspan="3">
    <div class="control" >
      <div class="click edit blue-text" onclick ="showFormEdit(${todoListItem.id})">
        <span class="icon material-icons material-symbols-outlined">
          edit
        </span>
        <span>Chỉnh sửa</span>
      </div>
  
      <div class="click remove red-text" onclick="deleteTodoList(${todoListItem.id})">
        <span class="icon material-icons material-symbols-outlined">
          delete
        </span>
        <span>Xoá</span>
      </div>
    </div>
  </td>`;
  }