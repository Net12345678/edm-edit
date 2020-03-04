var app = new Vue({
	el: '#app',
	data: {
        DefaultLayout:{
            logo:{
                imgsrc:'https://fakeimg.pl/640x98/ff548f/000?text=LOGO(640x98)',
                linkhref:'#'
            },
            banner:{
                imgsrc:'',
                linkhref:'',
                alt:''
            },
            product:[{
                imgsrc:'',
                linkhref:'',
                alt:''
            }],
            footer:{
                fb:{
                    imgsrc:'',
                    linkhref:''
                },
                ig:{
                    imgsrc:'',
                    linkhref:''
                },
                line:{
                    imgsrc:'',
                    linkhref:''
                },
                content:{
                    imgsrc:''
                }
            }
        },

		EDMtemplate: [
			{
				logo: {
					id: 'logo',
					link: '',
					imgSrc: '',
					linkText: 'Logo 連結',
					imgText: 'Logo 圖片位址',
				},
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
					alt: '',
					linkText: 'Banner 連結',
					imgText: 'Banner 圖片位址',
					aliText: 'Banner 描述',
				},
				product: [
					{
						id: 'pd_1',
						link: '',
						imgSrc: '',
						alt: '',
						linkText: 'Product_01 連結',
						imgText: 'Product_01 圖片位址',
						aliText: 'Product_01 描述',
					},
					{
						id: 'pd_2',
						link: '',
						imgSrc: '',
						alt: '',
						linkText: 'Product_02 連結',
						imgText: 'Product_02 圖片位址',
						aliText: 'Product_02 描述',
					},
					{
						id: 'pd_3',
						link: '',
						imgSrc: '',
						alt: '',
						linkText: 'Product_03 連結',
						imgText: 'Product_03 圖片位址',
						aliText: 'Product_03 描述',
					},
				],
				footer: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
						linkText: 'Facebook 連結',
						imgText: 'Facebook 圖片位址',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
						linkText: 'Instagram 連結',
						imgText: 'Instagram 圖片位址',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
						linkText: 'Line 連結',
						imgText: 'Line 圖片位址',
					},
					content: {
						id: 'footerContent',
						link: '',
						imgSrc: '',
						linkText: 'Footer 連結',
						imgText: 'Footer 圖片位址',
					}
				}
			},
			{
				logo: {
					id: 'logo',
					link: '',
					imgSrc: '',
					linkText: 'Logo 連結',
					imgText: 'Logo 圖片位址',
				},
				banner: {
					id: 'banner',
					link: '',
					imgSrc: '',
					alt: '',
					linkText: 'Banner 連結',
					imgText: 'Banner 圖片位址',
					aliText: 'Banner 描述',
				},
				product: [
					{
						id: 'pd_1',
						link: '',
						imgSrc: '',
						alt: '',
						linkText: 'Product_01 連結',
						imgText: 'Product_01 圖片位址',
						aliText: 'Product_01 描述',
					},
					{
						id: 'pd_2',
						link: '',
						imgSrc: '',
						alt: '',
						linkText: 'Product_02 連結',
						imgText: 'Product_02 圖片位址',
						aliText: 'Product_02 描述',
					},
				],
				footer: {
					fb: {
						id: 'fb',
						link: '',
						imgSrc: '',
						alt: 'facebook',
						linkText: 'Facebook 連結',
						imgText: 'Facebook 圖片位址',
					},
					ig: {
						id: 'ig',
						link: '',
						imgSrc: '',
						alt: 'instagram',
						linkText: 'Instagram 連結',
						imgText: 'Instagram 圖片位址',
					},
					line: {
						id: 'line',
						link: '',
						imgSrc: '',
						alt: 'line',
						linkText: 'Line 連結',
						imgText: 'Line 圖片位址',
					},
					content: {
						id: 'footerContent',
						link: '',
						imgSrc: '',
						linkText: 'Footer 連結',
						imgText: 'Footer 圖片位址',
					}
				}
			},
		],
	}
});

