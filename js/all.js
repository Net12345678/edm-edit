// var EDMinput = {
// 	data: function () {
//     return {
      
//     }
// 	},
// 	props: [
// 		'id',
// 		'title',
// 		'link',
// 		'img',
// 	],
// 	template: `
// 	<div class="form-group">
// 		<label class="mb-2" for="${id}">${title}</label>
// 		<div class="row">
// 			<div class="col">
// 				<input type="text" v-model="${link}" class="form-control" placeholder="${title}">
// 			</div>
// 			<div class="col">
// 				<slot></slot>
// 			</div>
// 		</div>
// 	</div>
// 	`,
// };

var app = new Vue({
	el: '#app',
	data: {
		DefaultLayout:{
				logo:{
						imgSrc:'https://fakeimg.pl/640x98/ff548f/000?text=LOGO(640x98)',
						link:'#',
				},
				menu: [{
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
					link: '#',
					imgSrc: 'https://fakeimg.pl/200x88/ffffff/000?text=WOMEN',
					alt:'women',
					width: '200'
				},
				{
					id: 'men',
					link: '#',
					imgSrc: 'https://fakeimg.pl/120x88/ffffff/000?text=MEN',
					alt:'men',
					width: '120'
				},
				{
					id: 'kids',
					link: '#',
					imgSrc: 'https://fakeimg.pl/145x88/ffffff/000?text=KIDS',
					alt:'kids',
					width: '145'
				},
				{
					id: 'baby',
					link: '#',
					imgSrc: 'https://fakeimg.pl/175x88/ffffff/000?text=BABY',
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
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product01',						
					},
					{
						id: 'pd_2',
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product02',						
					},
					{
						id: 'pd_3',
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product03',
					},
					{
						id: 'pd_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product04',						
					},
					{
						id: 'pd_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product05',						
					},
					{
						id: 'pd_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product06',						
					},
					{
						id: 'pd_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product07',						
					},
					{
						id: 'pd_1',
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product08',						
					}
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '#',
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '#',
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '#',
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
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
						link: '#',
						imgSrc: 'https://fakeimg.pl/200x88/ffffff/000?text=WOMEN',
						alt:'women',
						width: '200'
					},
					{
						id: 'men',
						link: '#',
						imgSrc: 'https://fakeimg.pl/120x88/ffffff/000?text=MEN',
						alt:'men',
						width: '120'
					},
					{
						id: 'kids',
						link: '#',
						imgSrc: 'https://fakeimg.pl/145x88/ffffff/000?text=KIDS',
						alt:'kids',
						width: '145'
					},
					{
						id: 'baby',
						link: '#',
						imgSrc: 'https://fakeimg.pl/175x88/ffffff/000?text=BABY',
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
						link: '#',
						imgSrc: 'https://fakeimg.pl/640x859/00154d?text=product',
						alt: 'product01',						
					},
				],
				footerIcon: {
					fb: {
						id: 'fb',
						link: '#',
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=fb(60x158)',
						alt: 'facebook',
					},
					ig: {
						id: 'ig',
						link: '#',
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=ig(60x158)',
						alt: 'instagram',
					},
					line: {
						id: 'line',
						link: '#',
						imgSrc: 'https://fakeimg.pl/60x158/000000/fff?text=line(60x158)',
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
	},
	computed: {
		toNumber() {
			this.nowEDMTemplateIndex = parseInt(this.nowEDMTemplateIndex);
		},
		refresh() {
			const edmInput = document.getElementById('edmInput');

		},
	},


});

