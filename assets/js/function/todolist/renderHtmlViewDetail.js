export default function renderHtmlViewDetail(todoListItem) {
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
      <div class="click edit blue-text showFormEdit">
        <span class="icon material-icons material-symbols-outlined">
          edit
        </span>
        <span>Chỉnh sửa</span>
      </div>
  
      <div class="click remove red-text deleteTodoList">
        <span class="icon material-icons material-symbols-outlined">
          delete
        </span>
        <span>Xoá</span>
      </div>
    </div>
  </td>`;
  }