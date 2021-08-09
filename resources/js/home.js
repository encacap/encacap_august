import Notification from "./notification";

const home = () => {
    const showButton = document.querySelector("button");
    const notification = new Notification();

    showButton.onclick = () => {
        notification.success(
            "Lưu bài viết không thành công",
            "Đã xảy ra lỗi khi <span>cố gằng kết nối tới máy chủ</span>.",
            [["Xem báo cáo lỗi", () => console.log("Update")]]
        );
    };
};

home();
