<template>
	<div class="dolyami__modal">
		<div class="dolyami__modal_item">
			<div class="dolyamy__modal_content">
				<div class="dolyami__modal_header">
					<div class="dolyami__modal_title">разделите стоимость покупки</div>
					<button class="dolyami__modal_close" @click="useModalDolyami = false">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.929688 0.928711L15.0718 15.0708"
								stroke="#AF9280"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M0.928175 15.0708L15.0703 0.928711"
								stroke="#AF9280"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
				<div class="dolyami__modal_des">
					заплатите сейчас только часть, а оставшееся будем списывать каждые две
					недели
				</div>
				<UIMyDolyamiPayment />
				<div class="dolyami__modal_href">
					подробнее о сервисе можно узнать на
					<span class="dolyami__modal_span" @click="redirectPageDolyami"
						>dolyame.ru</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			useModalDolyami: useModalDolyami(),
			useDolyamiPrice: useDolyamiPrice(),
		}
	},
	computed: {},
	methods: {
		redirectPageDolyami() {
			window.open('https://dolyame.ru/', '_blank')
		},
	},
	mounted() {
		document.body.style.overflow = 'hidden'
	},
	unmounted() {
		this.useDolyamiPrice = 'сумма не обновлена'
		document.body.style.overflow = 'auto'
	},
}
</script>

<style scoped>
.dolyami__modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(5px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 21;
}
.dolyami__modal_item {
	/* min-width: 800px; */
	max-width: 800px;
	padding: 30px;
	background: #fff;
	/* border-radius: 40px; */
	transform: translateY(-80px);
}
.dolyami__modal_header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 30px;
}
.dolyami__modal_title {
	font-weight: 500;
	font-size: 36px;
	color: var(--brown);
	text-transform: lowercase;
	margin-bottom: 10px;
}
.dolyami__modal_close {
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(-10px) translateX(-5px);
	width: 24px;
	height: 24px;
	cursor: pointer;
}
.dolyami__modal_close svg {
	transition: all 0.4s ease;
}
.dolyami__modal_close:hover svg {
	transform: scale(1.1);
}
.dolyami__modal_des {
	display: flex;
	margin-bottom: 20px;
	font-size: 17px;
	font-weight: 300;
	color: var(--brown);
	text-transform: lowercase;
	word-break: break-all;
	max-width: 100%;
}
.dolyami__modal_inf {
	font-size: 17px;
	font-weight: 500;
	color: rgba(0, 0, 0, 0.4);
	text-transform: lowercase;
	word-break: break-all;
	max-width: 100%;
	margin-bottom: 2px;
}
.dolyami__modal_href {
	text-align: center;
	color: rgba(0, 0, 0, 0.4);
}
.dolyami__modal_span {
	color: var(--brown);
	cursor: pointer;
}
@media screen and (max-width: 1200px) {
	.dolyami__modal_title {
		font-size: 30px;
	}

	.dolyami__modal_des {
		font-size: 16px;
	}
	.dolyami__modal_inf {
		font-size: 16px;
	}
}
@media screen and (max-width: 936px) {
	.dolyami__modal_title {
		font-size: 27px;
	}

	.dolyami__modal_des {
		font-size: 15px;
	}
	.dolyami__modal_inf {
		font-size: 15px;
	}
}
@media screen and (max-width: 720px) {
	.dolyami__modal_item {
		margin: 0 20px;
	}
}
</style>
