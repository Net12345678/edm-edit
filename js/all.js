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
					id: 'logo2',
					link: '',
					imgSrc: '',
				},
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
					alt: '',
					aliText: 'Banner 描述',
				},
				product: [
					{
						id: 'pd_1',
						link: '',
						imgSrc: '',
						alt: '',
						aliText: 'Product_01 描述',
					},
					{
						id: 'pd_2',
						link: '',
						imgSrc: '',
						alt: '',
						aliText: 'Product_02 描述',
					},
				],
				footer: {
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
					},
					content: {
						id: 'footerContent',
						link: '',
						imgSrc: '',
					}
				}
			},
		],
		chooseTtmplate: '請選擇版型...',
		nowEDMTemplate: '',
		nowEDMTemplateIndex: '',
		EDMHTML: [
			`
			<div class="form-group">
				<label class="mb-2" for="logo_link">Logo 連結 / 圖片</label>
				<div class="row">
					<div class="col">
						<input type="text" class="form-control" placeholder="連結">
					</div>
					<div class="col">
						<input type="text" class="form-control" placeholder="圖片位址">
					</div>
				</div>
			</div>
			<div class="form-group">
				<label class="mb-2" for="logo_link">Banner 連結 / 圖片</label>
				<div class="row">
					<div class="col">
						<input type="text" class="form-control" placeholder="連結">
					</div>
					<div class="col">
						<input type="text" class="form-control" placeholder="圖片位址">
					</div>
				</div>
			</div>
			<div class="text-right mb-3">
				<button type="button" class="btn btn-dark">製作</button>
			</div>
			`,
			`1`,
		],
	},
	methods: {
		choose(value) {
			if( typeof(value) !== 'number' ){ 
				return;
			};
			this.nowEDMTemplate = this.EDMtemplate[value];
			this.nowEDMTemplateIndex = value;
		},
	},
	computed: {
		toNumber() {
			this.nowEDMTemplateIndex = parseInt(this.nowEDMTemplateIndex);
		}
		
	},

});

