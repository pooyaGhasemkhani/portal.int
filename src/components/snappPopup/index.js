import "../../styles/popup/popup.scss";
export function snappPopup() {
  class SnappCard extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
                <div class="landing_card" id="open-snapp-popup">
                    <img class="landing_card_image" src="./assets/images/landing/snapp.png">
                    <div class="landing_card_title">
                        <div class="fon-icons"><a target='_blank' href='https://handbook.hyperyek.com/docs/handbook/tools_and_methods/taxi' class='fa-solid fa-circle-info'><span class='tooltiptext'>راهنمای استفاده از ابزار</span></a></div>
                        <div class="landing_card_name"><p>درخواست تاکسی</p></div>
                    </div>
                </div>
                <div class="popup" id="snapp-popup">
                    <div class="popup-content">
                        <p class="popup-content-title">درخواست تاکسی</p>
                        <p class="popup-content-p">جهت درخواست تاکسی سازمانی لطفا با مدیر دفتر (داخلی 101) تماس بگیرید.</p>
                        <button id="close-snapp-popup">متوجه شدم</button>
                    </div>
                </div>
            `;

      const openSnappPopup = this.querySelector("#open-snapp-popup");
      openSnappPopup.addEventListener("click", () => {
        this.openSnappPopup();
      });

      const closeButton = this.querySelector("#close-snapp-popup");
      closeButton.addEventListener("click", () => {
        this.closeSnappPopup();
      });
    }

    openSnappPopup() {
      const snappPopup = this.querySelector("#snapp-popup");
      snappPopup.style.display = "block";
    }

    closeSnappPopup() {
      const snappPopup = this.querySelector("#snapp-popup");
      snappPopup.style.display = "none";
    }
  }

  customElements.define("snapp-card", SnappCard);
}
snappPopup();
