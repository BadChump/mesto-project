const profile = document.querySelector('.profile');
let popup = document.querySelector('.popup');
const editButton = profile.querySelector('.profile__but-edit');
const closeButton = popup.querySelector('.popup__close');
let editName = popup.querySelector('.popup__input_data_name');
let editDesc = popup.querySelector('.popup__input_data_desc');
let profileName = profile.querySelector('.profile__name');
let profileDesc = profile.querySelector('.profile__bio');
let profileSubmit = popup.querySelector('.popup__button');


function openPopup() {
  popup.classList.add('popup_opened');
}

function fillProfileForm() {
	editName.value = profileName.textContent;
	editDesc.value = profileDesc.textContent;
}

editButton.addEventListener('click', openPopup);
editButton.addEventListener('click', fillProfileForm);

function closePopup() {
	popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault();
	profileName.textContent = editName.value;
	profileDesc.textContent = editDesc.value;
	closePopup();
}

profileSubmit.addEventListener('click', formSubmitHandler);

closeButton.addEventListener('click', closePopup);

