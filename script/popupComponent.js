class SnappCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div onclick="openSnappPopup()" class="items_card" id="open-snapp-popup">
                <img class="items_card_image" src="./images/landing/snapp.png">
                <div class="items_card_title">
                <div class="fon-icons"><a target='_blank' href='https://handbook.hyperyek.com/docs/handbook/tools_and_methods/taxi' class='fa-solid fa-circle-info'></a></div>
                    <div class="items_card_name"><p>درخواست تاکسی</p></div>
                </div>
            </div>
            <div class="popup" id="snapp-popup">
                <div class="popup-content">
                    <p class="popup-content-title">درخواست تاکسی</p>
                    <p class="popup-content-p">جهت درخواست تاکسی سازمانی لطفا با مدیر دفتر (داخلی 101) تماس بگیرید.</p>
                    <button onclick="closeSnappPopupButton()" id="close-snapp-popup">متوجه شدم</button>
                </div>
            </div>
        `;
    }
}



customElements.define('snapp-card', SnappCard);


