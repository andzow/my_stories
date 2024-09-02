<template>
	<div
		class="dolyami__modal_menu"
		:class="{
			activeMenuDolaymiPrice: paymentPrice,
			oldMenyDolyamiPrice: !paymentPrice,
		}"
	>
		<div class="dolyami__modal_cards">
			<div class="dolyami__modal_card" v-for="(el, idx) in getFullDate">
				<div class="dolyami__modal_date" :class="{ activeText: idx === 0 }">
					{{ el }}
				</div>
				<div class="dolyami__modal__price" :class="{ activeText: idx === 0 }">
					{{ paymentAmount[idx].toLocaleString('ru-RU') }}
					₽
				</div>
				<div
					class="dolyami__modal__line"
					:class="{ activeLine: idx === 0 }"
				></div>
			</div>
		</div>
		<div class="dolyami__modal_inf">
			примерный график, может быть сервисный сбор
		</div>
	</div>
</template>

<script>
export default {
	props: {
		paymentPrice: String,
	},
	data() {
		return {
			useModalDolyami: useModalDolyami(),
			useDolyamiPrice: useDolyamiPrice(),
		}
	},
	computed: {
		getFullDate() {
			let n = 0
			let datesArray = []

			const monthDeclensions = {
				январь: 'янв',
				февраль: 'фев',
				март: 'мар',
				апрель: 'апр',
				май: 'мая',
				июнь: 'июн',
				июль: 'июл',
				август: 'авг',
				сентябрь: 'сен',
				октябрь: 'окт',
				ноябрь: 'ноя',
				декабрь: 'дек',
			}

			for (let i = 1; i <= 4; i++) {
				if (n === 0) {
					datesArray.push('Сегодня')
				} else {
					let futureDate = new Date()
					futureDate.setDate(futureDate.getDate() + n * 7)

					let day = futureDate.getDate()
					let month = futureDate.toLocaleString('ru-RU', { month: 'long' })
					let monthDeclined = monthDeclensions[month]

					datesArray.push(`${day} ${monthDeclined}`)
				}

				n += 2
			}
			return datesArray
		},
		paymentAmount() {
			const price = this.paymentPrice ? this.paymentPrice : this.useDolyamiPrice
			const totalAmount = parseFloat(price.replace(/\s+/g, '')) * 4
			const basePayment = Math.floor(totalAmount / 4)
			const remainder = totalAmount - basePayment * 3
			return [basePayment, basePayment, basePayment, Math.round(remainder)]
		},
	},
}
</script>

<style scoped>
.dolyami__modal_menu {
	background: #f6f7f8;
	/* border-radius: 10px; */
	padding: 12px;
	margin-bottom: 20px;
}
.activeMenuDolaymiPrice {
	border: 1px solid var(--brown) !important;
	background: none !important;
}
.dolyami__modal_cards {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 15px;
	margin-bottom: 10px;
}
.dolyami__modal_date {
	font-size: 16px;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.4);
	text-transform: lowercase;
	word-break: break-all;
	max-width: 100%;
	margin-bottom: 3px;
}
.dolyami__modal__price {
	font-size: 17px;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.4);
	text-transform: lowercase;
	word-break: break-all;
	max-width: 100%;
	margin-bottom: 10px;
}
.activeText {
	color: var(--brown);
}
.dolyami__modal__line {
	width: 100%;
	height: 6px;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 6px;
}
.activeLine {
	background: var(--brown);
}
@media screen and (max-width: 1420px) {
	.activeMenuDolaymiPrice .dolyami__modal_cards {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media screen and (max-width: 930px) {
	.activeMenuDolaymiPrice .dolyami__modal_cards {
		grid-template-columns: repeat(4, 1fr);
	}
}
@media screen and (max-width: 638px) {
	.activeMenuDolaymiPrice .dolyami__modal_cards {
		grid-template-columns: repeat(2, 1fr);
	}
	.oldMenyDolyamiPrice .dolyami__modal_cards {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media screen and (max-width: 400px) {
	.activeMenuDolaymiPrice .dolyami__modal_cards {
		grid-template-columns: repeat(1, 1fr);
	}
	.oldMenyDolyamiPrice .dolyami__modal_cards {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
