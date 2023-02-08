export default function renderHtmlFormDetail(todoListItem) {
    return `<td colspan="3">
    <div class="add-detail">
      <span class="name">Chi tiết: </span>
      <textarea
        class="detail-work-form"
        rows="2"
        placeholder="Nhập chi tiết công việc...">${todoListItem.detailWorkForm}</textarea>
    </div>
    <div class="add-result">
      <span class="name">Kết quả: </span>
      <textarea
        class="result-work-form"
        rows="2"
        placeholder="Nhập chi tiết công việc...">${todoListItem.resultWorkForm}</textarea>
    </div>
  </td>
  <td colspan="3">
    <div class="control">
      <div id="createTodolist-${todoListItem.id}" class="click edit blue-text">
        <span class="icon material-icons material-symbols-outlined">
          update
        </span>
        <span>Cập nhật</span>
      </div>
  
      <div id="delêtTodolist" onclick="deleteTodoList(${todoListItem.id})" class="click remove red-text">
        <span class="icon material-icons material-symbols-outlined">
          delete
        </span>
        <span>Xoá</span>
      </div>
    </div>
  </td>`;
  }