

var app = new Vue({
	el: '#app',
	data: {
		DefaultLayout: [
			{
				logo: {
					imgSrc: 'https://fakeimg.pl/650x98/ff998f/000?text=LOGO(650x98)',
					link: '#',
				},
				menu: [
					{
						id: 'women',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=WOMEN',
						alt: 'women',
						width: '162.5'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=MEN',
						alt: 'men',
						width: '162.5'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=KIDS',
						alt: 'kids',
						width: '162.5'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=BABY',
						alt: 'baby',
						width: '162.5'
					}
				],
				banner: {
					imgSrc: 'https://fakeimg.pl/650x600/ff45f9/000?text=BANNER',
					link: '#',
				},
				button: {
					imgSrc: 'https://fakeimg.pl/650x150/f9903d/000?text=BUTTON',
					link: '#',
				},
				product: [
					{
						id: 'pd_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product01',
					},
					{
						id: 'pd_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product02',
					},
					{
						id: 'pd_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product03',
					},
					{
						id: 'pd_4',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product04',
					},
					{
						id: 'pd_5',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product05',
					},
					{
						id: 'pd_6',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product06',
					},
					{
						id: 'pd_7',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product07',
					},
					{
						id: 'pd_8',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'product08',
					}
				],
				footer: {
					fb: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						link: ''
					},
					ig: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						link: ''
					},
					line: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
						link: ''
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: 'https://fakeimg.pl/470x158/000000/fff?text=footer-content(470x158)',
				}
			},
			{
				logo: {
					imgSrc: 'https://fakeimg.pl/650x98/ff998f/000?text=LOGO(650x98)',
					link: '#',
				},
				menu: [
					{
						id: 'women',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=WOMEN',
						alt: 'women',
						width: '162.5'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=MEN',
						alt: 'men',
						width: '162.5'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=KIDS',
						alt: 'kids',
						width: '162.5'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=BABY',
						alt: 'baby',
						width: '162.5'
					}
				],
				banner: {
					imgSrc: 'https://fakeimg.pl/650x600/ff45f9/000?text=BANNER',
					link: '#',
				},
				button: {
					imgSrc: 'https://fakeimg.pl/650x150/f9903d/000?text=BUTTON',
					link: '#',
				},
				productS: [
					{
						id: 'pds_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'pds_1',
					},
					{
						id: 'pds_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/650x859/00154d?text=product',
						alt: 'pds_2',
					},
				],
				productL: [
					{
						id: 'pdL_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/55d355/000?text=MEN-left',
						alt: 'pdL_1',
					},
					{
						id: 'pdL_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/533655/000?text=MEN-left',
						alt: 'pdL_2',
					},
					{
						id: 'pdL_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3dff00/000?text=MEN-left',
						alt: 'pdL_3',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/553dd5/000?text=MEN-right',
						alt: 'pdr_1',
					},
					{
						id: 'pdr_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/5995d3/000?text=MEN-right',
						alt: 'pdr_2',
					},
					{
						id: 'pdr_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/669d3d/000?text=MEN-right',
						alt: 'pdr_3',
					},
				],
				footer: {
					fb: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						link: ''
					},
					ig: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						link: ''
					},
					line: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
						link: ''
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: 'https://fakeimg.pl/470x158/000000/fff?text=footer-content(470x158)',
				}
			},
			{
				logo: {
					imgSrc: 'https://fakeimg.pl/650x98/ff998f/000?text=LOGO(650x98)',
					link: '#',
				},
				menu: [
					{
						id: 'women',
						link: '#',
						imgSrc: 'https://fakeimg.pl/163x88/ffffff/000?text=WOMEN',
						alt: 'women',
						width: '162.5'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=MEN',
						alt: 'men',
						width: '162.5'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=KIDS',
						alt: 'kids',
						width: '162.5'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/162x88/ffffff/000?text=BABY',
						alt: 'baby',
						width: '162.5'
					}
				],
				banner: {
					imgSrc: 'https://fakeimg.pl/650x600/ff45f9/000?text=BANNER',
					link: '#',
				},
				button: {
					imgSrc: 'https://fakeimg.pl/650x150/f9903d/000?text=BUTTON',
					link: '#',
				},
				productL: [
					{
						id: 'pdL_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/55d355/000?text=MEN-left',
						alt: 'pdL_1',
					},
					{
						id: 'pdL_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/533655/000?text=MEN-left',
						alt: 'pdL_2',
					},
					{
						id: 'pdL_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3dff00/000?text=MEN-left',
						alt: 'pdL_3',
					},
					{
						id: 'pdL_4',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3d6d00/000?text=MEN-left',
						alt: 'pdL_4',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/553dd5/000?text=MEN-right',
						alt: 'pdr_1',
					},
					{
						id: 'pdr_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/5995d3/000?text=MEN-right',
						alt: 'pdr_2',
					},
					{
						id: 'pdr_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/669d3d/000?text=MEN-right',
						alt: 'pdr_3',
					},
					{
						id: 'pdr_4',
						link: '#',
						imgSrc: 'https://fakeimg.pl/325x872/3d99d0/000?text=MEN-right',
						alt: 'pdr_4',
					},
				],
				footer: {
					fb: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						link: ''
					},
					ig: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						link: ''
					},
					line: {
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
						link: ''
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: 'https://fakeimg.pl/470x158/000000/fff?text=footer-content(470x158)',
				}
			},
		],
		EDMtemplate: [
			{
				logo: {
					id: 'logo',
					link: 'https://www.nuvfashion.com/',
					imgSrc: '',
				},
				menu: [{
					id: 'women',
					link: '',
					imgSrc: '',
					alt: 'women',
					width: '162.5'
				},
				{
					id: 'men',
					link: '',
					imgSrc: '',
					alt: 'men',
					width: '162.5'
				},
				{
					id: 'kids',
					link: '',
					imgSrc: '',
					alt: 'kids',
					width: '162.5'
				},
				{
					id: 'baby',
					link: '',
					imgSrc: '',
					alt: 'baby',
					width: '162.5'
				}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button: {
					link: '',
					imgSrc: '',
				},
				product: [
					{
						id: 'pd_1',
						link: '',
						imgSrc: '',
						alt: 'product01',
					},
					{
						id: 'pd_2',
						link: '',
						imgSrc: '',
						alt: 'product02',
					},
					{
						id: 'pd_3',
						link: '',
						imgSrc: '',
						alt: 'product03',
					},
					{
						id: 'pd_4',
						link: '',
						imgSrc: '',
						alt: 'product04',
					},
					{
						id: 'pd_5',
						link: '',
						imgSrc: '',
						alt: 'product05',
					},
					{
						id: 'pd_6',
						link: '',
						imgSrc: '',
						alt: 'product06',
					},
					{
						id: 'pd_7',
						link: '',
						imgSrc: '',
						alt: 'product07',
					},
					{
						id: 'pd_8',
						link: '',
						imgSrc: '',
						alt: 'product08',
					}
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: '',
				}
			},
			{
				logo: {
					id: 'logo',
					link: 'https://www.nuvfashion.com/',
					imgSrc: '',
				},
				menu: [{
					id: 'women',
					link: '',
					imgSrc: '',
					alt: 'women',
					width: '162.5'
				},
				{
					id: 'men',
					link: '',
					imgSrc: '',
					alt: 'men',
					width: '162.5'
				},
				{
					id: 'kids',
					link: '',
					imgSrc: '',
					alt: 'kids',
					width: '162.5'
				},
				{
					id: 'baby',
					link: '',
					imgSrc: '',
					alt: 'baby',
					width: '162.5'
				}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button: {
					link: '',
					imgSrc: '',
				},
				productS: [
					{
						id: 'pds_1',
						link: '',
						imgSrc: '',
						alt: 'product01',
					},
					{
						id: 'pds_2',
						link: '',
						imgSrc: '',
						alt: 'product02',
					},
				],
				productL: [
					{
						id: 'pdl_1',
						link: '',
						imgSrc: '',
						alt: 'product01_L',
					},
					{
						id: 'pdl_2',
						link: '',
						imgSrc: '',
						alt: 'product02_L',
					},
					{
						id: 'pdl_3',
						link: '',
						imgSrc: '',
						alt: 'product03_L',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '',
						imgSrc: '',
						alt: 'product01_R',
					},
					{
						id: 'pdr_2',
						link: '',
						imgSrc: '',
						alt: 'product02_R',
					},
					{
						id: 'pdr_3',
						link: '',
						imgSrc: '',
						alt: 'product03_R',
					},
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: '',
				}
			},
			{
				logo: {
					id: 'logo',
					link: 'https://www.nuvfashion.com/',
					imgSrc: '',
				},
				menu: [{
					id: 'women',
					link: '',
					imgSrc: '',
					alt: 'women',
					width: '162.5'
				},
				{
					id: 'men',
					link: '',
					imgSrc: '',
					alt: 'men',
					width: '162.5'
				},
				{
					id: 'kids',
					link: '',
					imgSrc: '',
					alt: 'kids',
					width: '162.5'
				},
				{
					id: 'baby',
					link: '',
					imgSrc: '',
					alt: 'baby',
					width: '162.5'
				}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button: {
					link: '',
					imgSrc: '',
				},
				productL: [
					{
						id: 'pdl_1',
						link: '',
						imgSrc: '',
						alt: 'product01_L',
					},
					{
						id: 'pdl_2',
						link: '',
						imgSrc: '',
						alt: 'product02_L',
					},
					{
						id: 'pdl_3',
						link: '',
						imgSrc: '',
						alt: 'product03_L',
					},
					{
						id: 'pdl_4',
						link: '',
						imgSrc: '',
						alt: 'product04_L',
					},
				],
				productR: [
					{
						id: 'pdr_1',
						link: '',
						imgSrc: '',
						alt: 'product01_R',
					},
					{
						id: 'pdr_2',
						link: '',
						imgSrc: '',
						alt: 'product02_R',
					},
					{
						id: 'pdr_3',
						link: '',
						imgSrc: '',
						alt: 'product03_R',
					},
					{
						id: 'pdr_4',
						link: '',
						imgSrc: '',
						alt: 'product04_R',
					},
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
					}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: '',
				}
			},
		],
		oupputData: '',
		isOpenNav: false,
		isAddUTM: false,
		UTMData: {
			source: 'EDM',
			medium: 'EDM',
			campaign: 'test',
		},
	},
	methods: {
		outputEDMHtml() {
			const preview = document.getElementById('preview');
			this.oupputData = preview.firstChild.outerHTML;

		},
		focusImg(id, i) {
			const edmTable_td = document.querySelectorAll('.edmTable_td');
			const target = document.getElementById(id);
			edmTable_td.forEach((item) => {
				item.classList.remove('l-targetFocus_link', 'l-targetFocus_img');
			})
			switch (i) {
				case 0:
					target.classList.add('l-targetFocus_link');
					break;
				case 1:
					target.classList.add('l-targetFocus_img');
					break;
			}
		},
		blurImg() {
			const edmTable_td = document.querySelectorAll('.edmTable_td img');
			edmTable_td.forEach((item) => {
				item.classList.remove('l-targetFocus_img', 'l-targetFocus_link');
			})
		},
		addUTM(index) {
			// 先取得 templateObj (物件)

			const vm = this;
			if(vm.isAddUTM) return;
			const UTMStr = `?utm_source=${vm.UTMData.source}&utm_medium=${vm.UTMData.medium}&utm_campaign=${vm.UTMData.campaign}`;
			
			// layout
			vm.EDMtemplate[index].logo.link += UTMStr;
			vm.EDMtemplate[index].menu.forEach((item) => {
				item.link += UTMStr;
			});


			// 判斷是否有 banner
			if(vm.EDMtemplate[index].banner){
				vm.EDMtemplate[index].banner.link += UTMStr;
			};

			// 判斷是否有 btn
			if(vm.EDMtemplate[index].button){
				vm.EDMtemplate[index].button.link += UTMStr;
			};
			// pd 
			// 要判斷有幾個單欄雙欄

			if(vm.EDMtemplate[index].product){
				const pd = vm.EDMtemplate[index].product;
				pd.forEach((item) => {
					item.link += UTMStr;
				})
			};

			if(vm.EDMtemplate[index].productS){
				const pd = vm.EDMtemplate[index].productS;
				pd.forEach((item) => {
					item.link += UTMStr;
				})
			};

			if(vm.EDMtemplate[index].productL){
				const pd = vm.EDMtemplate[index].productL;
				pd.forEach((item) => {
					item.link += UTMStr;
				})
			};

			if(vm.EDMtemplate[index].productR){
				const pd = vm.EDMtemplate[index].productR;
				pd.forEach((item) => {
					item.link += UTMStr;
				})
			};
			vm.isAddUTM = true;
		}

	},
	computed: {
		toNumber() {
			this.nowEDMTemplateIndex = parseInt(this.nowEDMTemplateIndex);
		},
	},


});

