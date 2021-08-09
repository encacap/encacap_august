import { getRandomNumber as random } from "./generator";

class Notification {
    constructor(option) {
        this.container = document.createElement("div");
        this.timeouts = [];

        this.container.className = "notification";

        document.querySelector("body").prepend(this.container);
    }

    renderIcon(status) {
        if (status === "error") {
            return `<ion-icon name="remove-circle"></ion-icon>`;
        } else if (status === "success") {
            return `<ion-icon name="checkmark-circle"></ion-icon>`;
        } else if (status === "warning") {
            return `<ion-icon name="warning"></ion-icon>`;
        } else {
            return `<ion-icon name="notifications-sharp"></ion-icon>`;
        }
    }

    renderNotification(title, additonalData) {
        const tmpNode = document.createElement("div");
        const { isShowCloseButton, className, message, buttons } = additonalData;

        let closeButtonNode = "";
        let messageNode = "";

        if (message && message.length > 0) {
            messageNode = `<div class="notification-content">${message}</div>`;
        }

        if (isShowCloseButton) {
            closeButtonNode = `
                <div class="notification-close">
                    <ion-icon name="close"></ion-icon>
                </div>
            `;
        }

        tmpNode.innerHTML = `
            <div class="
                notification-item 
                notification-${className !== "normal" ? className : ""} 
                animate-slide-up 
                relative
            ">
                <div class="notification-header">
                    <div class="notification-icon">
                        ${this.renderIcon(className)}
                    </div>
                    <div class="notification-title">${title}</div>
                    ${closeButtonNode}
                </div>
                ${messageNode}
            </div>
        `;

        const notificationNode = tmpNode.querySelector(".notification-item");

        if (buttons && buttons.length > 0) {
            const footerNode = document.createElement("div");

            footerNode.className = "notification-action";

            if (buttons[0]) {
                const primaryButtonNode = document.createElement("button");
                const [title, event] = buttons[0];

                primaryButtonNode.className = "btn btn-primary";
                primaryButtonNode.innerText = title;

                if (typeof event === "function") {
                    primaryButtonNode.addEventListener("click", event);
                } else if (typeof event === "string") {
                    primaryButtonNode.addEventListener("click", () => {
                        window.location.href = event;
                    });
                }

                footerNode.appendChild(primaryButtonNode);
            }

            if (buttons[1]) {
                const secondaryButtonNode = document.createElement("button");
                const [title, event] = buttons[1];

                secondaryButtonNode.className = "btn btn-secondary";
                secondaryButtonNode.innerText = title;

                if (typeof event === "function") {
                    secondaryButtonNode.addEventListener("click", event);
                } else if (typeof event === "string") {
                    secondaryButtonNode.addEventListener("click", () => {
                        window.location.href = event;
                    });
                }

                footerNode.appendChild(secondaryButtonNode);
            }

            notificationNode.appendChild(footerNode);
        }

        return notificationNode;
    }

    pushNotification(notificationNode) {
        const id = random();

        this.container.appendChild(notificationNode);
        this.timeouts.push({
            id,
            timeoutId: setTimeout(() => this.remove(id, notificationNode), 5000),
        });
    }

    remove(notificationId, notificationNode) {
        const { timeoutId: timeout } = this.timeouts.find(({ id }) => id === notificationId);
        clearTimeout(timeout);
        notificationNode.classList.add("animate-slide-down");
        setTimeout(() => {
            this.container.removeChild(notificationNode);
        }, 150);
    }

    prePush(type, data) {
        const notificationNode = this.renderNotification(data.title, {
            className: type,
            ...data,
        });

        this.pushNotification(notificationNode);
    }

    normal(title, message = null, buttons = null) {
        this.prePush("normal", { title, message, buttons });
    }

    error(title, message = null, buttons = null) {
        this.prePush("error", { title, message, buttons });
    }

    success(title, message = null, buttons = null) {
        this.prePush("success", { title, message, buttons });
    }

    warning(title, message = null, buttons = null) {
        this.prePush("warning", { title, message, buttons });
    }
}

export default Notification;
