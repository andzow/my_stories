export const useDeliveryObj = () =>
	useState('use_delivery_obj', () => ({
		tariff_code: ['136', '137'],
		from_location: {
			code: 415,
		},
		to_location: {
			code: 44,
		},
	}))
export const useDeliveryMail = () =>
	useState('use_delivery_mail', () => ({
		'mail-category': 'ORDINARY',
		'mail-type': 'POSTAL_PARCEL',
		'index-from': '610000',
		'index-to': '109289',
		'mail-direct': 643,
		mass: 100,
	}))

export const useFilterDeliveryPackages = () => {
	const parseCart = JSON.parse(localStorage.getItem('cart'))
	const newArr = parseCart.map(el => {
		let widthEl = el.counter * el.width
		let weightEl = el.counter * el.weight
		let heightEl = el.counter * el.height
		let lengthEl = el.counter * el.length
		return {
			weight: weightEl,
			length: lengthEl,
			width: widthEl,
			height: heightEl,
		}
	})
	let width = 0
	let weight = 0
	let length = 0
	let height = 0
	newArr.forEach(el => {
		width += el.width
		weight += el.weight
		length += el.length
		height += el.height
	})
	return [
		{
			weight: weight,
			length: length,
			width: width,
			height: height,
		},
	]
}

export const useCityCode = () => useState('use_city_code', () => 44)
export const useBuyerAddress = () => useState('use_buyer_address', () => '')
export const useIndexDelivery = () => useState('use_index_delivery', () => 0)
export const useCheckErrors = () => useState('use_check_errors', () => [])
export const useSelectedSamovivos = () =>
	useState('use_selected_samovivos', () => false)
export const useActiveAddress = () => useState('use_active_address', () => null)
export const useLoadingButton = () => useState('use_loading_btn', () => false)
export const usePvzCode = () => useState('use_pvz_code', () => null)
export const useActiveRegion = () =>
	useState('use_active_region', () => ({
		settlement: 'Москва',
		region: 'Москва',
	}))

export const useActivePvzMail = () => useState('active_pvz_mail', () => false)

function getDayPadej(days) {
	if (days % 100 >= 11 && days % 100 <= 19) {
		return 'дней'
	}
	switch (days % 10) {
		case 1:
			return 'день'
		case 2:
		case 3:
		case 4:
			return 'дня'
		default:
			return 'дней'
	}
}

function toCamelCase(str) {
	return str.replace(/-./g, match => match.charAt(1).toUpperCase())
}

function convertKeysToCamelCase(obj) {
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}

	if (Array.isArray(obj)) {
		return obj.map(convertKeysToCamelCase)
	}

	return Object.keys(obj).reduce((acc, key) => {
		const camelCaseKey = toCamelCase(key)
		acc[camelCaseKey] = convertKeysToCamelCase(obj[key])
		return acc
	}, {})
}

export const useGetPvzMail = (data, checkAction) => {
	if (data.length <= 0) {
		return null
	}
	return data.map(element => {
		const deliveryObj = {}

		const el = convertKeysToCamelCase(element)
		if (el.deliveryTime?.minDays) {
			deliveryObj.calendar_min = el.deliveryTime?.minDays
			deliveryObj.calendar_max = el.deliveryTime?.maxDays
			deliveryObj.deliveryTime =
				deliveryObj.calendar_min === deliveryObj.calendar_max
					? deliveryObj.calendar_min
					: deliveryObj.calendar_min + '-' + deliveryObj.calendar_max
		} else {
			deliveryObj.calendar_max = el.deliveryTime?.maxDays
			deliveryObj.deliveryTime = `${el.deliveryTime?.maxDays}`
			deliveryObj.day = deliveryObj.calendar_max
		}
		let minPadej = null
		let maxPadej = getDayPadej(deliveryObj?.calendar_max)
		if (deliveryObj?.calendar_min) {
			maxPadej = getDayPadej(deliveryObj?.calendar_min)
		}
		deliveryObj.nameCompany = 'Почта России'
		deliveryObj.name =
			el.name === 'package'
				? 'Почта России (самовывоз)'
				: 'Почта России (доставка курьером)'
		deliveryObj.day = minPadej === maxPadej ? minPadej : maxPadej
		deliveryObj.ship =
			el.name === 'courier' ? 'ONLINE_COURIER' : 'ONLINE_PARCEL'
		deliveryObj.des =
			el.name === 'package'
				? 'Почта России (самовывоз)'
				: 'доставка заказа осуществляется курьером компании Почта России'
		deliveryObj.sumDelivery = checkAction
			? 0
			: Math.ceil((el['totalRate'] + el['totalVat']) / 100) + 7
		return deliveryObj
	})
}
export const useCheckPvzMail = data => {
	const newArr = []
	for (let key in data) {
		if (!data[key]?.errors) newArr.push({ ...data[key], name: key })
	}
	return newArr
}
export const useDeliveryLoad = (check, response) => {
	const newArr = []
	for (let key in response) {
		const minPadej = getDayPadej(response[key].period_min)
		response[key]?.period_max
		let maxPadej = null
		if (response[key]?.period_max) {
			maxPadej = getDayPadej(response[key]?.period_max)
		}
		newArr.push({
			codeTariff: key === 'tariff_136' ? 136 : 137,
			name:
				key === 'tariff_136' ? 'СДЭК (самовывоз)' : 'СДЭК (Доставка курьером)',
			...response[key],
			nameCompany: 'СДЕК',
			day: minPadej === maxPadej ? minPadej : maxPadej,
			des:
				key === 'tariff_136'
					? 'СДЭК (самовывоз)'
					: 'Доставка заказа осуществляется курьером компании СДЭК',
			sumDelivery: check ? 0 : response[key].total_sum,
			deliveryTime:
				response[key].period_min === response[key].period_max
					? response[key].period_min
					: response[key].period_min + '-' + response[key].period_max,
		})
	}
	return newArr
}

export const useActiveMenu = () => useState('use_active_menu', () => false)
export const useProductOther = () => useState('use_product_other', () => null)

//Inputs val

export const useInputMobile = () => useState('use_input_mobile', () => '')
export const useInputStreet = () => useState('use_input_street', () => '')
export const useInputHouse = () => useState('use_input_house', () => '')
export const useInputApartment = () => useState('use_input_apartment', () => '')
export const useInputCorpus = () => useState('use_input_corpus', () => '')
export const useCheckHydration = () =>
	useState('use_check_hydration', () => false)
export const useCheckPreload = () => useState('use_check_preload', () => false)
export const useMainPreload = () => useState('use_main_preload', () => false)
export const useOpenFilter = () => useState('use_open_filter', () => false)

export const useCheckLoadImageCart = async arr => {
	if (!arr || arr.length <= 0) {
		return []
	}
	const filteredArr = await Promise.all(
		arr.map(async el => {
			try {
				const response = await fetch(el.imageSrc)
				if (response.ok) {
					return el
				}
			} catch (err) {
				return null
			}
		})
	)
	const finalFilteredArr = filteredArr.filter(el => {
		if (el) return el
	})
	localStorage.clear()
	localStorage.setItem('cart', JSON.stringify(finalFilteredArr))

	return finalFilteredArr
}
