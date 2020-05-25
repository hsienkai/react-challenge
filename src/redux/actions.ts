import axios from "axios";

export const favoriteImage = url => ({
	type: "FAVORITE_IMAGE",
	imageURL: url
})

export const unfavoriteImage = url => ({
	type: "UNFAVORITE_IMAGE",
	imageURL: url
})

export const updateImages = imageURLs => ({
	type: "UPDATE_IMAGES",
	imageURLs: imageURLs
})

export function fetchImages(text = "hound") {
	return (dispatch) => {
		return axios.get(`https://dog.ceo/api/breed/${text}/images/random/10`)
		.then((response) => {
			dispatch(updateImages(response.data.message))
		})
		.catch((error) => {
			console.log(error);
			dispatch(updateImages([]))
		})
	}
}

