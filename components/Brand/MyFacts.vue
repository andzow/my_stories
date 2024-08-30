<template>
	<section class="facts">
		<div class="facts__content">
			<div class="facts__mob">
				<h2 class="facts__mob_name">факты о нас</h2>
				<div class="facts__mob_items">
					<div
						class="facts__mob_block"
						v-for="(item, idx) in arrFactsFirst"
						:key="item"
						:class="['facts__mob_block' + (idx + 1)]"
					>
						<div class="facts__mob_number">
							{{ `( &nbsp;${idx + 1}&nbsp; )` }}
						</div>
						<p class="facts__mob_text" v-html="item.text"></p>
					</div>
					<div class="facts__mob_img">
						<img
							class="facts__images_photo"
							src="@/assets/images/Brand/facts2.webp"
							alt="Фотография бренда"
							width="130"
							height="136"
						/>
					</div>
				</div>
			</div>
			<div class="facts__menu">
				<h2 class="facts__title">факты о нас</h2>
				<div class="facts__items">
					<div class="facts__item" v-for="(item, idx) in arrFacts" :key="item">
						<div class="facts__number" :class="['facts__number' + (idx + 1)]">
							{{ `( &nbsp;${idx + 1}&nbsp; )` }}
						</div>
						<p
							class="facts__text"
							:class="['facts__text' + (idx + 1)]"
							ref="factsText"
							v-html="item.text"
						></p>
					</div>
				</div>
			</div>
		</div>
		<div class="facts__mobile" ref="factsMobile">
			<div
				class="facts__mob_block"
				v-for="(item, idx) in arrFactsSec"
				:class="['facts__mob_block' + (idx + 3)]"
				:key="item"
			>
				<div class="facts__mob_number">
					{{ `( &nbsp;${idx + 3}&nbsp; )` }}
				</div>
				<p class="facts__mob_text" v-html="item.text"></p>
			</div>
		</div>
		<div class="facts__images">
			<div class="facts__images_img facts__images_img1">
				<img
					class="facts__images_photo facts__images_photo1"
					src="@/assets/images/Brand/facts1.webp"
					alt="Фотография бренда"
					width="226"
					height="237"
				/>
			</div>
			<div class="facts__images_img facts__images_img2">
				<img
					class="facts__images_photo"
					src="@/assets/images/Brand/facts2.webp"
					alt="Фотография бренда"
					width="130"
					height="136"
				/>
			</div>
		</div>
		<div class="facts__m">
			<img
				class="facts__m_img"
				src="@/assets/images/Brand/factsL.webp"
				alt="Фотография бренда большого размера"
				width="451"
				height="470"
			/>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			arrFacts: [
				{
					text: `бренд основан в <span class="facts__span">2020 году </span>командой профессионалов, которая до этого занималась индивидуальными заказами и пошивом люксовых платьев.`,
				},
				{
					text: `<span class="facts__span">70%</span> наших клиентов, сделав первый заказ - остаются с нами. Спасибо, что вы выбираете нас снова и снова, доверяя нашему качеству и сервису.`,
				},
				{
					text: `У нас есть специальный отдел, который <span class="facts__span">под микроскопом</span> внимательно изучает все ваши идеи, пожелания и воплощает их в жизнь.`,
				},
				{
					text: ` вся наша команда - <span class="facts__span">творческие и разносторонние люди.</span> Мы любим петь и танцевать, и всю энергию вкладываем в новые вещи для вас`,
				},
			],
			arrFactsFirst: [
				{
					text: `Бренд основан <span class="facts__span">в 2020 году</span> (командой, которая до этого занималась индивидуальным пошивом люксовых платьев).`,
				},
				{
					text: `<span class="facts__span">70%                                          </span> - клиентов сделавшие первый заказ - остаются с нами`,
				},
			],
			arrFactsSec: [
				{
					text: `У нас есть специальный отдел, который <span class="facts__span">под микроскопом</span> внимательно изучает все ваши идеи, пожелания и воплощает их в жизнь.`,
				},
				{
					text: ` вся наша команда - <span class="facts__span">творческие и разносторонние люди.</span> Мы любим петь и танцевать, и всю энергию вкладываем в новые вещи для вас`,
				},
			],
			useGsapAnimationOpacity: useGsapAnimationOpacity,
		}
	},
	methods: {
		initGsap() {
			this.useGsapAnimationOpacity(
				[
					'.facts__number1',
					'.facts__number2',
					'.facts__number3',
					'.facts__number4',
					'.facts__title',
				],
				'.facts__item'
			)
			let delay = 0.5

			this.$refs.factsText.forEach((el, idx) => {
				this.useGsapAnimationOpacity(
					['.facts__text' + (idx + 1)],
					'.facts__item',
					false,
					delay
				)
				delay += 0.2
			})
			this.useGsapAnimationOpacity(
				['.facts__images_img1'],
				'.facts__images_img1',
				false,
				0.7
			)
			this.useGsapAnimationOpacity(
				['.facts__images_img2'],
				'.facts__images_img2',
				false,
				0.7
			)
		},
		setLeftEl() {
			nextTick(() => {
				const elHtml = this.$refs.factsMobile
				let imgEl = null
				if (window.innerWidth > 1100) {
					imgEl = document
						.querySelector('.about__photo_img')
						.getBoundingClientRect()
				} else {
					imgEl = document
						.querySelector('.about__mob_img')
						.getBoundingClientRect()
				}
				const summImgEl = imgEl.left + imgEl.width
				elHtml.style.marginLeft = summImgEl + 'px'
			})
		},
		setWidthFactsImage() {
			const elHtmlImage = document.querySelector('.facts__images_img1')
			const styleElLi = document.querySelector('.about__information_li1')
			if (styleElLi?.getBoundingClientRect()) {
				elHtmlImage.style.width = styleElLi.getBoundingClientRect().width + 'px'
			}
		},
	},
	mounted() {
		setTimeout(() => {
			const docEl = document.querySelectorAll('.facts__span')
			docEl.forEach(el => (el.style.fontWeight = '700'))
			this.setLeftEl()
			this.setWidthFactsImage()
		}, 100)
		if (window.innerWidth > 1240) {
			this.initGsap()
		} else {
			this.useGsapAnimationOpacity(['.facts'], '.facts')
		}
	},
}
</script>

<style scoped>
.facts {
	position: relative;
	width: 100%;
	padding-bottom: 56px;
	z-index: 17;
}
.facts__content {
	border-bottom: 1px solid #d2bcae;
}
.facts__menu {
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
	padding: 0 30px;
}
.facts__mob {
	display: none;
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
	padding: 0 30px;
}
.facts__title {
	font-weight: 300;
	font-size: 17px;
	color: var(--brown);
	transform: translateY(25px);
	opacity: 0;
}
.facts__items {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 85px;
	max-width: 1600px;
	margin-bottom: 25px;
}
/* .facts__item {
  border: 1px solid red;
} */
.facts__number {
	font-weight: 500;
	font-size: 36px;
	color: var(--brown);
	margin-bottom: 78px;
	text-align: end;
	opacity: 0;
}
.facts__text {
	font-weight: 300;
	font-size: 17px;
	color: var(--brown);
	text-transform: lowercase;
	text-align: justify;
	opacity: 0;
}
.facts__images {
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
	padding: 40px 30px 96px 30px;
	display: grid;
	grid-template-columns: repeat(2, 19% 81%);
}
.facts__images_img1 {
	opacity: 0;
}
.facts__images_img2 {
	opacity: 0;
}
.facts__images_img:nth-child(1) img {
	width: 100%;
	object-fit: cover;
}
.facts__images_img:nth-child(2) {
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateX(-80px);
}
.facts__mob_span {
	font-weight: 700;
}
.facts__mob_name {
	font-weight: 300;
	font-size: 17px;
	color: var(--brown);
	margin-bottom: 60px;
}
.facts__mob_items {
	display: grid;
	grid-template-columns: 0.6fr 0.7fr 1fr;
	column-gap: 100px;
}
.facts__mob_number {
	font-weight: 500;
	font-size: 30px;
	color: var(--brown);
	margin-bottom: 35px;
}
.facts__mob_img {
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
}
.facts__mob_img img {
	height: 136px;
}
.facts__mob_text {
	font-weight: 300;
	font-size: 16px;
	color: var(--brown);
	text-transform: lowercase;
	text-align: justify;
}
.facts__mobile {
	display: none;
	justify-content: space-between;
	column-gap: 100px;
	max-width: 100%;
	margin-right: 30px;
}
.facts__m {
	display: none;
	margin: 80px 30px 0px 30px;
}
@media screen and (max-width: 1400px) {
	.facts__number {
		font-size: 30px;
		margin-bottom: 58px;
	}
	.facts__text {
		font-size: 16px;
	}
}
@media screen and (max-width: 1240px) {
	.facts {
		opacity: 0;
	}
	.facts__m {
		display: block;
	}
	.facts__menu {
		display: none;
	}
	.facts__images {
		display: none;
	}
	.facts__content {
		margin-bottom: 80px;
	}
	.facts__mob {
		display: block;
	}
	.facts__mobile {
		display: flex;
	}
	.facts__title {
		opacity: 1;
	}
	.facts__number {
		opacity: 1;
	}
	.facts__text {
		opacity: 1;
	}
	.facts__images_img1 {
		opacity: 1;
	}
	.facts__images_img2 {
		opacity: 1;
	}
}
@media screen and (max-width: 1140px) {
	.facts__mob_items {
		display: grid;
		grid-template-columns: 0.6fr 0.5fr 136px;
		column-gap: 70px;
	}
}
@media screen and (max-width: 1100px) {
	.facts__mob_number {
		font-size: 27px;
	}
	.facts__number {
		font-size: 27px;
	}
	.facts__mob_text {
		font-size: 15px;
	}
	.facts__m {
		margin: 50px 30px 0px 30px;
	}
}
@media screen and (max-width: 767px) {
	.facts__mobile {
		margin-left: 30px !important;
	}
	.facts__mob_img {
		display: none;
	}
	.facts__content {
		margin-bottom: 30px;
		padding-bottom: 30px;
	}
	.facts__mob_items {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 100px;
	}
}
@media screen and (max-width: 581px) {
	.facts__mob_items {
		column-gap: 50px;
	}
	.facts__mobile {
		column-gap: 50px;
	}
}
@media screen and (max-width: 453px) {
	.facts__mob_name {
		margin-bottom: 45px;
	}
	.facts__mob_items {
		display: flex;
		flex-direction: column;
		gap: 30px;
		max-width: 250px;
	}
	.facts__mobile {
		display: flex;
		flex-direction: column;
		gap: 30px;
		max-width: 250px;
	}
	.facts__mob_block1 {
		width: 93%;
	}
	.facts__mob_block2 {
		width: 87%;
	}
	.facts__mob_block3 {
		width: 92%;
	}
	.facts__mob_block4 {
		width: 97%;
	}
}
</style>
