class UI {
  constructor() {
    this.containerBlockchain = document.querySelector("#containerBlockchain");
    this.btnGet = document.querySelectorAll(".btnGet");
  }

  addAllBlocksToUI(blocks) {
    let hideBtnUpdateWithHash, hideBtnWithOpeningChain;

    const getWithIndexNumber =
      localStorage.getItem("getWithIndexNumber") === "true";

    if (getWithIndexNumber == true) {
      this.btnGet[0].classList.add("hidden");
      this.btnGet[1].classList.remove("hidden");
      hideBtnWithOpeningChain = "hidden";
    } else if (getWithIndexNumber == false) {
      this.btnGet[1].classList.add("hidden");
      this.btnGet[0].classList.remove("hidden");
      hideBtnUpdateWithHash = "hidden";
    } else {
      this.btnGet[0].classList.add("hidden");
      this.btnGet[1].classList.remove("hidden");
    }

    for (let i = 0; i < blocks.length; i++) {
      let color = "green";
      let btnEncryptColor = "red";

      if (getWithIndexNumber && i != blocks.length - 1) {
        if (blocks[i].hash == blocks[i + 1].previousHash) {
          color = "green";
          btnEncryptColor = "red";
        } else {
          color = "red";
          btnEncryptColor = "green";
        }
      }

      let string = `<div class="${color} containerBlock">
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm">Block</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="inputBlockIndex form-control form-control-sm"
              value="${blocks[i].index}"
              disabled
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm">Satıcı</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="inputSellerUsername form-control form-control-sm"
              value="${blocks[i].data.sellerUsername}"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm">Alıcı</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="inputBuyerUsername form-control form-control-sm"
              value="${blocks[i].data.buyerUsername}"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm"
            >Ürün kategorisi</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="inputProductCategory form-control form-control-sm"
              onkeypress="return /[a-z]/i.test(event.key)"
              value="${blocks[i].data.productCategory}"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm"
            >Ürün miktarı</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="inputProductQuantity form-control form-control-sm"
              onkeypress="return /[0-9]/i.test(event.key)"
              value="${blocks[i].data.productQuantity}"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm">Ürün fiyatı</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="inputProductPrice form-control form-control-sm"
              onkeypress="return /[0-9]/i.test(event.key)"
              value="${blocks[i].data.productPrice}"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm">Önceki Hash</label>
          <div class="forHash col-sm-10">
            <input
              type="text"
              class="inputPreviousHash form-control form-control-sm"
              value="${blocks[i].previousHash}"
              disabled
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label col-form-label-sm">Hash</label>
          <div class="forHash col-sm-10">
            <input
              type="text"
              class="inputHash form-control form-control-sm"
              value="${blocks[i].hash}"
              disabled
            />
          </div>
        </div>
        <button type="button" value="true" class="${hideBtnUpdateWithHash} btnEncrypt ${btnEncryptColor} btn">HASH BİLGİSİNE GÖRE ŞİFRELE</button>
        <button type="button" value="false" class="${hideBtnWithOpeningChain} btnEncrypt ${btnEncryptColor} btn">BLOKLARI AÇARAK ŞİFRELE</button>
      </div>`;

      this.containerBlockchain.insertAdjacentHTML("beforeend", string);
    }
  }
}
