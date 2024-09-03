<template>
	<div
		class="delivery__adress"
		@keydown="handleKeydown"
		ref="deliveryAdress"
		tabindex="0"
		@mouseenter="setActiveFocus"
		v-show="filterArr?.length > 0"
		v-auto-animate
	>
		<div
			class="delivery__adress_dropdown"
			v-for="(item, idx) in useactivePvzMail ? getPvzMail : getArray"
			:key="item"
			:class="{ activeDropdown: idx === activeIdx }"
			:ref="'dropdown' + idx"
			@click="activeDropdown(idx, item)"
			data-cursor-class="animateCursor"
		>
			<span class="delivery__adress_span" v-if="!useactivePvzMail">{{
				item?.location?.city + `, ${item?.location?.address}`
			}}</span>
			<span class="delivery__adress_span" v-else>{{
				`г.  ${
					useActiveRegion.settlement === useActiveRegion.region
						? useActiveRegion.settlement
						: useActiveRegion.settlement + ', ' + useActiveRegion.region
				}, ${item['address-source']}`
			}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		arrCitys: Array,
		pvzInputVal: String,
		getPvzMail: Array,
	},
	data() {
		return {
			useCursor: useCursor(),
			activeIdx: 2,
			filterArr: [],
			useactivePvzMail: useActivePvzMail(),
			useActiveRegion: useActiveRegion(),
		}
	},
	computed: {
		getArray() {
			const filteredArr = this.arrCitys.filter(el => {
				const city = el?.location?.city ? el.location.city : ''
				const address = el.location.address ? el.location.address : ''
				const str = (city + ', ' + address)
					.toLowerCase()
					.replace(/[\s,.-/]+/g, '')
				const strValInput = this.pvzInputVal
					.toLowerCase()
					.replace(/[\s,.-/]+/g, '')
				if (str.includes(strValInput)) {
					return el
				}
			})
			this.filterArr = filteredArr
			return filteredArr
		},
	},
	mounted() {
		if (this.useactivePvzMail) {
			this.filterArr = this.getPvzMail
		}
		this.useCursor = true
		this.dropDownClose()
	},
	methods: {
		handleKeydown(event) {
			if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
				event.preventDefault()

				if (event.key === 'ArrowUp' && this.activeIdx > 0) {
					this.activeIdx--
					this.scrollToActive()
				} else if (
					event.key === 'ArrowDown' &&
					this.activeIdx < this.filterArr.length - 1
				) {
					this.activeIdx++
					this.scrollToActive()
				}
			} else if (event.key === 'Enter') {
				this.$emit('setCity', this.filterArr[this.activeIdx])
			}
		},
		activeDropdown(idx, item) {
			this.activeIdx = idx
			this.$emit('setCity', item)
		},
		setActiveFocus() {
			if (this.$refs.deliveryAdress) {
				this.$refs.deliveryAdress.focus()
			}
		},
		scrollToActive() {
			const container = this.$refs.deliveryAdress
			if (!container) {
				return
			}

			const activeElement = this.$refs['dropdown' + this.activeIdx]

			if (!activeElement || !activeElement[0]) {
				return
			}

			const elementTop = activeElement[0].offsetTop
			const elementHeight = activeElement[0].offsetHeight
			const containerHeight = container.clientHeight

			if (elementTop < container.scrollTop) {
				container.scrollTop = elementTop
			} else if (
				elementTop + elementHeight >
				container.scrollTop + containerHeight
			) {
				container.scrollTop = elementTop + elementHeight - containerHeight
			}
		},
		dropDownClose() {
			setTimeout(() => {
				const blockEl = document.querySelector('.delivery__adress')
				document.addEventListener('mouseup', e => {
					const click = e.composedPath().includes(blockEl)
					if (!click) {
						this.$emit('close')
					}
				})
			}, 0)
		},
	},
}
</script>

<style scoped>
.delivery__adress {
	position: absolute;
	width: 100%;
	top: 110%;
	left: 0;
	background: #fff;
	box-shadow: 2px 2px 20px 2px rgba(207, 201, 180, 0.4);
	max-height: 300px;
	padding: 5px;
	overflow: auto;
	overflow-x: hidden;
	z-index: 33;
}
.delivery__adress_dropdown {
	font-size: 16px;
	color: var(--brown);
	font-weight: 300;
	padding: 15px 10px;
	margin-bottom: 5px;
	cursor: pointer;
	transition: all 0.2s ease;
}
@media (hover: hover) and (pointer: fine) {
	.delivery__adress_dropdown:hover {
		background: var(--brown);
		color: #fff;
	}

	.activeDropdown {
		background: var(--brown);
		color: #fff;
	}
}
</style>
