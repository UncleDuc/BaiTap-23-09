// [Thực hành] So sánh đối tượng 
// function isEqual(obj1, obj2) {
//     // Kiểm tra xem hai đối tượng có cùng tham chiếu không
//     if (obj1 === obj2) {
//         return true;
//     }
  
//     // Kiểm tra xem cả hai có phải là object không (bao gồm cả việc loại bỏ null)
//     if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
//         return false;
//     }
  
//     // Lấy danh sách các thuộc tính của cả hai đối tượng
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
  
//     // Kiểm tra xem số lượng thuộc tính có bằng nhau không
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
  
//     // Duyệt qua các thuộc tính của obj1
//     for (let key of keys1) {
//         // Kiểm tra xem thuộc tính của obj2 có tồn tại không
//         if (!obj2.hasOwnProperty(key)) {
//             return false;
//         }
  
//         // Nếu giá trị của thuộc tính là một đối tượng, gọi đệ quy
//         if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
//             if (!isEqual(obj1[key], obj2[key])) {
//                 return false;
//             }
//         } else {
//             // Nếu không phải object, so sánh giá trị trực tiếp
//             if (obj1[key] !== obj2[key]) {
//                 return false;
//             }
//         }
//     }
  
//     // Nếu tất cả các thuộc tính đều giống nhau, trả về true
//     return true;
//   }

//   const obj1 = { a: 1, b: { c: 3 } };
//   const obj2 = { a: 1, b: { c: 3 } };
//   const obj3 = { a: 1, b: { c: 4 } };
  
//   console.log(isEqual(obj1, obj2)); // true
//   console.log(isEqual(obj1, obj3)); // false
  



// [Thực hành] Sao chép đối tượng 

// function deepClone(obj){
//     // Xác định mục tiêu
//     // Chúng ta cần một hàm có khả năng:

//     // Sao chép một đối tượng ban đầu.
//     // Đảm bảo rằng các thay đổi trong bản sao không ảnh hưởng đến đối tượng gốc và ngược lại.
//     // Xử lý các đối tượng lồng nhau.
//     if(typeof obj !== 'object' ||  obj === null ){
//         return obj;
//         // Kiểm tra kiểu dữ liệu
//     }

//     const clone = Array.isArray(obj) ? [] : {}; 
//     // Đây là một phương thức có sẵn trong JavaScript để kiểm tra xem một biến có phải là một mảng hay không.
//     // Tạo đối tượng mới (mảng hoặc đối tượng)

//     for(let key in obj){
//         if(!obj.hasOwnProperty(key)){
//             //  // Gọi đệ quy để sao chép các thuộc tính lồng nhau
//             clone[key] = deepClone(obj[key]);
//         }
//     }
//     return clone;
// }

// const original = {
//     a: 1,
//     b: { c: 2 },
//     d: [3, 4],
// };

// const ar = [1,2,3]
// const copied = deepClone(original);
// const a = deepClone(ar);

// console.log(original); // { a: 1, b: { c: 2 }, d: [3, 4] }
// console.log(copied);   // { a: 1, b: { c: 5 }, d: [3, 4, 6] }
// console.log(a);


// // [Thực hành]  Tạo đối tượng từ mảng 

// function createObject(arr){
//     const obj = {};
//     for(let i = 0; i< arr.length; i++){
//         const [key, value] = arr[i];
//         obj[key] = value;
//     }
//     return obj;
// }
// const arr = [
//     ['name', 'Alice'],
//     ['age', 25],
//     ['city', 'New York']
// ];

// const result = createObject(arr);
// console.log(result);



let todoList = [
    { task: 'Học JavaScript', completed: false },
    { task: 'Tập thể dục', completed: true },
  ];
  
  // 1. Hàm thêm mới công việc vào todoList
  function addTask(task) {
    const newTask = { task: task, completed: false };
    todoList.push(newTask);
  }
  
  // 2. Hàm cập nhật công việc theo chỉ mục
  function updateTask(index, newTask, completed) {
    if (todoList[index]) {
      todoList[index].task = newTask;  // Cập nhật nội dung công việc
      todoList[index].completed = completed;  // Cập nhật trạng thái
    } else {
      console.log('Không tìm thấy công việc tại chỉ mục này.');
    }
  }
  
  // 3. Hàm xóa công việc theo chỉ mục
  function deleteTask(index) {
    if (todoList[index]) {
      todoList.splice(index, 1);  // Xóa công việc khỏi mảng
    } else {
      console.log('Không tìm thấy công việc tại chỉ mục này.');
    }
  }
  
  
  console.log('Trước khi thêm: ', todoList);
  addTask('Đọc sách');  
  console.log('Sau khi thêm: ', todoList);
  
  updateTask(1, 'Chạy bộ', false); 
  console.log('Sau khi cập nhật: ', todoList);
  
  deleteTask(0); 
  console.log('Sau khi xóa: ', todoList);
  
