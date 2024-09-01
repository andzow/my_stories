<template>
	<div class="payment">
		<OrderUIMyTitle>способ оплаты</OrderUIMyTitle>
		<div class="payment__content">
			<div
				v-for="(option, index) in paymentOptions"
				:key="index"
				class="payment__option"
			>
				<label
					class="payment__label"
					:for="`payment__label${index + 1}`"
					data-cursor-class="animateCursor"
				>
					<input
						type="radio"
						:id="`payment__label${index + 1}`"
						:value="`payment__label${index + 1}`"
						v-model="selectedOption"
						class="payment__custom"
					/>
					<span class="payment__custom_radio"></span>
					<div class="payment__details">
						<div class="payment__details_header">
							<div class="payment__name">{{ option.name }}</div>
							<div class="payment__details_img" v-if="index === 1">
								<img
									class="payment__details_logo"
									:src="'/paymentDolyami.svg'"
								/>
							</div>
						</div>
						<div
							class="payment__dolyami"
							v-if="
								index === 1 &&
								deliveryOptions &&
								selectedOption === 'payment__label2'
							"
						>
							<p class="payment__dolyami_text">
								разделите сумму покупки на 4 платежа. Сначала платите только
								часть, остальные списываются каждые 2 недели
							</p>
							<div class="payment__dolyami_menu">
								<UIMyDolyamiPayment
									:paymentPrice="`${(useSummDolyami / 4)
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`"
								/>
							</div>
						</div>
					</div>
				</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedOption: 'payment__label1',
			paymentOptions: [
				{
					name: 'Банковской картой',
				},
				{
					name: 'Оплата покупок частями',
				},
			],
			useOrderInfo: useOrderInfo(),
			useSummDolyami: useSummDolyami(),
			deliveryOptions: useDeliveryArr(),
		}
	},
	watch: {
		deliveryOptions(val) {
			console.log(val)
		},
		useOrderInfo(val) {
			if (val && this.selectedOption) {
				this.useOrderInfo.payment =
					this.selectedOption === 'payment__label1' ? true : false
			}
		},
	},
}
</script>

<style scoped>
.payment {
	padding: 20px 15px;
	border: 1px solid #af9280;
}
.payment__option {
	margin-bottom: 20px;
	display: flex;
	align-items: flex-start;
}

.payment__custom {
	display: none;
}
.payment__label {
	display: flex;
	align-items: flex-start;
}

.payment__custom + .payment__custom_radio {
	min-width: 20px;
	min-height: 20px;
	border-radius: 50%;
	border: 1.2px solid #af9280;
	background-color: #fff;
	display: inline-block;
	position: relative;
	margin-right: 10px;
	transition: border-color 0.4s ease;
	cursor: pointer;
}

.payment__custom + .payment__custom_radio::before {
	content: '';
	width: 0;
	height: 0;
	border-radius: 50%;
	background-color: #af9280;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: width 0.4s ease, height 0.4s ease, background-color 0.4s ease;
}

.payment__custom:checked + .payment__custom_radio::before {
	width: 12px;
	height: 12px;
}

.payment__custom:checked + .payment__custom_radio {
	border-color: #af9280;
}

.payment__details {
	display: inline-block;
	vertical-align: middle;
}
.payment__details_header {
	display: flex;
	column-gap: 30px;
}
.payment__details_img {
	display: flex;
}
.payment__name {
	font-weight: 300;
	font-size: 20px;
	color: var(--brown);
	line-height: 15px;
	text-transform: lowercase;
}
.payment__dolyami {
	margin-top: 20px;
}
.payment__dolyami_header {
	/* display: flex;
	align-items: flex-start;
	justify-content: space-between; */
	column-gap: 15px;
}
.payment__dolyami_logo {
	display: flex;
	min-width: 120px;
	margin-bottom: 5px;
}
.payment__dolyami_text {
	font-size: 16px;
	font-weight: 400;
	text-transform: lowercase;
}
.payment__dolyami_menu {
	margin-top: 20px;
}
@media screen and (max-width: 1400px) {
	.delivery__name {
		font-size: 18px;
		margin-bottom: 10px;
		line-height: 20px;
	}
	.delivery__price {
		font-size: 24px;
	}
	.delivery__description {
		font-size: 15px;
	}
}
@media screen and (max-width: 510px) {
	.payment__details_header {
		flex-direction: column;
		column-gap: 0;
		row-gap: 20px;
	}
}
</style>
