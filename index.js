const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector("#popup_type_edit");
const editButton = profile.querySelector(".profile__but-edit");
const closeEditButton = popupEdit.querySelector(".popup__close");
const popupName = popupEdit.querySelector(".popup__input_data_name");
const popupDesc = popupEdit.querySelector(".popup__input_data_desc");
const profileName = profile.querySelector(".profile__name");
const profileDesc = profile.querySelector(".profile__bio");
const addButton = profile.querySelector(".profile__but-add");
const popupAdd = document.querySelector("#popup_type_add");
const closeAddButton = popupAdd.querySelector(".popup__close");
const cardsContainer = document.querySelector(".photo__cards");
const photoItem = cardsContainer.querySelectorAll(".photo__item");
const cardTemplate = document
	.querySelector("#item-template")
	.content.querySelector(".photo__item");
const addFormCard = document.querySelector(".popup__form");
const showPopup = document.querySelector(".show_card_popup");
const showImage = showPopup.querySelector(".show_card_popup__image");
const showTitle = showPopup.querySelector(".show_card_popup__title");
const showClose = showPopup.querySelector(".show_card_popup__close");

const initialCards = [
	{
		name: "Архыз",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
	},
	{
		name: "Челябинская область",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
	},
	{
		name: "Иваново",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
	},
	{
		name: "Камчатка",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
	},
	{
		name: "Холмогорский район",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
	},
	{
		name: "Байкал",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
	},
];

initialCards.forEach((elem) => {
	addCard(elem.name, elem.link);
});

function handleSubmitAddForm(event) {
	event.preventDefault();
	const name = event.target.querySelector(".popup__input_data_name");
	const link = event.target.querySelector(".popup__input_data_link");
	addCard(name.value, link.value);
	name.value = "";
	link.value = "";
	openClosePopup(popupAdd);
}

function addCard(name, link) {
	const cardElement = renderCard(name, link);
	cardsContainer.prepend(cardElement);
}

function renderCard(name, link) {
	const cardElement = cardTemplate.cloneNode(true);
	const cardName = cardElement.querySelector(".photo__name");
	const cardImg = cardElement.querySelector(".photo__image");
	cardName.textContent = name;
	cardImg.src = link;
	cardImg.alt = name;
	const cardBtnDelete = cardElement.querySelector(".photo__delete");
	const cardBtnLike = cardElement.querySelector(".photo__heart");

	cardBtnLike.addEventListener("click", (event) => {
		event.target.classList.toggle("photo__heart_active");
	});

	cardBtnDelete.addEventListener("click", (event) => {
		event.target.closest(".photo__item").remove();
	});

	cardImg.addEventListener("click", () => {
		showImage.src = link;
		showImage.alt = name;
		showTitle.textContent = name;
		openClosePopup(showPopup);
	});

	return cardElement;
}

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = popupName.value;
	profileDesc.textContent = popupDesc.value;
	openClosePopup(popupEdit);
}

function openClosePopup(popup) {
	popup.classList.toggle("popup_opened");
}

showClose.addEventListener("click", () => {
	openClosePopup(showPopup);
});

popupAdd.addEventListener("submit", handleSubmitAddForm);

addButton.addEventListener("click", () => {
	openClosePopup(popupAdd);
});

closeAddButton.addEventListener("click", () => {
	openClosePopup(popupAdd);
});

editButton.addEventListener("click", () => {
	profileName.value = popupName.textContent;
	profileDesc.value = popupDesc.textContent;
	openClosePopup(popupEdit);
});

closeEditButton.addEventListener("click", () => {
	openClosePopup(popupEdit);
});

popupEdit.addEventListener("submit", formSubmitHandler);
