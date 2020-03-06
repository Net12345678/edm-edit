

var app = new Vue({
	el: '#app',
	data: {
		DefaultLayout:{
				logo:{
						imgSrc:'https://fakeimg.pl/640x98/ff548f/000?text=LOGO(640x98)',
						link:'#',
				},
				menu: [
					{
						id: 'women',
						link: '#',
						imgSrc: 'https://fakeimg.pl/200x88/ffffff/000?text=WOMEN',
						alt: 'women',
						width: '200'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/120x88/ffffff/000?text=MEN',
						alt: 'men',
						width: '120'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/145x88/ffffff/000?text=KIDS',
						alt: 'kids',
						width: '145'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/175x88/ffffff/000?text=BABY',
						alt: 'baby',
						width: '175'
					}
				],
				banner:{
					imgSrc:'https://fakeimg.pl/640x600/ff45f9/000?text=BANNER',
					link:'#',						
				},
				button:{
					imgSrc:'https://fakeimg.pl/640x150/f00d30/000?text=BUTTON',
					link:'#',						
				},
				product:[{
						imgSrc:'',
						link:'',
						alt:''
				}],
				footer:{
						fb:{
								imgSrc:'',
								link:''
						},
						ig:{
								imgSrc:'',
								link:''
						},
						line:{
								imgSrc:'',
								link:''
						}
				},
				footerContent: {
					id: 'footerContent',
					imgSrc: 'https://fakeimg.pl/460x158/000000/fff?text=footer-content(460x158)',
				}
		},

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
					alt:'women',
					width: '200'
				},
				{
					id: 'men',
					link: '',
					imgSrc: '',
					alt:'men',
					width: '120'
				},
				{
					id: 'kids',
					link: '',
					imgSrc: '',
					alt:'kids',
					width: '145'
				},
				{
					id: 'baby',
					link: '',
					imgSrc: '',
					alt:'baby',
					width: '175'
				}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button:{
					link:'',
					imgSrc:'',						
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
				menu: [
					{
						id: 'women',
						link: '',
						imgSrc: '',
						alt:'women',
						width: '200'
					},
					{
						id: 'men',
						link: '',
						imgSrc: '',
						alt:'men',
						width: '120'
					},
					{
						id: 'kids',
						link: '',
						imgSrc: '',
						alt:'kids',
						width: '145'
					},
					{
						id: 'baby',
						link: '',
						imgSrc: '',
						alt:'baby',
						width: '175'
					}
				],
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
				},
				button:'',
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
		],
		chooseTtmplate: '請選擇版型...',
		nowEDMTemplate: '',
		nowEDMTemplateIndex: '',
		EDMForm: [
			`1版`,
			`2版`,
		],
		oupputData: '',
	},
	methods: {
		choose(value) {
			if( typeof(value) !== 'number' ){ 
				return;
			};
			this.nowEDMTemplate = this.EDMtemplate[value];
			this.nowEDMTemplateIndex = value;
		},
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
			switch(i){
				case 0 :			
					console.log(target);
					target.classList.add('l-targetFocus_link');
					break;
				case 1 : 			
					console.log(target);		
					target.classList.add('l-targetFocus_img');
					break;
			}
		},
		blurImg(){
			const edmTable_td = document.querySelectorAll('.edmTable_td');
			edmTable_td.forEach((item) => {
				item.classList.remove('l-targetFocus_img', 'l-targetFocus_link');
			})
		}
	},
	computed: {
		toNumber() {
			this.nowEDMTemplateIndex = parseInt(this.nowEDMTemplateIndex);
		},
	},


});

