<template>
	<section class="main">
		<div class="main__content">
			<div class="main__container">
				<CartMyMainEmpty v-if="checkNews" />

				<div
					class="main__items"
					:style="{ activeBorder: arrLocale || arrLocale?.length > 0 }"
				>
					<div
						class="main__cards"
						:class="{
							activeOpacityCart:
								checkNews && (arrLocale || arrLocale?.length > 0),
						}"
					>
						<CartMyMainItem
							v-for="(item, idx) in getStorageArray"
							:key="item"
							:item="item"
							:idx="idx"
							@addCounter="addCounter({ ...item, idx })"
							@delCounter="delCounter({ ...item, idx })"
							@delItem="deleteItem(idx)"
						/>
					</div>
					<div
						class="main__items_load"
						v-if="!checkNews && (!arrLocale || arrLocale?.length <= 0)"
					>
						<UIMyLoadItem :backgroundDisable="true" />
					</div>
				</div>
				<div
					class="main__full"
					v-if="arrLocale && arrLocale?.length > 0"
					ref="mainFull"
				>
					<div class="main__full_block">
						<div class="main__full_price">
							{{ fullSumm.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} ₽
						</div>
						<div class="main__full_button">
							<UIButtonMyButton
								@click="$router.push('/order')"
								info="оформить заказ"
								fontSize="24"
								data-cursor-class="animateCursor"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			fullSumm: null,
			useGsapAnimationOpacity: useGsapAnimationOpacity,
			arrLocale: null,
			checkNews: false,
			useFormatNumberToPrice: useFormatNumberToPrice,
			useLengthCart: useLengthCart(),
			useCheckLoadImageCart: useCheckLoadImageCart,
		}
	},
	computed: {
		getStorageArray() {
			return this.arrLocale
		},
	},
	methods: {
		initCartLength() {
			const cart = JSON.parse(localStorage.getItem('cart'))
			if (!cart || cart?.length <= 0) {
				this.useLengthCart = null
			} else {
				this.useLengthCart = cart.length
			}
		},
		updateLocalStorage(arr) {
			if (arr) {
				localStorage.setItem('cart', JSON.stringify(arr))
				if (arr.length > 0) {
					this.checkNews = false
				} else {
					this.checkNews = true
				}
				return
			}
			localStorage.setItem('cart', null)
		},
		сalcCounter(el, addCount) {
			let fullPriceConvert = parseInt(
				el.price.toString().replace(/\s/g, ''),
				10
			)
			const calcMath = addCount
				? parseInt(el.counter) + 1
				: parseInt(el.counter) - 1
			const fullPriceSumm = this.useFormatNumberToPrice(
				fullPriceConvert * calcMath
			)
			if (calcMath === 0) {
				return false
			}
			return {
				fullPrice: fullPriceSumm,
				counter: calcMath,
			}
		},
		deleteItem(idx) {
			this.arrLocale.splice(idx, 1)
			this.updateLocalStorage(this.arrLocale)
			this.initFullPrice()
			this.initCartLength()
		},
		addCounter(item) {
			this.arrLocale.forEach((el, idx) => {
				if (idx === item.idx) {
					const { fullPrice, counter } = this.сalcCounter(el, true)
					this.arrLocale[idx].fullPrice = fullPrice
					this.arrLocale[idx].counter = counter
				}
			})
			this.updateLocalStorage(this.arrLocale)
			this.initFullPrice()
		},
		delCounter(item) {
			this.arrLocale.forEach((el, idx) => {
				if (idx === item.idx) {
					const { fullPrice, counter } = this.сalcCounter(el)
					if (!counter) {
						this.arrLocale.splice(item.idx, 1)
						return
					}
					this.arrLocale[idx].fullPrice = fullPrice
					this.arrLocale[idx].counter = counter
				}
				return el
			})
			this.initFullPrice()
			this.updateLocalStorage(this.arrLocale)
			this.initCartLength()
		},
		async initLocalStorage() {
			// localStorage.clear();
			// localStorage.setItem("cart", JSON.stringify(this.arrNewLocale));
			try {
				const arrLocaleStore = await this.useCheckLoadImageCart(
					JSON.parse(localStorage.getItem('cart'))
				)
				this.useLengthCart = arrLocaleStore.length
				if (!arrLocaleStore || arrLocaleStore.length <= 0) {
					this.arrLocale = []
					this.arrLocale = arrLocaleStore
					return
				}
				this.arrLocale = arrLocaleStore.map(el => {
					const formatePrice = this.useFormatNumberToPrice(el.price)
					let fullPriceConvert = parseInt(
						el.price.toString().replace(/\s/g, ''),
						10
					)
					const fullPriceSumm = this.useFormatNumberToPrice(
						fullPriceConvert * parseInt(el.counter)
					)
					return { ...el, price: formatePrice, fullPrice: fullPriceSumm }
				})
				this.initFullPrice()
			} catch {
				this.arrLocale = []
				this.checkNews = true
			}
		},
		initFullPrice() {
			let summ = 0
			this.arrLocale.forEach(el => {
				let priceConvert = parseInt(el.price.toString().replace(/\s/g, ''), 10)
				summ = summ + priceConvert * parseInt(el.counter)
			})
			this.fullSumm = this.useFormatNumberToPrice(summ)
		},
		initGsap() {
			nextTick(() => {
				this.useGsapAnimationOpacity(
					['.main__full_price', '.main__full_button'],
					'.main'
				)
			})
		},
	},
	async mounted() {
		await this.initLocalStorage()
		if (this.arrLocale?.length > 0) {
			this.checkNews = false
			return
		}
		this.checkNews = true
	},
	watch: {
		arrLocale(val) {
			this.initGsap()
		},
	},
}
</script>

<style scoped>
.main {
	position: relative;
	width: 100%;
	padding-top: 120px;
	padding-bottom: 56px;
	z-index: 17;
}
.main__content {
	max-width: 1920px;
	width: 100%;
	margin: 0 auto;
	padding: 0 30px;
}
.main__container {
	display: flex;
	flex-direction: column;
}
.main__items {
	margin-right: 67px;
	border-top: 1px solid rgba(0, 0, 0, 0);
	transition: all 0.4s ease;
}
.activeBorder {
	border-top: 1px solid #d2bcae;
	margin-bottom: 40px;
}
.activeOpacityCart {
	opacity: 0;
}
.main__items_load {
	width: 100%;
	height: 400px;
	/* background: red; */
}
.main__full {
	padding-right: 67px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-top: 60px;
}
.main__full_block {
	min-width: 354px;
}
.main__full_button {
	opacity: 0;
}
.main__full_price {
	text-align: center;
	font-size: 36px;
	font-weight: 400;
	color: var(--brown);
	text-transform: lowercase;
	margin-bottom: 35px;
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
@media screen and (max-width: 1400px) {
	.main__full_price {
		font-size: 30px;
	}
}

@media screen and (max-width: 1130px) {
	.main__items {
		margin-right: 0px;
	}
	.main__full {
		padding-right: 0;
	}
}
@media screen and (max-width: 1100px) {
	.main {
		padding-top: 110px;
	}
}

@media screen and (max-width: 776px) {
	.main__full_price {
		text-align: start;
	}
	.main__full_button {
		display: flex;
		justify-content: flex-end;
		text-align: end;
		max-width: 250px;
	}
	.main__full_block {
		min-width: 100%;
	}
}
</style>
