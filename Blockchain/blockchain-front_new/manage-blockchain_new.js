//////SELECTORS//////
const btnGetContainer = document.querySelector("#btnGetContainer");
const containerBlockchain = document.querySelector("#containerBlockchain");

const loaderBox = document.querySelector("#loaderBox");
const loader = document.querySelector("#loader");
const loaderContent = document.querySelector("#loaderContent");
const content = document.querySelector("#content");
const loaderContainer = document.querySelector("#loaderContainer");

//////OBJECTS//////
const ui = new UI();
const request = new Request(
  "https://simple-blockchain-app.herokuapp.com/blocks"
);

//////FUNCTIONS//////
localStorage.setItem("getWithIndexNumber", true);

const getAllBlocksAndAddToUI = async getWithIndexNumber => {
  containerBlockchain.innerHTML = "";

  loaderContainer.classList.add("height100vh");
  content.style.display = "none";
  loaderBox.style.display = "flex";
  loader.style.display = "block";
  loaderContent.style.display = "block";

  const response = await request.get(getWithIndexNumber);

  loaderContainer.classList.remove("height100vh");
  content.style.display = "block";
  loaderBox.style.display = "none";
  loader.style.display = "none";
  loaderContent.style.display = "none";

  ui.addAllBlocksToUI(response.data.allBlocks);
};

const getVAluesAndUpdateBlock = e => {
  if (e.target.className.includes("btnEncrypt")) {
    const containerBlock = e.target.parentElement;
    const sellerUsername =
      containerBlock.children[1].children[1].children[0].value;
    const buyerUsername =
      containerBlock.children[2].children[1].children[0].value;
    const productCategory =
      containerBlock.children[3].children[1].children[0].value;
    const productQuantity = parseInt(
      containerBlock.children[4].children[1].children[0].value,
      10
    );
    const productPrice = parseInt(
      containerBlock.children[5].children[1].children[0].value,
      10
    );
    const hash = containerBlock.children[7].children[1].children[0].value;

    (async () => {
      const response = await request.patch(
        hash,
        {
          sellerUsername: sellerUsername,
          buyerUsername: buyerUsername,
          productCategory: productCategory,
          productQuantity: productQuantity,
          productPrice: productPrice
        },
        e.target.value
      );

      alert(`${response.data.updatedBlock.index}. blok güncellendi`);

      if (response) {
        getAllBlocksAndAddToUI(localStorage.getItem("getWithIndexNumber"));
      }
    })();
  }
};

//////EVENT LISTENERS//////
document.addEventListener("DOMContentLoaded", function () {
  getAllBlocksAndAddToUI(localStorage.getItem("getWithIndexNumber"));
});

btnGetContainer.addEventListener("click", e => {
  if (e.target.className.includes("btnGet")) {
    getAllBlocksAndAddToUI(e.target.value);
    localStorage.setItem("getWithIndexNumber", e.target.value);
  }
});

containerBlockchain.addEventListener("click", getVAluesAndUpdateBlock);
