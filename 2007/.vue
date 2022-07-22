// Bài 1:
// 1. Creating.

// - beforeCreate(): thực thi trước khi một component được khởi tạo.
//     -> events chưa được khởi tạo
//     -> data được khai báo nhưng chưa tự cập nhật
<script>
    export default {
        data() {
            return {
                message: 'Hello World'
            }
        },
        beforeCreate() {
            console.log(this.message) // báo lỗi undefined
        }
    }
</script>

// - created(): thực thi ngay khi component được tạo
//      -> có thể  thao tác với data
//      -> events có thể được kích hoạt
//      -> template, DOM ảo chưa được mount và render
//      -> nên gọi API tới BE lấy dữ liệu -> component được mount có thể nhìn thấy ngay
<template>
    <div id="my-text">
        This is my text
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello World'
            }
        },
        created() {
            console.log(this.message)// Hello World

            console.log(document.getElementById('my-text').innerHTML) // error
        }
    }
</script>

// 2. Mounting
// - beforeMount() - thực thi sau khi component được compile - trước lần render đầu tiên
//      -> chưa thể truy cập DOM ảo
<template>
    <div id="my-text">
        This is my text
    </div>
</template>

<script>
    export default {
        beforeMount() {
            console.log(this) // là component hiện tại 
            console.log(document.getElementById('my-text').innerHTML)// lỗi null
         }
    }
</script>

// - mounted(): khi chúng ta nhìn thấy nội dung ở trình duyệt
//      -> quyền truy cập data, template, DOM
<template>
    <div id="my-text">
        This is my text
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$el)
            console.log(document.getElementById('my-text').innerHTML)
         }
    }
</script>

// 3. Updating
// - Data change/re-render
// - beforeUpdate(): thực thi khi dữ liệu trên component bị thay đổi - trước khi component re-render.

// - updated(): xảy ra sau beforeUpdate()
//      -> DOM được cập nhật lại

// 4. Unmounting
// - beforeUnmount():  xảy ra ngay trước khi component của chúng ta bị huỷ đi
//      -> còn đầy đủ quyền
//      -> thường dùng khi muốn xóa đi các sự kiện không cần thiết khi unmounted().
// - unmounted(): hầu như mọi thứ trên component đã bị huỷ đi
//      -> data vẫn còn và ta vẫn có thể truy cập được.

// Bài 2:
// Virtual DOM là cách thể hiện DOM thật của một trang web dưới dạng javascript object.
// Khi có sự thay đổi state của app
//  -> Virtual DOM sẽ được cập nhật lại
//  -> Virtual DOM mới so sánh với Virtual DOM cũ
//  -> Tìm những node cần thay đổi -> cập nhật lên DOM thật
// Quá trình sẽ được lặp lại khi có bất kỳ thay đổi nào 